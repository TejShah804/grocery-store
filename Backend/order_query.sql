SELECT * FROM grocery_store.orders;

SELECT 
    o.id AS order_id,
    o.first_name,
    o.last_name,
    u.email,
    u.phone,
    a.address_line,
    a.state,
    a.zip_code,
    o.total_price,
    o.status,
    o.created_at AS order_date
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN addresses a ON o.address_id = a.id
ORDER BY o.created_at DESC;