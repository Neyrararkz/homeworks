-- CREATE TABLE users(
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT NOT NULL
-- );

-- CREATE TABLE categories(
-- 	id SERIAL PRIMARY KEY,
-- 	title TEXT NOT NULL
-- );
-- CREATE TABLE orders(
-- 	id SERIAL PRIMARY KEY,
-- 	user_id INT NOT NULL REFERENCES users(id),
-- 	created_at DATE NOT NULL DEFAULT CURRENT_DATE
-- );
-- CREATE TABLE products(
-- 	id SERIAL PRIMARY KEY,
-- 	title TEXT NOT NULL,
-- 	price INT NOT NULL,
-- 	category_id INT NOT NULL REFERENCES categories(id)
-- );
-- CREATE TABLE order_items(
-- 	id SERIAL PRIMARY KEY,
-- 	order_id INT NOT NULL REFERENCES orders(id),
-- 	product_id INT NOT NULL REFERENCES products(id),
-- 	qty INT NOT NULL CHECK (qty > 0)
-- )

-- INSERT INTO users (name)
-- VALUES
-- ('Platon'),
-- ('Elmira'),
-- ('Sayat');
-- INSERT INTO categories (title) 
-- VALUES
-- ('Electronics'),
-- ('Food'),
-- ('Books');
-- INSERT INTO products (title,price,category_id)
-- VALUES 
-- ('Headphones', 15000, 1),
-- ('Keyboard', 22000, 1),
-- ('Chocolate', 1000, 2),
-- ('Base SQL', 7000, 3);
-- INSERT INTO orders (user_id, created_at)
-- VALUES
-- (1, '2026-01-10'),
-- (1, '2026-01-12'),
-- (2, '2026-01-11');
-- INSERT INTO order_items(order_id, product_id, qty)
-- VALUES
-- (1,1,1),
-- (1,3,3),
-- (2,4,1),
-- (3,2,1);

-- Вывести все товары и их категории
-- SELECT p.title AS product, c.title AS category
-- FROM categories c 
-- JOIN products p ON p.category_id = c.id

-- Вывести все заказы и имя пользователя
-- SELECT o.id AS order_id, u.name, o.created_at AS date
-- FROM orders o
-- JOIN users u ON o.user_id = u.id

-- Вывести состав заказа (order_id, product, qty).
-- SELECT o.id AS order_id, p.title AS product, p.price, oi.qty
-- FROM orders o
-- JOIN order_items oi ON oi.order_id = o.id
-- JOIN products p ON oi.product_id = p.id

-- Посчитать сумму каждого заказа
-- SELECT o.id AS order_id, (p.price*oi.qty) AS sum
-- FROM orders o
-- JOIN order_items oi ON oi.order_id = o.id
-- JOIN products p ON oi.product_id = p.id

-- Найти топ-1 пользователя по тратам
-- SELECT u.name, SUM(p.price*oi.qty) AS total
-- FROM users u
-- JOIN orders o ON o.user_id = u.id
-- JOIN order_items oi ON oi.order_id = o.id
-- JOIN products p ON oi.product_id = p.id
-- GROUP BY u.name 
-- ORDER BY total DESC
-- LIMIT 1


-- Задача 1
-- SELECT p.title, p.price, c.title AS category
-- FROM products p 
-- JOIN categories c ON p.category_id = c.id

-- Задача 2
-- SELECT o.id AS order_id, u.name, o.created_at AS date
-- FROM orders o
-- JOIN users u ON o.user_id = u.id

-- Задача 3
-- SELECT u.name, o.id AS order_id
-- FROM users u
-- LEFT JOIN orders o ON o.user_id = u.id

-- Задача 4
-- SELECT o.id AS order_id, u.name, o.created_at AS date
-- FROM orders o
-- JOIN users u ON o.user_id = u.id
-- WHERE u.name = 'Elmira'

-- Задача 5
-- SELECT p.title, p.price
-- FROM categories c
-- JOIN products p ON p.category_id = c.id
-- WHERE c.title = 'Electronics'

-- Задача 6
-- INSERT INTO products (title,price,category_id)
-- VALUES 
-- ('IT Book', 8000, 3);
-- SELECT p.title, oi.id AS orders
-- FROM products p
-- LEFT JOIN order_items oi ON oi.product_id = p.id
-- WHERE oi.id IS NULL

-- Задача 7
-- SELECT o.id, u.name, p.title AS product, oi.qty
-- FROM orders o
-- JOIN users u ON o.user_id = u.id
-- JOIN order_items oi ON oi.order_id = o.id
-- JOIN products p ON oi.product_id = p.id

-- Задача 8
-- SELECT o.id, SUM(oi.qty) AS total_qty
-- FROM orders o
-- JOIN order_items oi ON oi.order_id = o.id
-- GROUP BY o.id

-- Задача 9
-- SELECT u.name, SUM(p.price*oi.qty) AS total_sum
-- FROM users u
-- JOIN orders o ON o.user_id = u.id
-- JOIN order_items oi ON oi.order_id = o.id
-- JOIN products p ON oi.product_id = p.id
-- GROUP BY u.name

-- Задача 10
-- SELECT c.title AS category, SUM(p.price*oi.qty) AS total_sum
-- FROM categories c
-- JOIN products p ON p.category_id = c.id
-- JOIN order_items oi ON oi.product_id = p.id
-- GROUP BY c.title
-- ORDER BY total_sum DESC
-- LIMIT 1
