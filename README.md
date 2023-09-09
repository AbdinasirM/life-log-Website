# Life Log - Personal Journal and Wellness Tracking Web App 📔🌱

**Description:**

Life Log is a web application designed to serve as a personal journal and wellness tracking platform. This project utilizes modern web technologies to provide users with an intuitive interface for journaling their thoughts and tracking their wellness activities. The application is built using Angular for the frontend and Node.js with Express.js for the backend. Data is stored in a MongoDB database.

**Features:**

- 🌟 **User-Friendly Frontend:** The frontend is developed using Angular, offering a smooth and responsive user experience. Navigating through different sections is made easy with a navigation bar and a footer providing access to key areas.

- 🔐 **User Authentication:** Secure user authentication is implemented. New users can sign up with their name, email, and password, while existing users can log in. An authentication guard ensures that certain sections are accessible only to authenticated users.

- ✍️ **Personal Journaling:** Users can create, edit, and delete journal entries. Each entry includes a title, description, and optional image. MongoDB stores the entries for easy retrieval and management.

- 🏋️‍♂️ **Wellness Tracking:** The app lets users track wellness activities such as meals, water intake, exercise hours, sleep, snacks, and steps taken. This data is recorded and presented in a user-friendly format.

- ℹ️ **About Us and Contact Us:** The "About Us" section provides insights into the project's creators, while the "Contact Us" section allows users to send messages to the development team.

- 🔧 **Backend Infrastructure:** The backend is powered by Node.js and Express.js, serving as an API to handle frontend requests. User authentication and data processing are managed on the backend.

- 🗄️ **Database Management:** MongoDB serves as the database for storing user profiles, journal entries, and wellness data. The backend communicates with MongoDB to retrieve, store, and update user-related information.

- 👤 **User Model and Authentication:** The backend features a user model defining user attributes. User authentication relies on JSON Web Tokens (JWT) for enhanced security.

- 🛣️ **Route Handling:** The backend handles routes for managing journal entries and wellness data. This allows users to interact with their data through RESTful API endpoints.

**Deployment Steps:**

To get started with hosting the Life Log project locally, follow these steps:

1. **Clone the Repository:**

   - Navigate to the branch 'deckorize-lifelog' in the repository.
   - Clone the repository: `git clone https://github.com/AbdinasirM/life-log-Website.git`

2. **Install Docker Desktop:**

   - For Windows/Mac users, install Docker Desktop.
   - For Linux users, install Docker in your terminal.

3. **Navigate to the Project Directory:**

   - Open a terminal window and navigate to where you downloaded the repository: `cd path/to/life-log-Website`

4. **Modify Docker Compose Configuration:**

   - Inside the 'life-log' folder, locate the 'docker-compose.yml' file.
   - Change the following environment variables:
     ```yaml
     environment:
       MONGO_INITDB_ROOT_USERNAME: changeusername
       MONGO_INITDB_ROOT_PASSWORD: changepassword
     ```

5. **Configure Backend:**

   - Go to the 'Backend' folder inside the project.
   - Modify the '.env' file with the following content:
     ```plaintext
     MONGODB_URI=mongodb://changeusername:changepassword@localhost:27017
     JWT_KEY="makeasupersecretkey"
     PORT=5000
     ```

6. **Start the Application:**

   - In the terminal, run the following command to build and start the application: `docker compose up --build`

7. **Access the Application:**

   - After about 15 seconds, open your web browser and navigate to `localhost:80`.
   - If you see the application running, congratulations! You have successfully self-hosted the Life Log project on your local machine. 🌟📔🌱
