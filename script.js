// frontend/script.js

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const todoList = document.getElementById('todoList');

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create 'Complete' button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = function () {
      li.classList.toggle('complete');
    };

    // Create 'Remove' button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.onclick = function () {
      todoList.removeChild(li);
    };

    // Append buttons to list item
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    // Append list item to the to-do list
    todoList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }
}

// Add task on button click
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add task on pressing 'Enter' key
document.getElementById('taskInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
