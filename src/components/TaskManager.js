import Add from "../public/add.svg";

export class TaskManager {
    constructor(title) {
        this.title = title;
        this.tasks = new Array();
    }

    constructElement() {
        const taskManager = document.createElement("div");
        taskManager.classList.add("main__content-task-manager");

        const taskManagerHeader = document.createElement("div");
        taskManagerHeader.classList.add("main__content-task-manager-header");
        const taskManagerTitle = document.createElement("h1");
        taskManagerTitle.classList.add("main__content-task-manager-title");
        taskManagerTitle.textContent = this.title;
        const taskAddIcon = document.createElement("img");
        taskAddIcon.classList.add("main__content-task-add");
        taskAddIcon.src = Add;
        taskManagerHeader.appendChild(taskManagerTitle);
        taskManagerHeader.appendChild(taskAddIcon);

        const taskManagerPendingTasks = document.createElement("div");
        taskManagerPendingTasks.classList.add("main__content-task-pending-list");
        taskManagerPendingTasks.classList.add("task-list");
        this.tasks.forEach((task) => {
            const taskElement = task.constructElement();
            taskManagerPendingTasks.appendChild(taskElement);
        });

        taskManager.appendChild(taskManagerHeader);
        taskManager.appendChild(taskManagerPendingTasks);
        return taskManager;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    addTask(taskToAdd) {
        this.tasks.push(taskToAdd);
    }

    editTask(taskID, newTaskData) {
        const taskToEdit = this.tasks.find((task) => task.id === taskID);
        taskToEdit.title = newTaskData.title;
        taskToEdit.description = newTaskData.description;
    }

    removeTask(taskId) {
        const i = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks.splice(i, 1);
    }
}
