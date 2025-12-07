const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener('click', () =>  {
    const text = taskInput.value.trim();
    const category = categorySelect.value;

    if ( !text ) return;

    const newTask = {  id: Date.now(), text, category  };
    tasks = [ ...tasks, newTask ];

    saveTasks();
    renderTasks( tasks );

    taskInput.value = '';
});

document.querySelectorAll('.filters button').forEach( btn => {
    btn.addEventListener('click', () =>  {
        const filter = btn.dataset.filter;
        const filtered = filter === 'all' ? tasks : tasks.filter( task => task.category === filter );
        
        renderTasks( filtered );
    });
});

function renderTasks( list ) {
    list = list.filter(task => task.text && task.category);
    
    taskList.innerHTML = '';

    list.forEach( task =>  {
        const {  id, text, category, ...rest  } = task;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text} — <em>${category}</em></span>
            <button data-id='${id}'>🗑</button>
        `;

        li.querySelector('button').addEventListener('click', (event) =>  {
            const idToDelete = Number(event.target.dataset.id);
            tasks = tasks.filter( task => task.id !== idToDelete );

            saveTasks();
            renderTasks( tasks );
        });

        taskList.appendChild( li );
    });
};

renderTasks(tasks);
