import { TaskManager } from "./TaskManager";

export class Project {

    constructor(title, description) {

        this.title = title;
        this.description = description;
        this.taskManager = new TaskManager();
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
        return projectElement;

    }

}