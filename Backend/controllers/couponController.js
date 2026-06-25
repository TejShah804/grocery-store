import db from "../config/mysql.js";

// @desc    Get all active coupons
// @route   GET /api/coupons
// @access  Public
export const getCoupons = (req, res) => {
  db.query("SELECT * FROM coupons WHERE is_active = TRUE", (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.status(200).json({ success: true, coupons: result });
  });
};

// @desc    Verify a coupon code
// @route   POST /api/coupons/verify
// @access  Public
export const verifyCoupon = (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, message: "Please provide a coupon code" });
  }

  db.query("SELECT * FROM coupons WHERE code = ?", [code], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ success: false, message: "Invalid coupon code" });
    }

    const coupon = result[0];

    // Check if active
    if (!coupon.is_active) {
      return res.status(400).json({ success: false, message: "This coupon is no longer active" });
    }

    // Check expiry
    if (coupon.expiry_date && new Date(coupon.expiry_date) < new Date()) {
      return res.status(400).json({ success: false, message: "This coupon has expired" });
    }

    res.status(200).json({ 
      success: true, 
      message: "Coupon applied successfully",
      coupon 
    });
  });
};

// @desc    Create a new coupon (Usually protected for Admins only)
// @route   POST /api/coupons
// @access  Public (for development purposes)
export const createCoupon = (req, res) => {
  const { code, discount_percentage, max_discount, expiry_date } = req.body;

  if (!code || !discount_percentage) {
    return res.status(400).json({ success: false, message: "Code and discount percentage are required" });
  }

  const query = "INSERT INTO coupons (code, discount_percentage, max_discount, expiry_date) VALUES (?, ?, ?, ?)";
  const values = [code, discount_percentage, max_discount || null, expiry_date || null];

  db.query(query, values, (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ success: false, message: "Coupon code already exists" });
      }
      return res.status(500).json({ success: false, message: err.message });
    }
    res.status(201).json({ success: true, message: "Coupon created successfully", couponId: result.insertId });
  });
};
