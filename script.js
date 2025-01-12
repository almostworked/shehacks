// Get the user's current month for the month header
function getUserMonth() {
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  return months[new Date().getMonth()];
}

let selectionMode = false;

function toggleSelectionMode() {
  selectionMode = !selectionMode;
  const button = document.getElementById('toggleSelectionMode');
  button.textContent = selectionMode ? 'finish striking' : 'strike a mission';
}

/* Load calendar */
document.addEventListener('DOMContentLoaded', function() {
  // Set the month header
  const header = document.getElementById('month');
  header.textContent = getUserMonth();

  // Initialize the calendar
  const calendar = document.getElementById('calendar');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const square = document.createElement('div');
    square.classList.add('day-square');
    square.setAttribute('day', i);
    calendar.appendChild(square);
  }

  // Add task functionality when 'Enter' is pressed
  document.getElementById('addTask').addEventListener('click', function() {
    addBlankTask();  // Add a blank task input when clicked
  });

  // Add toggle selection mode functionality
  document.getElementById('toggleSelectionMode').addEventListener('click', toggleSelectionMode);
});

// Function to add a blank task input (every time clicking 'Add a Task')
function addBlankTask() {
  const taskList = document.getElementById('taskList');

  // Create a new blank task input
  const taskItem = document.createElement('li');
  const inputSpan = document.createElement('span');
  inputSpan.className = 'task-text';
  inputSpan.textContent = 'New task...'; // Default placeholder text
  taskItem.appendChild(inputSpan);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-task';
  deleteButton.textContent = '🗑️';
  deleteButton.addEventListener('click', function() {
    taskItem.remove();  // Remove task on delete
  });

  taskItem.appendChild(deleteButton);

  // Call function to initialize the task with editability and strike-through ability
  makeTaskEditable(taskItem);  
  taskList.insertBefore(taskItem, document.getElementById('addTask'));  // Add the new task before the "Add a new task" button

  // Ensure the "Add a new task" button remains at the bottom
  addAddNewTaskButton();
}

// Make tasks editable and enable strike-through functionality
function makeTaskEditable(taskItem) {
  taskItem.setAttribute('contenteditable', 'true');
  
  // Ensure that the delete button is not editable
  const deleteButton = taskItem.querySelector('.delete-task');
  if (deleteButton) {
    deleteButton.setAttribute('contenteditable', 'false');
  }

  // Allow striking through tasks when clicked in selection mode
  taskItem.addEventListener('click', function() {
    if (selectionMode) {
      toggleTaskCompletion(taskItem);  // Toggle strikethrough when selection mode is active
    }
  });

  // Ensure the task is not editable once 'Enter' key is pressed
  taskItem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      taskItem.blur();  // Exit editing mode on Enter key

      // After editing, add a new "Add a new task" button
      addAddNewTaskButton();
    }
  });
}

// Toggle task completion (strikethrough effect)
function toggleTaskCompletion(taskItem) {
  taskItem.classList.toggle('completed');  // Toggle 'completed' class for strikethrough effect
}

// Add the "Add a new task" button at the bottom
function addAddNewTaskButton() {
  const taskList = document.getElementById('taskList');
  
  // Ensure there's only one "Add a new task" button
  let existingAddTaskButton = document.getElementById('addTask');
  if (!existingAddTaskButton) {
    const addTaskButton = document.createElement('li');
    addTaskButton.id = 'addTask';
    addTaskButton.textContent = '➕ Add a new task';
    addTaskButton.className = 'add-task-button';  // Add a class to style the button
    addTaskButton.addEventListener('click', function() {
      addBlankTask();  // Add task when the button is clicked
    });
    taskList.appendChild(addTaskButton);
  }
}

// Reinitialize tasks when the page is loaded to allow for new tasks to be editable
document.addEventListener('DOMContentLoaded', function() {
  // Initial "Add a new task" button
  addAddNewTaskButton();

  const taskItems = document.querySelectorAll('#taskList li');
  taskItems.forEach(item => {
    makeTaskEditable(item);  // Reinitialize tasks as editable
    const deleteButton = item.querySelector('.delete-task');
    if (deleteButton) {
      deleteButton.addEventListener('click', function() {
        item.remove();  // Ensure old tasks are deletable
      });
    }
  });
});
const toggleButton = document.getElementById('toggleSelectionMode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('selection-mode');
});
