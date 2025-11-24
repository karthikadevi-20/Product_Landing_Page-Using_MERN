
# 🛍️ ShopVerse – Product Landing Page (MERN Stack Assignment)

ShopVerse is a modern product landing page inspired by Amazon/Flipkart, featuring autosuggest search, product browsing, filtering, and backend-driven product data from MongoDB.

This project was built as part of the **MERN Stack Developer Intern Assignment**.

---

## 📌 Features

### 🖥️ Frontend (React)
- Modern and professional UI
- Header search bar with live autosuggestions
- Suggestion dropdown auto-appears while typing
- Clicking a suggestion auto-fills the search bar
- Hero banner section with marketing highlight
- Product grid with:
  - Product images
  - Name
  - Price
  - Rating
- Smooth hover transitions
- Category filter
- Fully responsive (Desktop / Tablet / Mobile)

---

### 🛢️ Backend (Node.js + Express + MongoDB)
- `GET /products` → returns product list from MongoDB
- `GET /search?q=term` → backend-powered search
- Case-insensitive partial search matching
- Max 5 suggestions returned
- Products stored in MongoDB
- Includes seeding script to populate DB
- Mongoose schema & model
- Clean project structure

---

## 🏗️ Project Architecture

```

Product_Landingpage/
│
├── frontend/      # React application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/       # Node + Express server
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── README.md

````

---

# 🛠️ Backend Setup

### 1️⃣ Navigate to backend

```bash
cd backend
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```

### 4️⃣ Whitelist your IP in MongoDB Atlas

```
MongoDB Atlas → Network Access → Add IP Address
```

✔ Add Current IP
or
✔ Allow Anywhere (`0.0.0.0/0`) — for development

---

### 5️⃣ Seed the database

```bash
npm run seed
```

Expected output:

```
Connected to MongoDB
✅ Seeded products successfully
```

---

### 6️⃣ Start backend server

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### 7️⃣ Test APIs

#### Get all products

```
http://localhost:5000/products
```

#### Search products

```
http://localhost:5000/search?q=phone
```

---

# 🖥️ Frontend Setup

### 1️⃣ Navigate to frontend

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## 🔗 API Example Responses

### ✔ Response for `/products`

```json
[
  {
    "id": "672e96a2a...",
    "name": "Smartphone Max 20",
    "category": "Mobiles",
    "price": 49999,
    "rating": 4.5,
    "imageUrl": "/smartphonemax20.jpg"
  }
]
```

---

### ✔ Response for `/search?q=phone`

```json
[
  {
    "id": "672e96a2a...",
    "name": "Smartphone Max 20"
  }
]
```

---

# 🎥 Demo Video Guidelines

Your demo video should show:

✔ Landing page UI
✔ Typing in search bar
✔ Autosuggest dropdown
✔ Clicking suggestion updates product grid
✔ Responsive layout
✔ Backend server running
✔ Testing API in browser
✔ MongoDB seeded and connected

---

# 👨‍💻 Tech Stack

| Area      | Technology        |
| --------- | ----------------- |
| Frontend  | React             |
| Backend   | Node.js + Express |
| Database  | MongoDB Atlas     |
| ORM       | Mongoose          |
| Styling   | CSS               |
| API Style | REST              |

---

# ✔ Assignment Requirement Checklist

* [x] Product Landing Page UI
* [x] Responsive Design
* [x] Search bar with autosuggest
* [x] Suggestions limit 5
* [x] Backend MongoDB connection
* [x] GET /products implemented
* [x] GET /search implemented
* [x] Case-insensitive partial search
* [x] Sample product seeding
* [x] GitHub repo with `/frontend` + `/backend`
* [x] README included
* [x] Video demo ready

---

# 🙌 Author

**Karthika Devi M**
Aspiring Full Stack Developer
Coimbatore, Tamil Nadu, India

---

# 🏁 Final Notes

This project demonstrates the ability to build a full MERN-stack application with a professional UI, responsive layout, real database connectivity, and backend search functionality — delivering a real-world e-commerce experience.

---


