export class TaskView {

    constructor(task) {

        this.task = task;

    }

    getElement() {

        const task = document.createElement('div');
        task.classList.add('task');
        task.textContent = this.task.title;
        return task;

    }

}