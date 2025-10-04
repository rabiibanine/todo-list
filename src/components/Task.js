import { format, isWithinInterval } from "date-fns";

import Expand from "../public/expand.svg";
import Finish from "../public/finish.svg";
import Edit from "../public/edit.svg";
import Remove from "../public/remove.svg";

export class Task {
    constructor(taskData) {
        this.title = taskData.title ? taskData.title : "Unnamed";
        this.description = taskData.description ? taskData.description : "No description";
        this.dueDate = new Date(taskData.dueDate);
        this.priority = taskData.priority;
        console.log(taskData);
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

        const taskHeaderExpand = document.createElement("img");
        taskHeaderExpand.classList.add("main__content-task-header-expand");
        taskHeaderExpand.src = Expand;
        taskHeaderExpand.title = "Expand Task";
        taskHeaderElement.appendChild(taskHeaderExpand);

        // ## Header Title

        const taskHeaderTitle = document.createElement("h2");
        taskHeaderTitle.classList.add("main__content-task-header-title");
        taskHeaderTitle.textContent = this.title;
        taskHeaderElement.appendChild(taskHeaderTitle);

        // ## Header Priority

        const taskHeaderPriority = document.createElement("p");
        taskHeaderPriority.classList.add("main__content-task-header-priority");
        taskHeaderPriority.dataset.priority = this.priority;
        taskHeaderPriority.textContent = this.priority;
        taskHeaderElement.appendChild(taskHeaderPriority);

        // ## Header Due Date

        const taskHeaderDueDate = document.createElement("div");
        taskHeaderDueDate.classList.add("main__content-task-header-due-date");
        taskHeaderElement.appendChild(taskHeaderDueDate);


        const taskHeaderDueDateDD = document.createElement("span");
        taskHeaderDueDateDD.classList.add("main__content-task-header-due-date-DD");
        taskHeaderDueDateDD.textContent = format(this.dueDate, "dd")
        taskHeaderDueDate.appendChild(taskHeaderDueDateDD);
        
        const taskHeaderDueDateContainer = document.createElement("div");
        taskHeaderDueDateContainer.classList.add("main__content-task-header-due-date-container");
        taskHeaderDueDate.appendChild(taskHeaderDueDateContainer);

        const taskHeaderDueDateiiii = document.createElement("span");
        taskHeaderDueDateiiii.classList.add("main__content-task-header-due-date-iiii");
        taskHeaderDueDateiiii.textContent = format(this.dueDate, "iiii");
        taskHeaderDueDateContainer.appendChild(taskHeaderDueDateiiii);
        const taskHeaderDueDateLLLL = document.createElement("span")
        taskHeaderDueDateLLLL.classList.add("main__content-task-header-due-date-LLLL");
        taskHeaderDueDateLLLL.textContent = format(this.dueDate, "LLLL")
        taskHeaderDueDateContainer.appendChild(taskHeaderDueDateLLLL);
        
        // ## Header Finish Icon

        const taskHeaderFinish = document.createElement("img");
        taskHeaderFinish.classList.add("main__content-task-finish");
        taskHeaderFinish.src = Finish;
        taskHeaderFinish.title = "Finish Task";
        taskHeaderElement.appendChild(taskHeaderFinish);

        // ## Header Edit Icon

        const taskHeaderEdit = document.createElement("img");
        taskHeaderEdit.classList.add("main__content-task-edit");
        taskHeaderEdit.src = Edit;
        taskHeaderEdit.title = "Edit Task";
        taskHeaderElement.appendChild(taskHeaderEdit);

        // ## Header Remove Icon

        const taskHeaderRemove = document.createElement("img");
        taskHeaderRemove.classList.add("main__content-task-remove");
        taskHeaderRemove.src = Remove;
        taskHeaderRemove.title = "Remove Task";
        taskHeaderElement.appendChild(taskHeaderRemove);

        // # Body

        const taskBodyElement = document.createElement("div");
        taskBodyElement.classList.add("main__content-task-body");

        // ## Body Title

        const taskBodyTitle = document.createElement("h4");
        taskBodyTitle.classList.add("main__content-task-body-title");
        taskBodyTitle.textContent = "Description";
        taskBodyElement.appendChild(taskBodyTitle);

        // ## Body Description

        const taskBodyDescription = document.createElement("p");
        taskBodyDescription.classList.add("main__content-task-body-description");
        taskBodyDescription.textContent = this.description;
        taskBodyElement.appendChild(taskBodyDescription);


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

    toggleExpansion() {
        this.isExpanded = !this.isExpanded;
    }
}
