# ShopVerse - Product Landing Page (MERN Assignment)

This project is a product landing page similar to an e-commerce homepage
(Amazon / Flipkart style) with a working backend search feature.

Built as part of the **MERN Stack Developer Intern Assignment**.

---

## ✨ Features

### Frontend (React)
- Header with search bar
- Live autosuggest dropdown (max 5 suggestions)
- Hero section with promotional banner
- Responsive product grid (10+ products)
  - Product image
  - Name
  - Price
  - Rating
  - Hover effects (scale + shadow)
- Filters section
  - Category / price based filtering
- Fully responsive (Desktop, Tablet, Mobile)

### Backend (Node.js + Express + MongoDB)
- `GET /products`
  - Returns all products from MongoDB
- `GET /search?q=term`
  - Case-insensitive partial search by product name
  - Maximum 5 results
- Clean separation:
  - Models
  - Routes
  - Config (DB connection)

---

## 🛠 Tech Stack

- **Frontend:** React, Vite (or CRA), CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Other:** Mongoose, CORS, dotenv

---

## 📁 Folder Structure

```bash
.
├── frontend/          # React app (UI)
└── backend/           # Node + Express + MongoDB API
