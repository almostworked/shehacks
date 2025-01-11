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
 // Make all existing list items editable
const taskItems = document.querySelectorAll('#taskList li');
taskItems.forEach(item => {
    makeTaskEditable(item);
});

document.getElementById('addTask').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const taskText = this.textContent.trim();
        if (taskText !== '➕ add a task' && taskText !== '') {
            addNewTask(taskText);
            this.textContent = '➕ add a task'; // Reset placeholder
        }
    }
});

  function addNewTask(taskText) {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');

      const iconSpan = document.createElement('span');
      iconSpan.className = 'icon';
      iconSpan.textContent = '📝'; // Default icon for new tasks

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;

    newTask.appendChild(iconSpan);
    newTask.appendChild(textSpan);
    makeTaskEditable(newTask); // Make the new task editable
    taskList.insertBefore(newTask, document.getElementById('addTask'));
}

function makeTaskEditable(taskItem) {
    taskItem.setAttribute('contenteditable', 'true'); // Make the task editable
    taskItem.addEventListener('click', toggleTaskCompletion);
    taskItem.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            taskItem.blur(); // Remove focus to avoid adding a new line
        }
    });
}

function toggleTaskCompletion(event) {
    const taskItem = event.currentTarget;
    taskItem.classList.toggle('completed');
}


});

