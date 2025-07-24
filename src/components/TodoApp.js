import { ProjectManager } from "./ProjectManager";

export class TodoApp {
    constructor(root) {

        this.root = root;
        this.projectManager = new ProjectManager();
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
        if (this.projectManager.currentProject) this.content.appendChild(this.projectManager.currentProject.taskManager.constructElement());
        this.root.appendChild(this.sidebar);
        this.root.appendChild(this.content);
        this.cacheDOM();
        this.bindEvents();

    }

    cacheDOM() {

        this.projectRemoveButtons = [...document.querySelectorAll('.main__sidebar-project-remove')];
        this.taskRemoveButtons = [...document.querySelectorAll('.main__content-task-remove')];

    }

    bindEvents() {

        this.projectRemoveButtons.forEach(projectRemoveButton => {
            const projectId = projectRemoveButton.parentElement.dataset.id;
            projectRemoveButton.onclick = () => {
                this.projectManager.removeProject(projectId);
                this.update();
            };
        });

        this.taskRemoveButtons.forEach(taskRemoveButton => {
            const taskId = taskRemoveButton.parentElement.dataset.id;
            taskRemoveButton.onclick = () => {
                this.projectManager.currentProject.taskManager.removeTask(taskId);
                this.update();
            };
        })

    }

}
