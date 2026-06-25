-- Run this in MySQL Workbench to add product_name column
ALTER TABLE order_items ADD COLUMN product_name VARCHAR(255) NULL AFTER product_id;
