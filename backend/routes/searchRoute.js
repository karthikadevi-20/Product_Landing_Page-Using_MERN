// routes/searchRoute.js
import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// GET /search?q=term
router.get("/", async (req, res) => {
  const term = req.query.q || "";

  if (!term.trim()) {
    return res.json([]);
  }

  try {
    const regex = new RegExp(term, "i"); // case-insensitive partial match
    const results = await Product.find({ name: regex })
      .limit(5) // max 5 items
      .select("name category price rating imageUrl");

    res.json(results);
  } catch (err) {
    console.error("Search error:", err.message);
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;
