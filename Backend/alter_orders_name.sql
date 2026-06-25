-- Run this in MySQL Workbench
-- Add first_name and last_name columns to orders table
ALTER TABLE orders ADD COLUMN first_name VARCHAR(255) NULL AFTER user_id;
ALTER TABLE orders ADD COLUMN last_name VARCHAR(255) NULL AFTER first_name;
