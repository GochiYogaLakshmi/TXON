let tasks = [];

function renderTasks() {
    const tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task ${task.completed ? 'completed' : ''}`;
        taskDiv.innerHTML = `
            ${task.title}
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="toggleCompletion(${index})">${task.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
        `;
        tasksDiv.appendChild(taskDiv);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTitle = taskInput.value.trim();
    if (taskTitle !== '') {
        tasks.push({ title: taskTitle, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const newTitle = prompt('Edit Task:', tasks[index].title);
    if (newTitle !== null) {
        tasks[index].title = newTitle.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function filterTasks() {
    const filteredTasks = tasks.filter(task => task.completed);
    tasks = filteredTasks;
    renderTasks();
}
