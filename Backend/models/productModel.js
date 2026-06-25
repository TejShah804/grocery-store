import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: null },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    rating: { type: Number, default: 0 },
    category: { type: String },
    sale: { type: String }, // e.g. "Sale 50%", "out of stock"
    description: { type: String }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
