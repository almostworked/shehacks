// Get the user's current month for the month header
function getUserMonth() {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  return months[new Date().getMonth()];
}
var habits = [];
// Add a habit to habit list
function addHabit() {
  var input = document.getElementById("input");
  var habit = input.ariaValueMax;
  var habitList = document.getElementById("habits");
  var item = document.createElement("li");
  item.textContent = habit;
  habitList.appendChild(item);
}

// Get the user's current streak of tasks completed
function getTaskStreak() {

}

// Colour code the user's calendar based on tasks completed
function colourCalendar() {
  

}

// Get the user's current goals
function userGoals() {

}
// Get the user's friend activity

function friendActivity() {

}
document.getElementById("input").addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    event.preventDefault();
    addHabit();
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('month');
  header.textContent = getUserMonth();

  const calendar = document.getElementById('calendar');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const square = document.createElement('div');
    square.classList.add('day-square');
    calendar.appendChild(square);
    
  }

});

  