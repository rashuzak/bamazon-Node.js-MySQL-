var mysql = require("mysql")
var inquirer = require("inquirer")

// create the connection information for the sql database
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sakammar",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err
        // run the displayInventory function after the connection is made to prompt the user
    displayInventory()
});
//table and formatting 
var cliTable = require("cli-table");

var colors = require("colors");



// global variables          

var welcome = "                                  \n" +
              "                 WELCOME TO BAMAZON                  \n";
              

function displayInventory() {

    console.log(welcome);

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;

        //console.log(" Reached first function")
        var table = new cliTable({
            head: ["Item Number".cyan, "Product Name".cyan, "Department".cyan, "Price".cyan, "Quantity".cyan],
            colWidths: [13, 20, 20, 13, 13],
            });
        
        for(var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, parseFloat(res[i].price).toFixed(2), res[i].stock_quantity]
            );
        };
        
        console.log(table.toString());	
        purchase();
    });
};

// validateInput makes sure that the user is supplying only positive integers for their inputs
let validateInput = (value) => {
    var integer = Number.isInteger(parseFloat(value))
    var sign = Math.sign(value)

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.'
    }
}

// purchase function to prompt the customer for an item to purchase
let purchase = () => {
    inquirer.prompt([{
                type: "input",
                name: "item_id",
                message: "Select the item you would like to purchase by item number.",
                validate: validateInput,
                filter: Number
            },
            {
                type: "input",
                name: "quantity",
                message: "How many of would you like to purchase?",
                validate: validateInput,
                filter: Number
            }
        ])
        .then(function(purchase) {
            let item = purchase.item_id
            let quantity = purchase.quantity

            let queryStr = 'SELECT * FROM products WHERE ?';

            connection.query(queryStr, { item_id: item }, function(err, res) {
                if (err) throw err

                if (res.length === 0) {
                    console.log("ERROR: Invalid Item ID. Please select a valid Item ID.")
                    displayInventory()
                } else {

                    // set the results to the variable of productInfo
                    let productInfo = res[0]

                    if (quantity <= productInfo.stock_quantity) {
                        console.log("\n");
                        console.log(productInfo.product_name + "is in stock! Placing order now!");
                        console.log("\n");

                        // the updating query string
                        var updateQueryStr = "UPDATE products SET stock_quantity = " + (productInfo.stock_quantity - quantity) + " WHERE item_id = " + item
                            // console.log('updateQueryStr = ' + updateQueryStr);

                        // Update the inventory
                        connection.query(updateQueryStr, function(err, data) {
                            if (err) throw err;

                            console.log("Your order has been placed!");
                            console.log("Your total is $" + productInfo.price * quantity);
                            console.log(" - - - - - - - - - - - - - - - ");
                    //console.log("To shop again with us please input 'node bamazonCustomer.js' into your command line again.")
                            console.log("\n");
                            continueShopping();

                        })
                    } else {
                        console.log("Sorry, there is not enough " + productInfo.product_name + " in stock.");
                        console.log("Please modify your order or select another item.");
                        console.log("\n");
                        continueShopping();

                        // After 3 seconds display the inventory again so that the customer can make a new selcetion.
                       // setTimeout(function() { displayInventory() }, 3000)
                    }


                }
            })


        })
}

// Ask the user if they would like to continue shopping  
function continueShopping(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to continue shopping? ",
            name: "cont"
        }
    ])
    .then(function (shopping) {
        if (shopping.cont) {
            displayInventory();
        }
        else {
            exitBamazon();
        }
    });
};



//Exist  
function exitBamazon(){
    connection.end();
    console.log("\n");
    console.log("Thank you for shopping with bamazon!");
    console.log("\n");
};