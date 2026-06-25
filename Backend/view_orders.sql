-- View Orders with First Name, Last Name and Address Details
SELECT 
    o.id AS order_id,
    o.first_name,
    o.last_name,
    u.email AS customer_email,
    u.phone AS customer_phone,
    a.address_line,
    a.city,
    a.state,
    a.zip_code,
    a.country,
    o.total_price,
    o.status,
    o.created_at AS order_date
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN addresses a ON o.address_id = a.id
ORDER BY o.created_at DESC;
