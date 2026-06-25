-- View Order Items Data
SELECT 
    order_id, 
    product_name, 
    quantity, 
    price AS total_price_for_item
FROM order_items
ORDER BY order_id DESC;
