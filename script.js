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

  const taskItems = document.querySelectorAll('#taskList li');
  taskItems.forEach(item => {
    makeTaskEditable(item);
  });
  
  document.getElementById("input").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      var input = document.getElementById("input").value;
      if (input.trim() !== "") {
        var item = document.createElement("li");
        item.textContent = input;
        document.getElementById("habits").appendChild(item);
        document.getElementById("input").value = "";
      }
    }
  });

  document.getElementById('addTask').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const taskText = this.textContent.trim();
      if (taskText !== '➕ add a task' && taskText !== '') {
        addNewTask(taskText);
        this.textContent = '➕ add a task';
      }
    }
  });

  document.getElementById('toggleSelectionMode').addEventListener('click', toggleSelectionMode);
});

function addNewTask(taskText) {
  const taskList = document.getElementById('taskList');
  const newTask = document.createElement('li');

  const iconSpan = document.createElement('span');
  iconSpan.className = 'icon';
  iconSpan.textContent = '📝';

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = taskText;

  newTask.appendChild(iconSpan);
  newTask.appendChild(textSpan);
  makeTaskEditable(newTask);
  taskList.insertBefore(newTask, document.getElementById('addTask'));
}

function makeTaskEditable(taskItem) {
  taskItem.setAttribute('contenteditable', 'true');
  taskItem.addEventListener('click', function() {
    if (selectionMode) {
      toggleTaskCompletion(taskItem);
    }
  });
  taskItem.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      taskItem.blur();
    }
  });
}

function toggleTaskCompletion(taskItem) {
  taskItem.classList.toggle('completed');
}

