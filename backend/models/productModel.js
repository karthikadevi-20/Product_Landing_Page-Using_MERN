// models/productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
