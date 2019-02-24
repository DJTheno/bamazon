var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "theonlyninja331",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;



  start();
});

function start() {
  //prints the items for sale and their details
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log("id: " + res[i].id + " | " + "Product_name: " + res[i].Product_name + " | " + "Department_Name: " + res[i].Department_Name + " | " + "Price: " + res[i].Price + " | " + "Stock_Quantity: " + res[i].Stock_Quantity);
      console.log('--------------------------------------------------------------------------------------------------');
    }


    console.log(' ');
    inquirer.prompt([
      {

        type: "input",
        name: "id",
        choices: function () {
          var choiceArray = [];
          for (var i = 0; i < res.length; i++) {
            choiceArray.push(res[i].id);
          }
          return choiceArray;
        },
        message: "What is the ID of the product you would like to purchase?",
      },
      {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like?'
      }
    ])

      .then(function (answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (res[i].item_name === answer.choice) {
            chosenItem = res[i];
          }
        }
        //determine if there is enough in stock
        if (chosenItem.Stock_Quantity > parseInt(answer)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                Stock_Quantity: answer
              },
              {
                id: chosenItem.id
              }
            ],
            function (error) {
              if (error) throw err;
              console.log("your order has been placed");
              start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Not enough in stock, please try a lower ammount");
          start();
        }
      });
   

    
    }
  )}

