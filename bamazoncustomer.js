var mysql = require("mysql");

var connection = mysql.createConnection({
 host: "localhost",

 // Your port; if not 3306
 port: 3306,

 // Your username
 user: "root",

 // Your password
 password: "Monkey",
 database: "bamazon_db"
});

connection.connect(function(err) {
 if (err) throw err;
 console.log("connected as id " + connection.threadId);
 afterConnection();
});

function afterConnection() {
 connection.query("SELECT * FROM products", function(err, res) {
   if (err) throw err;
   displayResults(res)
   userPrompt(res)
   connection.end();
 });
}

function displayResults(res){
for(i=0; i < res.length; i++){
    console.log("Item #" + res[i].item_id);
   console.log("Product name " + res[i].product_name)
   console.log("Department " +res[i].department_name)
   console.log("Price $" + res[i].price)
   console.log(res[i].stock_quantity + " left in stock")
}
}

function userPrompt(){
  var inquirer = require("inquirer");
inquirer
 .prompt([
   {
       type:"input",
       message: "Which item would you like to purchase",
       name:"item",
   },
   {
    type:"input",
    message: "How many would you like?",
    name:"quantity",
},

 ])
 .then(function(response){
   console.log(response.item,response.quantity)
   
  checkQuantity(response.item,response.quantity)

   if(response.confirm){
       console.log(response)
   }
 })

}

function checkQuantity(item, quantity){
  console.log(item + " " + quantity)
  var query = "SELECT * FROM products where item_id = " + item;
  var connection = mysql.createConnection({
    host: "localhost",
   
    // Your port; if not 3306
    port: 3306,
   
    // Your username
    user: "root",
   
    // Your password
    password: "Monkey",
    database: "bamazon_db"
   });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    newConnection(query);
   });
  function newConnection(query) {
    console.log(query)
    connection.query(query, function(err, res) {
      if (err) throw err;
      displayResults(res)
     return res;
    });
   }
   console.log(res)
}
