import Expand from "../public/expand.svg"
import Finish from "../public/finish.svg";
import Edit from "../public/edit.svg";
import Remove from "../public/remove.svg";

export class Task {
    constructor(taskData) {
        this.title = taskData.title ? taskData.title : "Unnamed";
        this.description = taskData.description ? taskData.description : "No description";
        this.dueDate = taskData.dueDate;
        this.priority = taskData.priority;
        this.id = crypto.randomUUID();
        this.isExpanded = false;
    }

    constructElement() {

        // # Root

        const taskElement = document.createElement("div");
        taskElement.classList.add("main__content-task");
        taskElement.dataset.id = this.id;
        if (this.isExpanded) taskElement.classList.add("expanded");

        // # Header

        const taskHeaderElement = document.createElement("div");
        taskHeaderElement.classList.add("main__content-task-header");

        // ## Header Expand Icon

        const taskExpandIcon = document.createElement("img");
        taskExpandIcon.classList.add("main__content-task-expand");
        taskExpandIcon.src = Expand;
        taskExpandIcon.title = "Expand Task";
        taskHeaderElement.appendChild(taskExpandIcon);

        // ## Header Title

        const taskTitleElement = document.createElement("h2");
        taskTitleElement.classList.add("main__content-task-title");
        taskTitleElement.textContent = this.title;
        taskHeaderElement.appendChild(taskTitleElement);
        
        // ## Header Finish Icon

        const taskFinishIcon = document.createElement("img");
        taskFinishIcon.classList.add("main__content-task-finish");
        taskFinishIcon.src = Finish;
        taskFinishIcon.title = "Finish Task";
        taskHeaderElement.appendChild(taskFinishIcon);

        // ## Header Edit Icon

        const taskEditIcon = document.createElement("img");
        taskEditIcon.classList.add("main__content-task-edit");
        taskEditIcon.src = Edit;
        taskEditIcon.title = "Edit Task";
        taskHeaderElement.appendChild(taskEditIcon);

        // ## Header Remove Icon

        const taskRemoveIcon = document.createElement("img");
        taskRemoveIcon.classList.add("main__content-task-remove");
        taskRemoveIcon.src = Remove;
        taskRemoveIcon.title = "Remove Task";
        taskHeaderElement.appendChild(taskRemoveIcon);

        // # Body

        const taskBodyElement = document.createElement("div");
        taskBodyElement.classList.add("main__content-task-body");

        // ## Body Title

        const taskBodyTitle = document.createElement("h4");
        taskBodyTitle.classList.add("main__content-task-body-title");
        taskBodyTitle.textContent = "Description";
        taskBodyElement.appendChild(taskBodyTitle);

        // ## Body Description

        const taskDescriptionElement = document.createElement("p");
        taskDescriptionElement.classList.add("main__content-task-body-description");
        taskDescriptionElement.textContent = this.description;


        const taskPriorityElement = document.createElement("p");
        taskPriorityElement.classList.add("main__content-task-priority");
        taskPriorityElement.textContent = this.priority;
        const taskDueDateElement = document.createElement("p");
        taskDueDateElement.classList.add("main__content-task-due-date");
        taskDueDateElement.textContent = this.dueDate;

        taskElement.appendChild(taskHeaderElement);
        taskElement.appendChild(taskBodyElement);
        return taskElement;
    }
}
