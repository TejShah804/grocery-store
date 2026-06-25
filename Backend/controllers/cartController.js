import db from "../config/mysql.js";

// @desc    Get user's cart
// @route   GET /api/cart
// @access  Private
export const getCart = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      c.id AS cart_id,
      ci.id AS cart_item_id,
      ci.product_id,
      ci.product_name AS name,
      ci.price,
      ci.image,
      ci.quantity
    FROM cart c
    JOIN cart_items ci ON c.id = ci.cart_id
    WHERE c.user_id = ?
  `;

  db.query(query, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    
    // Calculate total
    let total = 0;
    result.forEach(item => {
      total += (item.price * item.quantity);
    });

    res.status(200).json({ 
      success: true, 
      cartItems: result,
      totalPrice: total
    });
  });
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = (req, res) => {
  const userId = req.user.id;
  const { product_id, name, price, image, quantity } = req.body;

  if (!name || price === undefined || price === null) {
    return res.status(400).json({ success: false, message: "Product name and price are required" });
  }

  const addQty = quantity || 1;

  // 1. Check if user already has a cart
  db.query("SELECT id FROM cart WHERE user_id = ?", [userId], (err, cartResult) => {
    if (err) return res.status(500).json({ success: false, message: err.message });

    if (cartResult.length > 0) {
      // Cart exists
      const cartId = cartResult[0].id;
      checkAndAddCartItem(cartId, { product_id, name, price, image }, addQty, res);
    } else {
      // Create new cart
      db.query("INSERT INTO cart (user_id) VALUES (?)", [userId], (err, insertCartResult) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        
        const newCartId = insertCartResult.insertId;
        checkAndAddCartItem(newCartId, { product_id, name, price, image }, addQty, res);
      });
    }
  });
};

// Helper function to insert/update cart_items
const checkAndAddCartItem = (cartId, product, quantity, res) => {
  const { product_id = null, name, price, image = null } = product;
  db.query("SELECT * FROM cart_items WHERE cart_id = ? AND product_name = ?", [cartId, name], (err, itemResult) => {
    if (err) return res.status(500).json({ success: false, message: err.message });

    if (itemResult.length > 0) {
      // Item already in cart -> update quantity
      const newQty = itemResult[0].quantity + quantity;
      db.query("UPDATE cart_items SET quantity = ? WHERE id = ?", [newQty, itemResult[0].id], (err, updateResult) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        return res.status(200).json({ success: true, message: "Cart quantity updated" });
      });
    } else {
      // Add new item to cart
      db.query(
        "INSERT INTO cart_items (cart_id, product_id, product_name, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)",
        [cartId, product_id, name, parseFloat(price).toFixed(2), image, quantity],
        (err, insertResult) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        return res.status(201).json({ success: true, message: "Product added to cart" });
        }
      );
    }
  });
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:cart_item_id
// @access  Private
export const updateCartItemQuantity = (req, res) => {
  const { cart_item_id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ success: false, message: "Quantity must be at least 1" });
  }

  db.query("UPDATE cart_items SET quantity = ? WHERE id = ?", [quantity, cart_item_id], (err) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    return res.status(200).json({ success: true, message: "Cart quantity updated" });
  });
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:cart_item_id
// @access  Private
export const removeFromCart = (req, res) => {
  const { cart_item_id } = req.params;

  db.query("DELETE FROM cart_items WHERE id = ?", [cart_item_id], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
    res.status(200).json({ success: true, message: "Item removed from cart" });
  });
};

// @desc    Clear logged-in user's cart
// @route   DELETE /api/cart
// @access  Private
export const clearCart = (req, res) => {
  const userId = req.user.id;

  db.query("SELECT id FROM cart WHERE user_id = ?", [userId], (err, cartResult) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (cartResult.length === 0) {
      return res.status(200).json({ success: true, message: "Cart already empty" });
    }

    const cartId = cartResult[0].id;
    db.query("DELETE FROM cart_items WHERE cart_id = ?", [cartId], (deleteErr) => {
      if (deleteErr) return res.status(500).json({ success: false, message: deleteErr.message });
      return res.status(200).json({ success: true, message: "Cart cleared" });
    });
  });
};
