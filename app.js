// JavaScript code for the student attendance web application

// Array to hold attendance records
let attendanceRecords = [];

// Function to add a student to the attendance list
function addStudent(name) {
    if (name) {
        attendanceRecords.push(name);
        displayAttendance();
    } else {
        alert("Please enter a valid name.");
    }
}

// Function to remove a student from the attendance list
function removeStudent(name) {
    const index = attendanceRecords.indexOf(name);
    if (index > -1) {
        attendanceRecords.splice(index, 1);
        displayAttendance();
    } else {
        alert("Student not found in attendance list.");
    }
}

// Function to display the attendance records
function displayAttendance() {
    const attendanceList = document.getElementById("attendance-list");
    attendanceList.innerHTML = ""; // Clear the current list
    attendanceRecords.forEach((student) => {
        const listItem = document.createElement("li");
        listItem.textContent = student;
        attendanceList.appendChild(listItem);
    });
}

// Event listener for the add student form
document.getElementById("add-student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const studentName = document.getElementById("student-name").value;
    addStudent(studentName);
    document.getElementById("student-name").value = ""; // Clear input field
});

// Event listener for the remove student form
document.getElementById("remove-student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const studentName = document.getElementById("remove-student-name").value;
    removeStudent(studentName);
    document.getElementById("remove-student-name").value = ""; // Clear input field
});