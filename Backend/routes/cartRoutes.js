import express from "express";
import { getCart, addToCart, updateCartItemQuantity, removeFromCart, clearCart } from "../controllers/cartController.js";
import { protect } from "../middleWare/authMiddleware.js";

const router = express.Router();

// All cart routes require the user to be logged in
router.use(protect);

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:cart_item_id", updateCartItemQuantity);
router.delete("/:cart_item_id", removeFromCart);
router.delete("/", clearCart);

export default router;
