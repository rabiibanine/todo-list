export class Task {

    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();

    }

    constructElement() {

        const taskElement = document.createElement('li');
        taskElement.classList.add('main__content-task');
        taskElement.dataset.id = this.id;
        const taskTitleElement = document.createElement('h2');
        taskTitleElement.classList.add('main__content-task-title');
        taskTitleElement.textContent = this.title;
        const taskRemoveButton = document.createElement('button');
        taskRemoveButton.classList.add('main__content-task-remove');
        taskRemoveButton.textContent = 'Remove';
        taskElement.appendChild(taskTitleElement);
        taskElement.appendChild(taskRemoveButton);
        return taskElement;

    }

}