# WebTechnologies-Project
Web Technologies (Course) Project


Conversation with Gemini
Could you write me a README.md on this files of my Web technologies Project

Your MD file is ready.
MD icon
 README 
MD

I've generated a comprehensive README.md file for your Weight Recommender web technologies project. It includes an overview of the project, features, technologies used, file structure breakdowns, and instructions for setup and usage. Let me know if you would like any specific additions or modifications!




Your University of Management and Technology chats aren’t used to improve our models. Gemini is AI and can make mistakes. Your privacy & GeminiOpens in a new window

# Weight Recommender Web App

## Overview
Weight Recommender is a lightweight web application that allows users to create an account, log in, and calculate their Body Mass Index (BMI). Based on the computed BMI, the application provides personalized health and diet recommendations. 

## Features
* **User Authentication:** Simple frontend interface for users to Sign Up and Log In.
* **BMI Calculator:** Users can input their height (in cm) and weight (in kg) to instantly calculate their BMI.
* **Personalized Recommendations:** The app categorizes the user's BMI (Underweight, Normal, Overweight, Obese) and provides actionable advice.
* **Interactive UI:** Smooth transitions between the authentication screen and the main application dashboard, complete with customized color-coded feedback (e.g., green for normal BMI, red for underweight/overweight).

## Technologies Used
* **HTML5:** Structures the authentication and calculator views (`index.html`).
* **CSS3:** Styles the application, utilizing a clean, modern, and responsive card-based layout (`style.css`).
* **Vanilla JavaScript:** Handles DOM manipulation, BMI math logic, and asynchronous `fetch` requests for authentication (`script.js`).

## File Structure
* `index.html` - The main HTML document containing the login/signup forms and the BMI calculator interface.
* `style.css` - The stylesheet defining the app's visual appearance, button states, and result color-coding.
* `script.js` - The frontend script that manages the BMI calculation logic, UI state changes, and simulates backend communication.

## Setup & Installation
1. Clone or download the repository to your local machine.
2. Open `index.html` in any modern web browser to view the user interface and test the BMI calculator logic.
3. **Note on Authentication:** The frontend is configured to send POST requests to `/signup` and `/login` endpoints. To fully utilize the authentication features, you will need to serve this project using a backend server (e.g., Node.js/Express, Python/Flask) that handles these routes.

## Usage
1. Enter a mock username and password and click **Login** (assuming backend integration) to enter the app.
2. Once logged in, enter your height and weight.
3. Click **Get Recommendation** to view your calculated BMI and health advice.
4. Click **Logout** to return to the authentication screen.
README.md
Displaying README.md.
