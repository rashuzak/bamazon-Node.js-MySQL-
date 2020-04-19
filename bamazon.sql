DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id integer auto_increment NOT NULL PRIMARY KEY,
product_name  varchar(50) NOT NULL, 
department_name varchar(30) NULL,
price numeric(10,2),
stock_quantity integer

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Knife Set', 'Kitchen & Dining', 29.00, 17),
 ('T-Fal Cookware Set', 'Kitchen & Dining', 164.00, 7 ),
 ('Bakeware Set', 'Kitchen & Dining', 32.00, 15 ),
 ('T.V. Stand', 'Furniture', 123.00, 13),
 ('Recliner','Furniture', 425.00, 5),
 ('Computer Desk','Furniture', 210.00, 9),
 ('Oriental Rug', 'Accessories', 378.00, 5),
 ('Vanity Mirror','Accessories', 175.00, 21),
 ('Wall Art','Accessories', 110.00, 9),
 ('RoboVac','Appliances', 279.00, 5),
 ('Honeywell Fan','Appliances', 48.00, 17),
 ('Juicer','Appliances', 139.00, 35),
 ('Solar Lights','Garden & Outdoors', 37.00, 5),
 ('Lawnmower','Garden & Outdoors', 332.00, 7),
 ('BBQ Grill','Garden & Outdoors', 235.00, 3);
 


SELECT * FROM products;

