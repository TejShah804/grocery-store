-- Run this in MySQL Workbench to fix order_items table
-- Remove the FK constraint so we can insert without a real product_id
ALTER TABLE order_items DROP FOREIGN KEY order_items_ibfk_2;
ALTER TABLE order_items MODIFY COLUMN product_id INT NULL;
