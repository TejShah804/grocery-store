import Product from "../models/productModel.js";

// @desc    Get all products (with optional category filter)
// @route   GET /api/products
// @route   GET /api/products?category=1
export const getProducts = (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};

  Product.find(filter)
    .sort({ createdAt: -1 })
    .then((products) => {
      res.status(200).json({ success: true, products });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err.message });
    });
};

// @desc    Get single product
// @route   GET /api/products/:id
export const getProductById = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
      return res.status(200).json({ success: true, product });
    })
    .catch((err) => {
      if (err?.name === "CastError") {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
      return res.status(500).json({ success: false, message: err.message });
    });
};

// @desc    Create a new product
// @route   POST /api/products
export const createProduct = (req, res) => {
  const { name, description, price, image, category, oldPrice, rating, sale } = req.body;

  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Name and price are required" });
  }

  Product.create({
    name,
    image,
    price,
    oldPrice: oldPrice ?? undefined,
    rating: rating ?? undefined,
    category: category || undefined,
    sale: sale || undefined,
    description: description || undefined,
  })
    .then((product) => {
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        productId: product._id,
      });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err.message });
    });
};
