// Get the user's current month for the month header
function getUserMonth() {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  return months[new Date().getMonth()];
}

// Get the user's current streak of tasks completed
function getTaskStreak() {

}

// Colour code the user's calendar based on tasks completed
function colourCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const square = document.createElement('div');
    square.classList.add('day-square');
    
  }
  return square;

}

// Get the user's current goals
function userGoals() {

}

// Get the user's friend activity

function friendActivity() {

}
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('month');
  header.textContent = getUserMonth();

  const button = document.getElementById('calendar');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const square = document.createElement('div');
    square.classList.add('day-square');
    button.appendChild(square);
    
  }

});

