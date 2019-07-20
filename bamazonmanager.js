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
 userPrompt();
});



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
        type:"list",
        message: "Which task would you like?",
        choices:["View products for sale","View Low Inventory","Add To Inventory", "Add New Product"],
        name:"answer",
    },  

 ])
 .then(function(response){
//   console.log(response)
    
   switchChoice(response.answer)
  

  
 })

}

function switchChoice(response){

    switch(response){
        case "View products for sale":
            console.log("sale")
                
                    connection.query("SELECT * FROM products", function(err, res) {
                      if (err) throw err;
                      displayResults(res)
                    
                      connection.end();
                    });
                   
                   break;
        case "View Low Inventory":           
        console.log("low")
        
            connection.query("SELECT * FROM products Where stock_quantity < 5", function(err, res) {
              if (err) throw err;
              displayResults(res)
            
              connection.end();
            });
           
           break;
           case "Add To Inventory":           
           console.log("add to")
           break;
           case "Add New Product":
               console.log("Add New Product")
               break;

        default:
            break;
    }




};