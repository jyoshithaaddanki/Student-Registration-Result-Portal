document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student details
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    // Get marks
    let maths = Number(document.getElementById("maths").value);
    let physics = Number(document.getElementById("physics").value);
    let programming = Number(document.getElementById("programming").value);
    let english = Number(document.getElementById("english").value);

    // Calculate result
    let total = maths + physics + programming + english;

    let percentage = total / 4;

    // Display student details
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayCourse").textContent = course;

    // Display marks
    document.getElementById("displayMaths").textContent = maths;
    document.getElementById("displayPhysics").textContent = physics;
    document.getElementById("displayProgramming").textContent = programming;
    document.getElementById("displayEnglish").textContent = english;

    // Display total and percentage
    document.getElementById("totalMarks").textContent =
        total + " / 400";

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    // Pass / Fail
    let status = document.getElementById("status");

    if (
        maths >= 35 &&
        physics >= 35 &&
        programming >= 35 &&
        english >= 35
    ) {
        status.textContent = "PASS";
        status.style.color = "green";
    } else {
        status.textContent = "FAIL";
        status.style.color = "red";
    }

    // Show result
    document.getElementById("resultSection").style.display = "block";

    // Scroll to result
    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });

});