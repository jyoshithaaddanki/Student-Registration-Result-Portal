Student Registration & Result Portal

A simple full-stack web application for registering students, storing their details, entering examination marks, and automatically calculating their total marks, percentage, and pass/fail status.

Features
Student registration form
Student name, email, phone, and course
Marks entry for multiple subjects
Automatic total calculation
Automatic percentage calculation
Automatic Pass/Fail status
Responsive design
Backend using Node.js and Express.js
Student data stored in a JSON file
REST API for student records
Technologies Used
HTML5
CSS3
JavaScript
Node.js
Express.js
JSON
Project Structure
Student-Registration-Result-Portal/
│
├── data/
│   └── students.json
│
├── node_modules/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
└── package-lock.json
How to Run
1. Open the project

Open the project folder in VS Code.

2. Open the terminal

Make sure the terminal is inside:

Student-Registration-Result-Portal
3. Install dependencies
npm install
4. Start the server
node server.js

You should see:

Server running at http://localhost:3000
5. Open the website

Open your browser and visit:

http://localhost:3000
Backend API
Get all students
GET /api/students

Example:

http://localhost:3000/api/students
Register a student
POST /api/students

Student information is saved in:

data/students.json
Result Calculation

The system calculates:

Total = Mathematics + Physics + Programming + English
Percentage = Total / 4

A student is marked PASS when they score at least 35 marks in every subject. Otherwise, the status is FAIL.

Future Enhancements
Admin login
Student login
Search student by ID
Edit and delete student records
MySQL/MongoDB database
Download result as PDF
Admin dashboard
Author

Student Registration & Result Portal

License

This project is created for educational and academic purposes.
