import { TaskManager } from "./TaskManager";
import Edit from "../public/edit-white.svg";
import Remove from "../public/remove-white.svg";
import Expand from "../public/expand-white.svg";

export class Project {
    constructor(projectData) {
        this.projectData = projectData;
        this.title = projectData.title;
        this.description = projectData.description;
        this.taskManager = new TaskManager(this.title);
        this.id = crypto.randomUUID();
        this.isExpanded = false;
    }

    constructElement() {
        
        // # Root

        const projectElement = document.createElement("div");
        projectElement.classList.add("main__sidebar-project");
        projectElement.dataset.id = this.id;
        if (this.isExpanded) projectElement.classList.add("expanded");

        // # Header

        const projectHeaderElement = document.createElement("div");
        projectHeaderElement.classList.add("main__sidebar-project-header");

        // ## Header Expand Icon

        const projectExpandIcon = document.createElement("img");
        projectExpandIcon.classList.add("main__sidebar-project-header-expand");
        projectExpandIcon.src = Expand;
        projectExpandIcon.title = "Expand";
        projectHeaderElement.appendChild(projectExpandIcon);

        // ## Header Title

        const projectTitleElement = document.createElement("h2");
        projectTitleElement.classList.add("main__sidebar-project-header-title");
        projectTitleElement.textContent = this.title;
        projectHeaderElement.appendChild(projectTitleElement);
        
        // ## Header Edit Icon

        const projectEditIcon = document.createElement("img");
        projectEditIcon.classList.add("main__sidebar-project-header-edit");
        projectEditIcon.src = Edit;
        projectEditIcon.title = "Edit";
        projectHeaderElement.appendChild(projectEditIcon);

        // ## Header Remove Icon

        const projectRemoveIcon = document.createElement("img");
        projectRemoveIcon.classList.add("main__sidebar-project-header-remove");
        projectRemoveIcon.src = Remove;
        projectRemoveIcon.title = "Remove";
        projectHeaderElement.appendChild(projectRemoveIcon);

        // # Body

        const projectBodyElement = document.createElement("div");
        projectBodyElement.classList.add("main__sidebar-project-body")

        // ## Body Title

        const projectBodyTitle = document.createElement("h4");
        projectBodyTitle.classList.add("main__sidebar-project-body-title");
        projectBodyTitle.textContent = "Description";
        projectBodyElement.appendChild(projectBodyTitle);

        // ## Body Description

        const projectBodyDescription = document.createElement("p");
        projectBodyDescription.classList.add("main__sidebar-project-body-description");
        projectBodyDescription.textContent = this.description;
        projectBodyElement.appendChild(projectBodyDescription);


        projectElement.appendChild(projectHeaderElement);
        projectElement.appendChild(projectBodyElement);
        this.HTMLElement = projectElement;
        return projectElement;
    }

    toggleExpansion() {
        this.isExpanded = !this.isExpanded;
    }
}
