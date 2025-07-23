export class TodoApp {
    constructor(root, projectManager, taskManager) {
        this.root = root;
        this.projectManager = projectManager;
        this.taskManager = taskManager;
        this.sidebar = document.createElement("div");
        this.content = document.createElement("div");
        this.sidebar.classList.add("main__sidebar");
        this.content.classList.add("main__content");
        this.update();
    }

    update() {
        this.sidebar.innerHTML = "";
        this.content.innerHTML = "";
        this.sidebar.appendChild(this.projectManager.constructElement());
        this.content.appendChild(this.taskManager.constructElement());
        this.root.appendChild(this.sidebar);
        this.root.appendChild(this.content);
        this.cacheDOM();
        this.bindEvents();
    }

    cacheDOM() {
        this.taskRemoveButtons = [
            ...document.querySelectorAll(".main__content-task-remove"),
        ];
    }

    bindEvents() {

        this.taskRemoveButtons.forEach(button => {
            button.onclick = () => {
                this.taskManager.removeTask(button.parentElement);
                this.update();
            }
        })

    }
}
