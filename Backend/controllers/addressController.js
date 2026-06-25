import db from "../config/mysql.js";

// @desc    Get user's addresses
// @route   GET /api/addresses
// @access  Private
export const getAddresses = (req, res) => {
  const userId = req.user.id;

  db.query("SELECT * FROM addresses WHERE user_id = ?", [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.status(200).json({ success: true, addresses: result });
  });
};

// @desc    Add new address
// @route   POST /api/addresses
// @access  Private
export const addAddress = (req, res) => {
  const userId = req.user.id;
  const { address_line, city, state, zip_code, country } = req.body;

  if (!address_line || !city || !state || !zip_code) {
    return res.status(400).json({ success: false, message: "Please provide all required fields" });
  }

  const query = "INSERT INTO addresses (user_id, address_line, city, state, zip_code, country) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [userId, address_line, city, state, zip_code, country || 'India'];

  db.query(query, values, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.status(201).json({ success: true, message: "Address added successfully", addressId: result.insertId });
  });
};

// @desc    Delete an address
// @route   DELETE /api/addresses/:id
// @access  Private
export const deleteAddress = (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;

  db.query("DELETE FROM addresses WHERE id = ? AND user_id = ?", [id, userId], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: "Address not found or not authorized" });
    }
    res.status(200).json({ success: true, message: "Address deleted successfully" });
  });
};
