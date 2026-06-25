import express from "express";
import { getCoupons, verifyCoupon, createCoupon } from "../controllers/couponController.js";

const router = express.Router();

router.get("/", getCoupons);
router.post("/verify", verifyCoupon);
router.post("/", createCoupon);

export default router;
