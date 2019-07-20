CREATE DATABASE bamazon_db;
USE bamazon_db; 

CREATE table products(
item_id integer(20) primary key auto_increment not null,
product_name varchar(100) not null,
department_name varchar(100),
price float(50) not null,
stock_quantity integer(50)

);

insert into products( product_name, department_name, price, stock_quantity)
values("Flying V Guitar", "Instruments", 15000.00, 17),
("Half Eaten Sandwhich", "Food", 1.00, 1),
("Sanuk Sandals Men's size 10", "Shoes", 50.00, 3),
("Novelty Bulldog Puppy Poster", "Decor", 8.00, 35),
("Peter Pan DVD", "Media", 35.00, 6),
("Bronze Tuba", "Instruments", 500.00, 12),
("Rice a Roni Chicken Flavored", "Food", 1.50, 70),
("Cup O Noodles Chicken Picante", "Food", 1.65, 52),
("Ming Vase", "Decor", 10000.00, 1),
("GI Boots Black Mens size 10", "Shoes", 85.00, 20),
("The White Album by The Beatles CD","Media", 40.00, 9);   

select * from products; 
