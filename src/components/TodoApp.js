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

        this.projectEditButtons = [...document.querySelectorAll(".main__sidebar-project-header-edit")];

        this.taskEditButtons = [...document.querySelectorAll(".main__content-task-edit")];

        // Submitting

        this.submitProjectFormButton = document.querySelector(".project-form__button-submit");

        this.submitProjectEditFormButton = document.querySelector(".project-edit-form__button-submit");

        this.submitTaskFormButton = document.querySelector(".task-form__button-submit");

        this.submitTaskEditFormButton = document.querySelector(".task-edit-form__button-submit");

        // Removing

        this.projectRemoveButtons = [...document.querySelectorAll(".main__sidebar-project-header-remove")];

        this.taskRemoveButtons = [...document.querySelectorAll(".main__content-task-remove")];

        // Closing

        this.closeForm = document.querySelector("[class$=-form__close");

        // Expanding

        this.projectExpansionButtons = [...document.querySelectorAll(".main__sidebar-project-header-expand")];

        this.taskListExpansionButtons = [... document.querySelectorAll(".main__content-task-manager-pending-header-expand")];

        this.taskExpansionButtons = [...document.querySelectorAll(".main__content-task-header-expand")];
    
        // Finishing

        this.taskFinishButtons = [...document.querySelectorAll(".main__content-task-finish")];
    }

    bindEvents() {
        // Adding

        this.projectAddButton.onclick = () => {
            if (!this.getForm()) this.projectForm = new ProjectForm();
            this.update();
        };

        if (this.taskAddButton)
            this.taskAddButton.onclick = () => {
                if (!this.getForm()) this.taskForm = new TaskForm();
                this.update();
            };

        // Editing

        this.projectEditButtons.forEach((projectEditButton) => {
            const projectID = projectEditButton.parentElement.parentElement.dataset.id;
            projectEditButton.onclick = () => {
                if (!this.getForm()) this.projectEditForm = new ProjectEditForm(projectID);
                this.update();
            };
        });

        this.taskEditButtons.forEach((taskEditButton) => {
            const taskID = taskEditButton.parentElement.dataset.id;
            taskEditButton.onclick = () => {
                if (!this.getForm()) this.taskEditForm = new TaskEditForm(taskID);
                this.update();
            };
        });

        // Submitting

        if (this.submitProjectFormButton)
            this.submitProjectFormButton.onclick = () => {
                const projectData = this.projectForm.submitForm();
                const project = new Project(projectData);
                this.projectManager.addProject(project);
                this.closeAnyForm();
                this.update();
            };

        if (this.submitProjectEditFormButton)
            this.submitProjectEditFormButton.onclick = () => {
                const projectData = this.projectEditForm.submitForm();
                const projectID = this.submitProjectEditFormButton.parentElement.parentElement.dataset.id;
                const project = this.projectManager.projects.find((project) => project.id === projectID);
                this.projectManager.editProject(projectID, projectData);
                if (this.projectManager.currentProject === project)
                    this.projectManager.currentProject.taskManager.updateTitle(projectData.title);
                this.closeAnyForm();
                this.update();
            };

        if (this.submitTaskFormButton)
            this.submitTaskFormButton.onclick = () => {
                const taskData = this.taskForm.submitForm();
                const task = new Task(taskData);
                this.projectManager.currentProject.taskManager.addTask(task);
                this.closeAnyForm();
                this.update();
            };

        if (this.submitTaskEditFormButton)
            this.submitTaskEditFormButton.onclick = () => {
                const taskData = this.taskEditForm.submitForm();
                const taskID = this.submitTaskEditFormButton.parentElement.dataset.id;
                this.projectManager.currentProject.taskManager.editTask(taskID, taskData);
                this.closeAnyForm();
                this.update();
            };

        // Removing

        if (!this.getForm()) this.projectRemoveButtons.forEach((projectRemoveButton) => {
            const projectID = projectRemoveButton.parentElement.parentElement.dataset.id;
            projectRemoveButton.onclick = (event) => {
                this.projectManager.removeProject(projectID);
                this.update();
                event.stopPropagation();
            };
        });

        if (!this.getForm()) this.taskRemoveButtons.forEach((taskRemoveButton) => {
            const taskID = taskRemoveButton.parentElement.dataset.id;
            taskRemoveButton.onclick = () => {
                this.projectManager.currentProject.taskManager.removeTask(taskID);
                this.update();
            };
        });

        // Closing

        if (this.closeForm)
            this.closeForm.onclick = () => {
                this.closeAnyForm();
            };

        // Setting

        this.projectManager.projects.forEach((project) => {
            project.HTMLElement.onclick = () => {
                this.projectManager.currentProject = project;
                this.update();
            };
        });

        // Expansion

        this.projectExpansionButtons.forEach((projectExpansionButton) => {
            const projectID = projectExpansionButton.parentElement.parentElement.dataset.id;
            const project = this.projectManager.projects.find((project) => project.id === projectID);
            projectExpansionButton.onclick = (event) => {
                projectExpansionButton.parentElement.parentElement.classList.toggle("expanded");
                project.toggleExpansion();
                event.stopPropagation();
            }
        })

        this.taskListExpansionButtons.forEach((taskListExpansionButton) => {
            taskListExpansionButton.onclick = (event) => {
                taskListExpansionButton.parentElement.parentElement.classList.toggle("expanded");
                this.projectManager.currentProject.taskManager.toggleExpansion();
                event.stopPropagation()
            }
        })

        this.taskExpansionButtons.forEach((taskExpansionButton) => {
            const taskID = taskExpansionButton.parentElement.parentElement.dataset.id;
            const task = this.projectManager.currentProject.taskManager.tasks.find((task) => task.id === taskID);
            taskExpansionButton.onclick = (event) => {
                taskExpansionButton.parentElement.parentElement.classList.toggle("expanded");
                task.toggleExpansion();
                event.stopPropagation();
            }
        })

        // Finishing

        this.taskFinishButtons.forEach((taskFinishButton) => {
            const taskID = taskFinishButton.parentElement.parentElement.dataset.id;
            taskFinishButton.onclick = async (event) => {

                await this.projectManager.currentProject.taskManager.finishTask(taskID)
                this.update();
                event.stopPropagation();

            }
        })

    }

    getForm() {
        return this.projectForm || this.projectEditForm || this.taskForm || this.taskEditForm || null;
    }

    closeAnyForm() {
        this.getForm().closeForm();
        this.projectForm = null;
        this.projectEditForm = null;
        this.taskForm = null;
        this.taskEditForm = null;
    }
}
