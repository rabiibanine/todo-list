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
        taskManagerTitle.textContent = 'Default';
        this.tasks.forEach(task => {
            const taskElement = task.constructElement();
            taskManagerTasks.appendChild(taskElement);
        })
        taskManager.appendChild(taskManagerTitle);
        taskManager.appendChild(taskManagerTasks);
        return taskManager;

    }

    addTask(taskToAdd) {

        this.tasks.push(taskToAdd);

    }

    removeTask(taskId) {

        const i = this.tasks.findIndex(task => task.id === taskId);
        this.tasks.splice(i , 1);

    }

}