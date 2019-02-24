create database bamazon;

use bamazon;

CREATE TABLE products
(
id integer(11) Auto_Increment not null,
Product_name varchar
(30) not null,
Department_Name varchar
(30) not null,
Price integer (10) not null,
Stock_Quantity integer(30) not null,
 PRIMARY KEY
  (id)
);

 INSERT INTO products
    (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Tablets","Electronics", 200, 15);
     INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Couch","Furniture", 1500, 3);
     INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Spiderman","Electronics", 70, 50);
     INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Laptop","Electronics", 1200, 10);
     INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Chargers","Electronics", 9, 11);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Mixers","Houseware", 65, 7);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("PS4","Electronics", 300, 30);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Lol_Dolls","Toys", 17, 25);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("headphones","Electronics", 12, 15);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Harry_Potter","Books", 19.99, 5);
    INSERT INTO products
     (Product_name, Department_Name, Price, Stock_Quantity)
  VALUES
    ("Coffee","Grocery", 20, 7);
    
    
    SELECT *
  FROM products;