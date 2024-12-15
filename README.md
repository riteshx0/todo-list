## How to Run the Project

1. **Prerequisites**:
   - Ensure you have **Node.js** installed on your system.
   - Download the project folder and unzip it.

2. **Run the Application**:
   - Open the project folder in your terminal.
   - Run the following command to start the server:=> npm start 
  
3. **Access the API**:
   - By default, the server runs on `http://localhost:3000`.
   - You can test the API endpoints using a tool like Postman or your browser.

4. **API Endpoints**:

   - **Authentication Routes**:
     - **POST** `/api/auth/register` – Register a new user.
     - **POST** `/api/auth/login` – Log in as an existing user.
     - **POST** `/api/auth/logout` – Log out the authenticated user.

   - **Task Management Routes (Protected)**:
     - **POST** `/api/tasks` – Create a new task.
     - **GET** `/api/tasks` – Fetch all tasks of the authenticated user.
     - **GET** `/api/tasks/:id` – Fetch a task by its ID.
     - **PUT** `/api/tasks/:id` – Update a task's status.
     - **DELETE** `/api/tasks/:id` – Delete a task by its ID.

5. **MOST IMPORTANT**:
   - Authentication is required for all task-related routes. Ensure that the user is logged in to test these endpoints.
   - Use the token received during login or register for accessing protected routes.

  
   - **Authentication Routes**:


     - **POST** `/api/auth/register` – Register a new user.  
       **Request Body**:
       {
         "email": "user@example.com",
         "password": "password123"
       }

     - **POST** `/api/auth/login` – Log in as an existing user.  
       **Request Body**:
    
      {
         "email" : "ritesh@gmail.com",
         "password":"pass123"
  
      }

       - **POST** `/api/auth/logout` – Log out authenticated user.  
       **Request Body**:
    {
         "message": "Logged out successfully"
    }  



    
    
    


