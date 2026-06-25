import express from "express";
import { createPayment, getPaymentByOrder } from "../controllers/paymentController.js";
import { protect } from "../middleWare/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createPayment);
router.get("/:order_id", getPaymentByOrder);

export default router;
