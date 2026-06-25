import db from "../config/mysql.js";

// @desc    Place a new order (cart items sent directly from frontend)
// @route   POST /api/orders
// @access  Private
export const placeOrder = (req, res) => {
  const userId = req.user.id;
  const { address_id, cart_items, total_price, first_name, last_name } = req.body;

  if (!address_id) {
    return res.status(400).json({ success: false, message: "Please select a delivery address" });
  }

  if (!cart_items || cart_items.length === 0) {
    return res.status(400).json({ success: false, message: "Cart is empty" });
  }

  if (cart_items.some((item) => !item.name)) {
    return res.status(400).json({ success: false, message: "Each cart item must include a product name" });
  }

  if (!total_price) {
    return res.status(400).json({ success: false, message: "Total price is required" });
  }

  // Insert into orders table
  db.query(
    "INSERT INTO orders (user_id, first_name, last_name, address_id, total_price) VALUES (?, ?, ?, ?, ?)",
    [userId, first_name || null, last_name || null, address_id, parseFloat(total_price).toFixed(2)],
    (err, orderResult) => {
      if (err) return res.status(500).json({ success: false, message: err.message });

      const orderId = orderResult.insertId;

      // Insert all items into order_items table
      const orderItemsData = cart_items.map((item) => [
        orderId,
        item.name,
        item.quantity,
        parseFloat(item.price).toFixed(2),
      ]);

      db.query(
        "INSERT INTO order_items (order_id, product_name, quantity, price) VALUES ?",
        [orderItemsData],
        (err) => {
          if (err) return res.status(500).json({ success: false, message: err.message });

          res.status(201).json({
            success: true,
            message: "Order placed successfully",
            orderId,
            totalPrice: total_price
          });
        }
      );
    }
  );
};

// @desc    Get logged-in user's order history
// @route   GET /api/orders
// @access  Private
export const getUserOrders = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT o.id as order_id, o.first_name, o.last_name, o.total_price, o.status, o.created_at
    FROM orders o
    WHERE o.user_id = ?
    ORDER BY o.created_at DESC
  `;

  db.query(query, [userId], (err, orders) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    
    if (orders.length === 0) {
      return res.status(200).json({ success: true, orders: [] });
    }

    const orderIds = orders.map((o) => o.order_id);
    
    const itemsQuery = `
      SELECT order_id, product_name as name, quantity, price 
      FROM order_items 
      WHERE order_id IN (?)
    `;

    db.query(itemsQuery, [orderIds], (err, items) => {
      if (err) return res.status(500).json({ success: false, message: err.message });

      const ordersWithItems = orders.map((order) => {
        return {
          ...order,
          cart: items.filter((item) => item.order_id === order.order_id),
        };
      });

      res.status(200).json({ success: true, orders: ordersWithItems });
    });
  });
};

// @desc    Get single order by ID
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  const query = `
    SELECT o.id as order_id, o.first_name, o.last_name, o.total_price, o.status, o.created_at,
           a.address_line, a.city, a.state, a.zip_code
    FROM orders o
    JOIN addresses a ON o.address_id = a.id
    WHERE o.id = ? AND o.user_id = ?
  `;

  db.query(query, [id, userId], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.status(200).json({ success: true, order: result[0] });
  });
};
