CREATE DATABASE bamazon_db;
USE bamazon_db; 

CREATE table products(
item_id integer(20) primary key auto_increment not null,
product_name varchar(100) not null,
department_name varchar(100),
price float(50) not null,
stock_quantity integer(50)

)