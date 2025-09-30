import { Project } from "./Project";
import { ProjectForm } from "./ProjectForm";
import { ProjectEditForm } from "./ProjectEditForm";
import { ProjectManager } from "./ProjectManager";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";
import { TaskEditForm } from "./TaskEditForm";

export class TodoApp {
    constructor(root) {
        this.root = root;
        this.projectManager = new ProjectManager();
        this.sidebar = document.createElement("div");
        this.content = document.createElement("div");
        this.sidebar.classList.add("main__sidebar");
        this.content.classList.add("main__content");
        this.root.appendChild(this.sidebar);
        this.root.appendChild(this.content);
        this.update();
    }

    update() {
        this.sidebar.innerHTML = "";
        this.content.innerHTML = "";
        this.sidebar.appendChild(this.projectManager.constructElement());
        if (this.projectManager.currentProject)
            this.content.appendChild(this.projectManager.currentProject.taskManager.constructElement());
        this.cacheDOM();
        this.bindEvents();
    }

    cacheDOM() {
        // Adding

        this.projectAddButton = document.querySelector(".main__sidebar-project-add");

        this.taskAddButton = document.querySelector(".main__content-task-add");

        // Editing

        this.projectEditButtons = [...document.querySelectorAll(".main__sidebar-project-edit")];

        this.taskEditButtons = [...document.querySelectorAll(".main__sidebar-task-edit")];

        // Submitting

        this.submitProjectForm = document.querySelector(".project-form__button-submit");

        this.submitProjectEditForm = document.querySelector(".project-edit-form__button-submit");

        this.submitTaskForm = document.querySelector(".task-form__button-submit");

        this.submitTaskEditForm = document.querySelector(".task-edit-form__button-submit");

        // Removing

        this.projectRemoveButtons = [...document.querySelectorAll(".main__sidebar-project-remove")];

        this.taskRemoveButtons = [...document.querySelectorAll(".main__content-task-remove")];

        // Closing

        this.closeForm = document.querySelector("[class$=-form__close");
    }

    bindEvents() {
        // Adding

        this.projectAddButton.onclick = () => {
            if (!this.getForm()) this.projectForm = new ProjectForm();
            this.update();
        };

        if (this.taskAddButton) this.taskAddButton.onclick = () => {
            if (!this.getForm()) this.taskForm = new TaskForm();
            this.update();
        };

        // Editing

        this.projectEditButtons.forEach((projectEditButton) => {
            projectEditButton.onclick = () => {
                if (!this.getForm()) this.projectEditForm = new ProjectEditForm();
                this.update();
            };
        });

        this.taskEditButtons.forEach((taskEditButton) => {
            taskEditButton.onclick = () => {
                if (!this.getForm()) this.taskEditForm = new TaskEditForm();
                this.update();
            };
        });

        // Submitting

        if (this.submitProjectForm)
            this.submitProjectForm.onclick = () => {
                const projectData = this.projectForm.submitForm();
                const project = new Project(projectData);
                this.projectManager.addProject(project);
                this.projectForm.closeForm();
                this.projectForm = null;
                this.update();
            };

        if (this.submitTaskForm)
            this.submitTaskForm.onclick = () => {
                const taskData = this.taskForm.submitForm();
                const task = new Task(taskData);
                this.projectManager.currentProject.taskManager.addTask(task);
                this.taskForm.closeForm();
                this.taskForm = null;
                this.update();
            };

        // Removing

        this.projectRemoveButtons.forEach((projectRemoveButton) => {
            const projectId = projectRemoveButton.parentElement.dataset.id;
            projectRemoveButton.onclick = (event) => {
                this.projectManager.removeProject(projectId);
                this.update();
                event.stopPropagation();
            };
        });

        this.taskRemoveButtons.forEach((taskRemoveButton) => {
            const taskId = taskRemoveButton.parentElement.dataset.id;
            taskRemoveButton.onclick = () => {
                this.projectManager.currentProject.taskManager.removeTask(taskId);
                this.update();
            };
        });

        // Closing

        if (this.closeForm) this.closeForm.onclick = () => {
            const currentForm = this.getForm();
            currentForm.closeForm();
            this.projectForm = null;
            this.projectEditForm = null;
            this.taskForm = null;
            this.taskEditForm = null;
        }

        // Setting

        this.projectManager.projects.forEach((project) => {
            project.HTMLElement.onclick = () => {
                this.projectManager.currentProject = project;
                this.update();
            };
        });
    }

    getForm() {
        return this.projectForm || this.projectEditForm || this.taskForm || this.taskEditForm || null
    }
}
