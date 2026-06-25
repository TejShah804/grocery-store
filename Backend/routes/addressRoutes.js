import express from "express";
import { getAddresses, addAddress, deleteAddress } from "../controllers/addressController.js";
import { protect } from "../middleWare/authMiddleware.js";

const router = express.Router();

// All address routes require the user to be logged in
router.use(protect);

router.get("/", getAddresses);
router.post("/", addAddress);
router.delete("/:id", deleteAddress);

export default router;
