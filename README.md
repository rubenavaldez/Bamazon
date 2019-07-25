# Bamazon
Online store simulator featuring MySQL and Node.js. Bamazon utilizes NPM Inquirer to populate purchasable items from MySQL. Prices are calculated dynamically and purchases are updated in MySQL
This app also features a manager function which allows the user to sort by low inventory, add additional stock and add new products. All selections are updated in MySql 



This App requires Node.js and MySQL. Please refer to dependencies for additional requirements.

For customer functions:

Begin your input with "node bamazoncustomer.js"

A list of purchasable items will display. 

Choose an item to purchase

Choose a quantity

If sufficient is available, Bamazon will calculate a price.

If not the user will receive an alert.


For manager functions:

Begin input with "node bamazonmanager.js"

Select from the list of option 

"View products" will list all available items

"View Low Inventory" wil list all items display all items with a quantity less than 5

"Add To Inventory" will prompt the user to choose an item and quantity

"Add New Product" will prompt the user to input all necessary information to add a new item to the database.


Ruben Valdez - Sole Developer


    Match or update the following parameter in MySql

    // You host ip; if not localhost
    host: localhost

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: [your password],
    database: "bamazon_db"

    Demo:
    https://drive.google.com/file/d/1zRXe7ejaNF2_Hbjar1DnZiySAgbBNTKQ/view