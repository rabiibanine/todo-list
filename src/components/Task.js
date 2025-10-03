import Remove from "../public/remove.svg";
import Edit from "../public/edit.svg";
import Finish from "../public/finish.svg";

export class Task {
    constructor(taskData) {
        this.title = taskData.title ? taskData.title : "Unnamed";
        this.description = taskData.description ? taskData.description : "No description";
        this.dueDate = taskData.dueDate;
        this.priority = taskData.priority;
        this.id = crypto.randomUUID();
    }

    constructElement() {
        const taskElement = document.createElement("div");
        taskElement.classList.add("main__content-task");
        taskElement.dataset.id = this.id;
        const taskTitleElement = document.createElement("h2");
        taskTitleElement.classList.add("main__content-task-title");
        taskTitleElement.textContent = this.title;
        const taskDescriptionElement = document.createElement("p");
        taskDescriptionElement.classList.add("main__content-task-description");
        taskDescriptionElement.textContent = this.description;
        const taskPriorityElement = document.createElement("p");
        taskPriorityElement.classList.add("main__content-task-priority");
        taskPriorityElement.textContent = this.priority;
        const taskDueDateElement = document.createElement("p");
        taskDueDateElement.classList.add("main__content-task-due-date");
        taskDueDateElement.textContent = this.dueDate;
        const taskFinishIcon = document.createElement("img");
        taskFinishIcon.classList.add("main__content-task-finish");
        taskFinishIcon.src = Finish;
        taskFinishIcon.title = "Finish Task Icon";
        const taskEditIcon = document.createElement("img");
        taskEditIcon.classList.add("main__content-task-edit");
        taskEditIcon.src = Edit;
        taskEditIcon.title = "Edit Task Icon";
        const taskRemoveIcon = document.createElement("img");
        taskRemoveIcon.classList.add("main__content-task-remove");
        taskRemoveIcon.src = Remove;
        taskRemoveIcon.title = "Remove Task Icon";
        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskDescriptionElement);
        taskElement.appendChild(taskPriorityElement);
        taskElement.appendChild(taskDueDateElement);
        taskElement.appendChild(taskFinishIcon);
        taskElement.appendChild(taskEditIcon);
        taskElement.appendChild(taskRemoveIcon);
        return taskElement;
    }
}
