# 💸 Expense Tracker App

A powerful and intuitive **Expense Tracker** web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). This app helps users track their income and expenses, view financial summaries, and manage budgets—all from an easy-to-use dashboard.

---

## 🚀 Features

✅ User Authentication (Register/Login)  
✅ Add, Edit, Delete Income & Expenses  
✅ Track Income vs Expenses in Real Time  
✅ Filter Transactions by Date or Category  
✅ Responsive UI with React Bootstrap  
✅ RESTful API with Express and MongoDB  
✅ Protected Routes for Logged-in Users  
✅ Custom Alerts & Feedback Messages

---

## 🖥️ Tech Stack

| Frontend | Backend  | Database | Others           |
|----------|----------|----------|------------------|
| React.js | Node.js  | MongoDB  | Express.js, JWT  |
| Axios    |          |          | bcrypt, dotenv   |
| React Bootstrap |    |          | CORS, Mongoose   |

---


## 🧩 Folder Structure
📦expense-tracker
├── client
│ ├── public
│ └── src
│ ├── components
│ ├── pages
│ ├── services
│ ├── App.js
│ └── index.js
├── server
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── config
│ └── server.js

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Adityapandeygit/Expense-Tracker.git
cd Expense-Tracker
2. Setup Backend
bash
Copy
Edit
cd server
npm install
npm run dev
Create a .env file in /server with:

ini
Copy
Edit
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm start
The app will run at http://localhost:3000
API is hosted at http://localhost:5000/api

🛡️ Authentication
Uses JWT (JSON Web Token) for secure login

Passwords hashed using bcrypt

API protected with middleware

📈 Future Enhancements
🔔 Notification for spending limits

📊 Charts & Visual Analytics

📁 Export data to CSV/PDF

💬 Add categories and tags

📱 Progressive Web App (PWA) support

🙋‍♂️ Author
Aditya Pandey
GitHub • LinkedIn

📄 License
This project is licensed under the MIT License.

🎯 “Track your money, improve your habits.”
