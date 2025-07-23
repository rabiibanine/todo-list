export class TaskManager {

    constructor() {

        this.tasks = new Array();

    }

    constructElement() {

        const taskManager = document.createElement('div');
        const taskManagerTitle = document.createElement('h1');
        const taskManagerTasks = document.createElement('ul');
        taskManager.classList.add('main__content-task-manager');
        taskManagerTitle.classList.add('main__content-task-manager-title');
        taskManagerTasks.classList.add('main__content-task-list');
        taskManagerTitle.textContent = 'Tasks';
        this.tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.classList.add('main__content-task');
            const taskTitleElement = document.createElement('h2');
            taskElement.classList.add('main__content-task-title');
            taskTitleElement.textContent = task.title;
            taskElement.appendChild(taskTitleElement)
            taskManagerTasks.appendChild(taskElement);
        })
        taskManager.appendChild(taskManagerTitle);
        taskManager.appendChild(taskManagerTasks);
        return taskManager;

    }

    addTask(task) {

        this.tasks.push(task);

    }

}