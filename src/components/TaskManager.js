import { isThursdayWithOptions } from "date-fns/fp";
import Add from "../public/add.svg";
import Expand from "../public/expand.svg";
import gsap from "gsap";

export class TaskManager {
    constructor(title) {
        this.title = title;
        this.tasks = new Array();
        this.isExpanded = true;
    }

    constructElement() {
        
        // # Task Manager

        const taskManager = document.createElement("div");
        taskManager.classList.add("main__content-task-manager");

        // # Header

        const taskManagerHeader = document.createElement("div");
        taskManagerHeader.classList.add("main__content-task-manager-header");

        // ## Header Title

        const taskManagerTitle = document.createElement("h1");
        taskManagerTitle.classList.add("main__content-task-manager-title");
        taskManagerTitle.textContent = this.title;
        taskManagerHeader.appendChild(taskManagerTitle);

        // ## Header Add

        const taskAddIcon = document.createElement("img");
        taskAddIcon.classList.add("main__content-task-add");
        taskAddIcon.src = Add;
        taskManagerHeader.appendChild(taskAddIcon);

        // # Pending List

        const taskManagerPendingTasks = document.createElement("div");
        taskManagerPendingTasks.classList.add("main__content-task-manager-pending-list");
        taskManagerPendingTasks.classList.add("task-list");
        if (this.isExpanded) taskManagerPendingTasks.classList.add("expanded");

        // ## Pending List Header

        const taskManagerPendingTasksHeader = document.createElement("div");
        taskManagerPendingTasksHeader.classList.add("main__content-task-manager-pending-header");
        taskManagerPendingTasks.appendChild(taskManagerPendingTasksHeader);

        // ### Pending List Header Expand

        const taskManagerPendingTasksHeaderExpand = document.createElement("img");
        taskManagerPendingTasksHeaderExpand.classList.add("main__content-task-manager-pending-header-expand");
        taskManagerPendingTasksHeaderExpand.src = Expand;
        taskManagerPendingTasksHeaderExpand.title = "Expand";
        taskManagerPendingTasksHeader.appendChild(taskManagerPendingTasksHeaderExpand);

        // ### Pending List Header Title

        const taskManagerPendingTasksHeaderTitle = document.createElement("h4");
        taskManagerPendingTasksHeaderTitle.classList.add("main__content-task-manager-pending-header-title");
        taskManagerPendingTasksHeaderTitle.textContent = "Pending";
        taskManagerPendingTasksHeader.appendChild(taskManagerPendingTasksHeaderTitle);

        // ## Pending List Body

        const taskManagerPendingTasksBody = document.createElement("div");
        taskManagerPendingTasksBody.classList.add("main__content-task-manager-pending-body");
        taskManagerPendingTasks.appendChild(taskManagerPendingTasksBody);

        // ## Pending List Body Tasks

        this.tasks.forEach((task) => {
            const taskElement = task.constructElement();
            taskManagerPendingTasksBody.appendChild(taskElement);
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

    removeTask(taskID) {
        const i = this.tasks.findIndex((task) => task.id === taskID);
        this.tasks.splice(i, 1);
    }

    async finishTask(taskID) {
        const task = document.querySelector(`div[data-id="${taskID}"]`);
        await gsap.to(task, {
            y: -500,
            opacity: 0,
            scaleY: 0,
            ease: "power3.out",
            backgroundColor: "#70a288ff",
            onComplete: () => {
                this.removeTask(taskID);
            }
        })
        return;
    }

    toggleExpansion() {
        // At this point I've realized I need a whole new task list class because I wanted multiple lists but I would rather not go through all of that, I'm still learning and I kind of need to be over with this project asap. There will only be one list which is a pending list.
        this.isExpanded = !this.isExpanded;
    }

}
