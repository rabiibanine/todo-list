import Remove from "../public/remove.svg";

export class Task {

    constructor(taskData) {

        this.title = taskData.title;
        this.description = taskData.description;
        this.dueDate = taskData.dueDate;
        this.priority = taskData.priority;
        this.id = crypto.randomUUID();

    }

    constructElement() {

        const taskElement = document.createElement('div');
        taskElement.classList.add('main__content-task');
        taskElement.dataset.id = this.id;
        const taskTitleElement = document.createElement('h2');
        taskTitleElement.classList.add('main__content-task-title');
        taskTitleElement.textContent = this.title;
        const taskDescriptionElement = document.createElement('p');
        taskDescriptionElement.classList.add('main__content-task-title');
        taskDescriptionElement.textContent = this.description;
        const taskRemoveIcon = document.createElement('img');
        taskRemoveIcon.classList.add('main__content-task-remove');
        taskRemoveIcon.src = Remove;
        taskRemoveIcon.textContent = 'Remove';
        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskDescriptionElement);
        taskElement.appendChild(taskRemoveIcon);
        return taskElement;

    }

}