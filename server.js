const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

// Allow JSON data
app.use(express.json());

// Allow HTML, CSS and JavaScript files
app.use(express.static(__dirname));

// Location of students.json
const dataFile = path.join(__dirname, "data", "students.json");


// ===============================
// REGISTER STUDENT
// ===============================

app.post("/api/students", (req, res) => {

    const student = req.body;

    // Check required details
    if (
        !student.name ||
        !student.email ||
        !student.phone ||
        !student.course
    ) {
        return res.status(400).json({
            message: "Please fill all required fields"
        });
    }

    // Read existing students
    const students = JSON.parse(
        fs.readFileSync(dataFile, "utf8")
    );

    // Create new student
    const newStudent = {

        id: Date.now(),

        name: student.name,

        email: student.email,

        phone: student.phone,

        course: student.course,

        marks: {

            maths: student.marks.maths,

            physics: student.marks.physics,

            programming: student.marks.programming,

            english: student.marks.english
        },

        total: student.total,

        percentage: student.percentage,

        status: student.status
    };

    // Add student
    students.push(newStudent);

    // Save student
    fs.writeFileSync(
        dataFile,
        JSON.stringify(students, null, 2)
    );

    // Send response
    res.status(201).json({

        message: "Student registered successfully",

        student: newStudent
    });
});


// ===============================
// GET ALL STUDENTS
// ===============================

app.get("/api/students", (req, res) => {

    const students = JSON.parse(
        fs.readFileSync(dataFile, "utf8")
    );

    res.json(students);
});


// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});