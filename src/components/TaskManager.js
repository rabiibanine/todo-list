export class TaskManager {

    constructor() {

        this.tasks = new Array();
        
    }

    constructElement() {

        const taskManager = document.createElement('div');
        taskManager.classList.add('main__content-task-manager');
        const taskManagerTitle = document.createElement('h1');
        taskManagerTitle.classList.add('main__content-task-manager-title');
        taskManagerTitle.textContent = 'Default';
        const taskAddButton = document.createElement('button');
        taskAddButton.classList.add('main__content-task-add');
        taskAddButton.textContent = 'Add Task';
        const taskManagerTasks = document.createElement('ul');
        taskManagerTasks.classList.add('main__content-task-list');
        this.tasks.forEach(task => {
            const taskElement = task.constructElement();
            taskManagerTasks.appendChild(taskElement);
        })
        taskManager.appendChild(taskManagerTitle);
        taskManager.appendChild(taskAddButton);
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