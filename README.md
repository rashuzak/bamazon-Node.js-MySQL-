# bamazon-Node.js-MySQL-
(Unit 12: MySQL)

Overview:
 MySQL command prompt connects to Node.js servers to a MySQL databases to perform queries based on client requests and return responses accordingly. Creating an Amazon-like storefront with  MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 

Need to save and require the MySQL and Inquirer npm packages to the files--
( app will need them for data input and storage).


Customer View:

1. Created a MySQL Database called `bamazon`.

2. Created a Table inside of that database called `products`.

3. The products table has the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 15 different products.

5. Created a Node application called `bamazonCustomer.js`. Running this application displays all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app will prompt users with two messages.

   * The first: asks the ID of the product they would like to buy.
   * The second: asks how many units of the product they would like to buy.

7. Once the customer has placed the order,  check if the store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -
## Key Topics
* MySQL Workbench
* MySQL command prompt
* Creating and dropping databases and tables
* schema.sql files
* CRUD
* Primary and foreign keys
* Prepared statements
* Joins
* ACID



## Helpful Links
* [SQL](https://en.wikipedia.org/wiki/SQL)
* [MySQL](https://en.wikipedia.org/wiki/MySQL)
* [MySQL - W3 Schools](http://www.w3schools.com/sql/)
* [MySQL Workbench Documentation](http://dev.mysql.com/doc/workbench/en/)
* [MySQL NPM Package](https://www.npmjs.com/package/mysql)

click to see DEMO: https://drive.google.com/file/d/19WU4g84YOQk2S7Ondlv-Z6mR1t50FdsC/view?usp=sharing
