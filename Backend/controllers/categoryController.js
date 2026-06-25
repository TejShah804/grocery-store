import Category from "../models/categoryModel.js";

// @desc    Get all categories
// @route   GET /api/categories
export const getCategories = (req, res) => {
  Category.find()
    .sort({ createdAt: -1 })
    .then((categories) => {
      res.status(200).json({ success: true, categories });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: err.message });
    });
};

// @desc    Create a new category
// @route   POST /api/categories
export const createCategory = (req, res) => {
  const { name, image } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: "Category name is required" });
  }

  Category.create({ name: name.trim(), image: image || null })
    .then((category) => {
      res.status(201).json({
        success: true,
        message: "Category created successfully",
        categoryId: category._id,
      });
    })
    .catch((err) => {
      if (err?.code === 11000) {
        return res.status(400).json({ success: false, message: "Category already exists" });
      }
      return res.status(500).json({ success: false, message: err.message });
    });
};
