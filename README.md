# Full-Stack Weight Recommender App

## Overview
Weight Recommender is a full-stack web application designed to help users track their Body Mass Index (BMI) and receive personalized health recommendations. It demonstrates a complete end-to-end architecture, encompassing a responsive frontend UI, a robust Node.js/Express backend server, and a MongoDB database for data persistence.

## Key Features & Skills Demonstrated

### 1. Backend API Development (Node.js & Express)
* **RESTful Endpoints:** Custom `/login` and `/signup` POST routes to handle user authentication requests.
* **Middleware Integration:** Utilizes `express.json()` for parsing incoming request bodies and `express.static()` to serve the frontend assets efficiently.
* **Error Handling:** Try-catch blocks to gracefully handle duplicate username registrations and invalid login attempts.

### 2. Database Management (MongoDB & Mongoose)
* **Data Persistence:** Connects locally to a MongoDB database (`weightDB`) to store user credentials.
* **Schema Definition:** Uses **Mongoose** to define a structured `User` schema, enforcing data validation (e.g., `required`, `unique` constraints).

### 3. Frontend Asynchronous JavaScript (Vanilla JS)
* **Fetch API:** Implements `async/await` syntax to send HTTP POST requests to the backend server seamlessly without reloading the webpage.
* **Dynamic DOM Manipulation:** Conditionally renders the user interface, switching between the authentication screen and the application dashboard upon successful login.
* **Core Application Logic:** Implements custom mathematical algorithms to calculate BMI from user inputs (height and weight) and dynamically generates color-coded health recommendations based on predefined health thresholds.

### 4. User Interface Design (HTML5 & CSS3)
* **Semantic HTML:** Clean, readable document structure segregating authentication and app sections.
* **Modern CSS Styling:** Implements a centered, card-based responsive layout utilizing Flexbox, interactive hover states on buttons, and dynamic result text styling (`.result-good`, `.result-bad`).

## Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM

## File Structure Breakdown
* **`server.js`**: The core backend application file configuring the Express server, MongoDB connection, and API routes.
* **`package.json`**: Tracks server dependencies (`express`, `mongoose`).
* **`public/` Directory**: Contains static assets served to the client.
  * `index.html`: The frontend structural layout.
  * `style.css`: Stylesheet for application visuals.
  * `script.js`: Client-side logic for HTTP requests and BMI calculations.

## Installation & Setup
To run this project locally, ensure you have **Node.js** and **MongoDB** installed on your machine.

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the MongoDB service:** Ensure your local MongoDB instance is running on `mongodb://127.0.0.1:27017`.
4. **Start the backend server:**
   ```bash
   node server.js
   ```
5. **Access the App:** Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Use the **Sign Up** feature to register a new account (stored securely in MongoDB).
2. **Login** to access the calculator dashboard.
3. Input your height (cm) and weight (kg) to instantly receive your BMI calculation and dietary/health recommendations.
