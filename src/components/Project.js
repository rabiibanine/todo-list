import { TaskManager } from "./TaskManager";

export class Project {

    constructor(projectData) {

        this.title = projectData.title;
        this.description = projectData.description;
        this.taskManager = new TaskManager(this.title);
        this.id = crypto.randomUUID();

    }

    constructElement() {
        
        const projectElement = document.createElement('li');
        projectElement.classList.add('main__sidebar-project');
        projectElement.dataset.id = this.id;
        const projectTitleElement = document.createElement('h2');
        projectTitleElement.classList.add('main__content-project-title');
        projectTitleElement.textContent = this.title;
        projectElement.appendChild(projectTitleElement);
        const projectRemoveButton = document.createElement('button');
        projectRemoveButton.classList.add('main__sidebar-project-remove');
        projectRemoveButton.textContent = 'Remove';
        projectElement.appendChild(projectRemoveButton);
        this.HTMLElement = projectElement;
        return projectElement;

    }

}