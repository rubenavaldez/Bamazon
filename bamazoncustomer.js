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