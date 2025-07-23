export class Task {

    constructor(title, description, dueDate, priority) {

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();

    }

    constructElement() {

        const task = document.createElement('div');
        task.classList.add('main__content-task');
        task.textContent = task.title;
        return task;

    }

}