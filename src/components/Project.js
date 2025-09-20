import { TaskManager } from "./TaskManager";
import Remove from "../public/remove-white.svg";

export class Project {

    constructor(projectData) {

        this.title = projectData.title;
        this.description = projectData.description;
        this.taskManager = new TaskManager(this.title);
        this.id = crypto.randomUUID();

    }

    constructElement() {
        
        const projectElement = document.createElement('div');
        projectElement.classList.add('main__sidebar-project');
        projectElement.dataset.id = this.id;
        const projectTitleElement = document.createElement('h2');
        projectTitleElement.classList.add('main__content-project-title');
        projectTitleElement.textContent = this.title;
        projectElement.appendChild(projectTitleElement);
        const projectRemoveIcon = document.createElement('img');
        projectRemoveIcon.classList.add('main__sidebar-project-remove');
        projectRemoveIcon.src = Remove;
        projectElement.appendChild(projectRemoveIcon);
        this.HTMLElement = projectElement;
        return projectElement;

    }

}