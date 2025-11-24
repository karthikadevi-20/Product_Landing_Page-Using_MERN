// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productsRoute from "./routes/productsRoute.js";
import searchRoute from "./routes/searchRoute.js";

dotenv.config();

// connect to DB
connectDB();

const app = express();

// middlewares
app.use(cors());          // allow all origins, simple for dev
app.use(express.json());  // parse JSON

// routes
app.use("/products", productsRoute);
app.use("/search", searchRoute);

app.get("/", (req, res) => {
  res.send("ShopVerse API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
