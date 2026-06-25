import db from "../config/mysql.js";

// @desc    Create a payment record for an order
// @route   POST /api/payments
// @access  Private
export const createPayment = (req, res) => {
  const { order_id, payment_method, transaction_id } = req.body;

  if (!order_id || !payment_method) {
    return res.status(400).json({ success: false, message: "Order ID and payment method are required" });
  }

  // Verify the order exists before creating a payment
  db.query("SELECT id FROM orders WHERE id = ?", [order_id], (err, orderResult) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (orderResult.length === 0) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    const query = "INSERT INTO payments (order_id, payment_method, payment_status, transaction_id) VALUES (?, ?, ?, ?)";
    const values = [order_id, payment_method, "Completed", transaction_id || null];

    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });

      // Update order status to Processing after payment
      db.query("UPDATE orders SET status = 'Processing' WHERE id = ?", [order_id], (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });

        res.status(201).json({
          success: true,
          message: "Payment recorded successfully",
          paymentId: result.insertId
        });
      });
    });
  });
};

// @desc    Get payment details for an order
// @route   GET /api/payments/:order_id
// @access  Private
export const getPaymentByOrder = (req, res) => {
  const { order_id } = req.params;

  db.query("SELECT * FROM payments WHERE order_id = ?", [order_id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "No payment found for this order" });
    }
    res.status(200).json({ success: true, payment: result[0] });
  });
};
