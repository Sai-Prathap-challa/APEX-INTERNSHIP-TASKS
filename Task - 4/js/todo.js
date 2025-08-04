
function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task); 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => removeTask(index);
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

window.onload = renderTasks;
