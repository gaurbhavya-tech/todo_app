# Todo App

A full-stack Todo application that allows users to manage tasks efficiently with file upload support.

---

## Features

-  Add new tasks  
-  Upload files with tasks  
-  Delete tasks  
-  Fast and responsive UI  

---

##  Tech Stack

- **Frontend:** React (Vite)  
- **Backend:** Node.js, Express  
- **File Upload:** Multer  
- **HTTP Client:** Axios  

---

##  Project Structure

smart-todo-app/
│
├── backend/
│ ├── server.js
│ └── uploads/
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ └── main.jsx
│
└── README.md


---

## ⚙️ Installation & Setup

### 🔹 Clone the repository

```bash
git clone https://github.com/Krishna-Gupta989/Krishna-Gupta989-smart-todo-app.git
```

##🔹 Backend Setup
```
cd backend
npm install
node server.js
```

Server will run on: http://localhost:5000

## 🔹 Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend will run on: http://localhost:5173

🌐 API Endpoints
POST /add → Add a new task
GET /tasks → Fetch all tasks
DELETE /delete/:id → Delete a task
