import express from "express";
import { placeOrder, getUserOrders, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleWare/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getUserOrders);
router.get("/:id", getOrderById);
router.post("/", placeOrder);

export default router;
