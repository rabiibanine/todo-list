import Add from "../public/add.svg";

export class TaskManager {

    constructor(parentProjectTitle) {

        this.title = parentProjectTitle;
        this.tasks = new Array();
        
    }

    constructElement() {

        const taskManager = document.createElement('div');
        taskManager.classList.add('main__content-task-manager');
        const taskManagerTitle = document.createElement('h1');
        taskManagerTitle.classList.add('main__content-task-manager-title');
        taskManagerTitle.textContent = this.title;
        const taskAddIcon = document.createElement('img');
        taskAddIcon.classList.add('main__content-task-add');
        taskAddIcon.src = Add;
        const taskManagerTasks = document.createElement('ul');
        taskManagerTasks.classList.add('main__content-task-list');
        this.tasks.forEach(task => {
            const taskElement = task.constructElement();
            taskManagerTasks.appendChild(taskElement);
        })
        taskManager.appendChild(taskManagerTitle);
        taskManager.appendChild(taskAddIcon);
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