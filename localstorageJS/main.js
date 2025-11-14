const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const themeToggle = document.getElementById('themeToggle');

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  todoList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <div>
        <button onclick="editTask(${index})">Изменить</button>
        <button onclick="deleteTask(${index})">Удалить</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function editTask(index) {
  const newTask = prompt('Измените задачу: ', tasks[index]);
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem("theme", theme);
}

addBtn.addEventListener('click', addTask);
themeToggle.addEventListener('click', toggleTheme);

renderTasks();

