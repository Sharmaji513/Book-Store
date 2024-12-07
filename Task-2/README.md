### **DEMO Video**


https://github.com/user-attachments/assets/f38a301c-a8fe-4d6b-80e4-222ce06209c0


# Bookstore App
This is a simple Bookstore application built with **React** for the frontend and a **Node.js** (Express) backend. The app allows users to browse books, view detailed information, and manage their authentication (login/logout). The project also supports basic routing with React Router and features a dynamic layout to display books.

### **Features**
- User authentication (login and logout)
- Browse and view details of books
- CRUD operations
- Bookstore grid layout
- Dynamic routing for book details

## Folder Structure
  ```bash
    bookstore-app/
    ├── backend/
        ├── config/
    │   ├── middlewares/
    │   ├── models/
    │   ├── routes/
    │   ├── .env
    │   └── app.js
    └── frontend/
        ├── src/
        │   ├── components/
        │   ├── utils/
        │   ├── App.jsx
        │   ├── index.js
        │   ├── tailwind.config.js
        │   └── package.json
        
  ```
### **Screenshots**

## Homepage
![2024-12-07-16-53-50](https://github.com/user-attachments/assets/16aac554-7524-4f87-8ad6-13f76e1fda03)


## Login
[2024-12-07-16-54-11]![2024-12-07-16-54-01](https://github.com/user-attachments/assets/6a3de71a-6338-4bde-ad4d-8992007d2d19)


## ADD Book
![2024-12-07-16-54-23](https://github.com/user-attachments/assets/e51f2998-cd56-4df1-8ed2-17d09c8e6bc5)


## Update Book
![2024-12-07-16-54-37](https://github.com/user-attachments/assets/b5ab24e5-0016-4e5a-85d5-0a387a6ab2e9)




---

### **Technologies Used**
- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Authentication**: JWT Tokens for login
- **Database**: (Optional) MongoDB, PostgreSQL, etc.

---

### **Project Setup**

#### **Frontend Setup (React)**

1. **Clone the Repository**
   ```bash
     git clone https://github.com/sharmaji513/bookstore-app.git
     cd bookstore-app
    ```
2. **Install Frontend Dependencies**   
    ```bash
     cd frontend
     npm install
   ```
3. *Start the React development server: **
   ```bash
    npm run dev
    ```    

#### **Backend Setup NodeJS**
1. **Clone the Repository**
   ```bash
     git clone https://github.com/sharmaji513/bookstore-app.git
     cd bookstore-app
    ```
2. **Install Frontend Dependencies**   
    ```bash
     cd backend
     npm install
   ```
3. *Start the React development server: **
   ```bash
    npm run dev
    ```
4. ** Create a .env file **
   ```bash
   PORT=5000
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_string  # If you're using MongoDB
    ```
5. *Start the backend server: **
   ```bash
    npm start 
    ```
 
