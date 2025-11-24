// routes/productsRoute.js
import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// GET /products  → return all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

export default router;
