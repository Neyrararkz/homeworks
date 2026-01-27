-- CREATE TABLE categories(
-- 	id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL UNIQUE
-- );
-- CREATE TABLE products(
-- 	id SERIAL PRIMARY KEY,
-- 	title VARCHAR(80) NOT NULL,
-- 	price INT NOT NULL CHECK(price>0),
-- 	category_id INT REFERENCES categories(id)
-- );
-- CREATE TABLE orders(
-- 	id SERIAL PRIMARY KEY,
-- 	customer VARCHAR(60) NOT NULL,
-- 	total INT NOT NULL CHECK(total>=0),
-- 	created_at TIMESTAMP DEFAULT NOW()
-- )

-- INSERT INTO categories (title)
-- VALUES 
-- ('Electronics'),
-- ('Accessories'),
-- ('Office'),
-- ('Gaming');

-- INSERT INTO products (title, price, category_id)
-- VALUES
-- ('Keyboard', 12000, 1),
-- ('Mouse', 7000, 1),
-- ('Headphones', 35000, 1),
-- ('USB Cable', 3000, 2),
-- ('Mouse Pad', 3000, 2),
-- ('NoteBook', 1000, 3),
-- ('Pen', 600, 3),
-- ('Gaming chair', 100000, 4),
-- ('Gamepad', 18000, 4),
-- ('Monitor', 100000, 4);

-- INSERT INTO orders (customer, total)
-- VALUES
-- ('Alex', 19000),
-- ('Dana', 35000),
-- ('Diana', 90000),
-- ('Ira', 2500),
-- ('John', 68000),
-- ('Anna', 1500);

-- UPDATE products
-- SET price  = price + 500
-- WHERE id = 12;

-- UPDATE products
-- SET price  = price - price*0.15
-- WHERE id = 18;

-- UPDATE products
-- SET title = 'Logitech G915 Keyboard'
-- WHERE id = 11;

-- DELETE FROM products 
-- WHERE id = 14;

-- SELECT * FROM products

-- SELECT * FROM products
-- WHERE price > 15000

-- SELECT * FROM orders
-- ORDER BY created_at DESC

-- SELECT * FROM products
-- WHERE title ILIKE '%G%'




--Часть 1
--1)
-- INSERT INTO categories (title)
-- VALUES 
-- ('Smart Home'),
-- ('Streaming')

--2)
-- INSERT INTO products (title, price, category_id)
-- VALUES 
-- ('Alice', 80000, 5),
-- ('Yeelight', 700000, 5),
-- ('CCTV cameras', 30000, 5),
-- ('Microphone', 10000, 6),
-- ('Capture Card', 100000, 6),
-- ('Water dispenser', 25000, 3),
-- ('Office lamp', 6000, 3),
-- ('Curtains', 40000, 3)

--3)
-- INSERT INTO orders (customer, total)
-- VALUES 
-- ('Alex', 26000),
-- ('Alex', 82000),
-- ('Dana', 65000),
-- ('Dana', 1000),
-- ('Diana', 2800),
-- ('Ira', 120000),
-- ('John', 500000),
-- ('Anna', 12345),
-- ('John', 11111),
-- ('John', 659);

--Часть 2
--A)
-- SELECT category_id, COUNT(*) AS total_products
-- FROM products
-- GROUP BY category_id
-- ORDER BY total_products DESC

--B)
-- SELECT category_id, COUNT(*) AS total_products
-- FROM products
-- GROUP BY category_id
-- HAVING COUNT(*) >= 3

--C)
-- SELECT category_id,
-- 	MIN(price) AS min_price,
-- 	MAX(price) AS max_price,
-- 	ROUND(AVG(price), 2) AS avg_price,
-- 	SUM(price) AS sum_price
-- FROM products
-- GROUP BY category_id

--D)
-- SELECT category_id,
-- ROUND(AVG(price), 2) AS avg_price
-- FROM products
-- GROUP BY category_id
-- HAVING AVG(price) >= 20000

-- E)
-- SELECT category_id, COUNT(*) AS total_products
-- FROM products
-- WHERE price >= 10000
-- GROUP BY category_id
-- HAVING COUNT(*) >= 2

--F)
-- SELECT customer, COUNT(*) AS orders_count
-- FROM orders
-- GROUP BY customer
-- ORDER BY orders_count DESC

--G)
-- SELECT customer, COUNT(*) AS orders_count
-- FROM orders
-- GROUP BY customer
-- HAVING COUNT(*) >= 3

--H)
-- SELECT customer, 
-- 	SUM(total) AS spent_total,
-- 	ROUND(AVG(total), 2) AS avg_check,
-- 	MIN(total) AS min_order,
-- 	MAX(total) AS max_order
-- FROM orders
-- GROUP BY customer
-- ORDER BY spent_total DESC

--I)
-- SELECT customer, SUM(total) AS spent_total
-- FROM orders
-- GROUP BY customer
-- ORDER BY spent_total DESC
-- LIMIT 3

--J)
-- SELECT customer, ROUND(AVG(total), 2) AS avg_check
-- FROM orders
-- GROUP BY customer
-- HAVING AVG(total) > 40000

--Часть 3
-- SELECT customer, 
-- 	COUNT(*) AS big_orders,
-- 	SUM(total) AS big_spent
-- FROM orders
-- WHERE total > 10000
-- GROUP BY customer
-- HAVING COUNT(*) > 2

