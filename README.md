# 😂 Joke API with Swagger UI

This is a full-stack RESTful Joke API built using **Node.js**, **Express**, and **SQLite**, documented with **Swagger UI**.

It allows you to store, categorize, retrieve, and vote on jokes — with a beautiful Swagger interface to test it all live in your browser.

---

## 🛠 Tech Stack

- **Backend:** Node.js + Express
- **Database:** SQLite
- **Documentation:** Swagger (OpenAPI Spec)
- **Dev Tools:** Postman, curl, Swagger UI

---

## 📦 Features

- `GET /jokes/random` → Get a random joke
- `POST /jokes` → Add a new joke
- `GET /categories` → Get all joke categories
- `GET /jokes/category/:category` → Get jokes from a specific category
- `GET /jokes/:id` → Get a joke by ID
- `POST /categories` → Add a new category
- `POST /jokes/:id/categories` → Assign a joke to a category
- `POST /jokes/:id/vote` → Like or dislike a joke

---

## 🚀 How to Run

1. **Clone this repo**
   ```bash
   git clone https://github.com/yourusername/joke_swagger.git
   cd joke_swagger
   ```
   npm install
   ```
   node app.js

   ```