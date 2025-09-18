import { Project } from "./Project";
import { ProjectForm } from "./ProjectForm";
import { ProjectManager } from "./ProjectManager";
import { Task } from "./Task";
import { TaskForm } from "./TaskForm";

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

        this.projectAddButton = document.querySelector('.main__sidebar-project-add');
        this.projectRemoveButtons = [...document.querySelectorAll('.main__sidebar-project-remove')];
        this.taskAddButton = document.querySelector('.main__content-task-add');
        this.taskRemoveButtons = [...document.querySelectorAll('.main__content-task-remove')];
        this.closeTaskForm = document.querySelector('.task-form__exit'); 
        this.submitTaskForm = document.querySelector('.task-form__button-submit');
        this.closeProjectForm = document.querySelector('.project-form__exit'); 
        this.submitProjectForm = document.querySelector('.project-form__button-submit');

    }

    bindEvents() {

        
        this.projectAddButton.onclick = () => {
            if(!this.currentProjectForm) this.currentProjectForm = new ProjectForm();
            this.update();
        }

        this.projectRemoveButtons.forEach(projectRemoveButton => {
            const projectId = projectRemoveButton.parentElement.dataset.id;
            projectRemoveButton.onclick = () => {
                this.projectManager.removeProject(projectId);
                this.update();
            };
        });

        if (this.closeProjectForm) this.closeProjectForm.onclick = () => {
            this.currentProjectForm.closeForm();
            this.currentProjectForm = null;
            this.update();
        }

        if (this.submitProjectForm) this.submitProjectForm.onclick = () => {
            const projectData = this.currentProjectForm.submitForm();
            const project = new Project(projectData);
            this.projectManager.addProject(project);
            this.currentProjectForm.closeForm();
            this.currentProjectForm = null;
            this.update();
        }

        if (this.taskAddButton) this.taskAddButton.onclick = () => {
                if (!this.currentTaskForm) this.currentTaskForm = new TaskForm();
                this.update();
            }

        this.taskRemoveButtons.forEach(taskRemoveButton => {
            const taskId = taskRemoveButton.parentElement.dataset.id;
            taskRemoveButton.onclick = () => {
                this.projectManager.currentProject.taskManager.removeTask(taskId);
                this.update();
            };
        })

        if (this.closeTaskForm) this.closeTaskForm.onclick = () => {
            this.currentTaskForm.closeForm();
            this.currentTaskForm = null;
            this.update()
        }

        if (this.submitTaskForm) this.submitTaskForm.onclick = () => {
            const taskData = this.currentTaskForm.submitForm();
            const task = new Task(taskData);
            this.projectManager.currentProject.taskManager.addTask(task);
            this.currentTaskForm.closeForm();
            this.currentTaskForm = null;
            this.update();
        }

    }

}
