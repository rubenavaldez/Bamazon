var mysql = require("mysql");
var responseData;

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
  //  connection.end();
 });
}

function displayResults(res){
for(i=0; i < res.length; i++){
    console.log("Item #" + res[i].item_id);
   console.log("Product name " + res[i].product_name)
   console.log("Department " +res[i].department_name)
   console.log("Price $" + res[i].price)
   console.log(res[i].stock_quantity + " left in stock")
   console.log("")
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
  //  console.log(response.item,response.quantity)
   
  checkQuantity(response.item,response.quantity)

  //  if(response.confirm){
  //      console.log(response)
  //  }
 })

}

function checkQuantity(item, quantity){
  // console.log(item + " " + quantity)
  var query = "SELECT * FROM products where item_id =?; " ;
  // var connection = mysql.createConnection({
  //   host: "localhost",
   
  //   // Your port; if not 3306
  //   port: 3306,
   
  //   // Your username
  //   user: "root",
   
  //   // Your password
  //   password: "Monkey",
  //   database: "bamazon_db"
  //  });
  // connection.connect(function(err) {
  //   if (err) throw err;
  //   // console.log("connected as id " + connection.threadId);
  //   newConnection(query, item, quantity);
  //  });
  newConnection(query, item, quantity);
  function newConnection(query, item, quantity) {
    // console.log(query)
    connection.query(query,[item], function(err, res) {
      if (err) throw err;
      // displayResults(res)
       
      
      // console.log(res[0].stock_quantity)
      // console.log(quantity)
      if(quantity > res[0].stock_quantity){
        console.log("Insufficient quantity")
      } else{
        console.log("We'll process your order")

        // subtract quantity from database 
       console.log ("Your total is " + (res[0].price * quantity).toFixed(2) )
       var newQuantity = res[0].stock_quantity - quantity;
      //  query = "UPDATE products SET stock_quantity = "+ newQuantity + " WHERE item_id = " + item +";";
       
      query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
      
      //  console.log(quantity)
      //  console.log(newQuantity)
      //  console.log(query)
        updateQuantity(query) 
        function updateQuantity(query){
          connection.query(query, [newQuantity, item], function(err, res) {
            if (err) throw err;
            
          })
        }
        


      }

     connection.end();
    });
   }
   
}

