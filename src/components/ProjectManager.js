import { Project } from "./Project";
import Add from "../public/add-white.svg";

export class ProjectManager {

    constructor() {
        this.projects = [];
    }

    constructElement() {

        const projectManager = document.createElement('div');
        projectManager.classList.add('main__sidebar-project-manager');

        const projectManagerHeader = document.createElement('div');
        projectManagerHeader.classList.add('main__sidebar-project-manager-header');
        const projectManagerTitle = document.createElement('h1');
        projectManagerTitle.classList.add('main__sidebar-project-manager-title');
        projectManagerTitle.textContent = 'Projects';
        const projectAddIcon = document.createElement('img');
        projectAddIcon.classList.add('main__sidebar-project-add');
        projectAddIcon.src = Add;
        projectManagerHeader.appendChild(projectManagerTitle);
        projectManagerHeader.appendChild(projectAddIcon);

        const projectManagerProjects = document.createElement('div');
        projectManagerProjects.classList.add('main__sidebar-project-list');
        this.projects.forEach(project => {
            const projectElement = project.constructElement();
            projectManagerProjects.appendChild(projectElement);
        })

        projectManager.appendChild(projectManagerHeader);
        projectManager.appendChild(projectManagerProjects);
        return projectManager;

    }

    addProject(projectToAdd) {

        this.projects.push(projectToAdd);

    }

    editProject(projectID, newProjectData) {

        const projectToEdit = this.projects.find(project => project.id === projectID);
        projectToEdit.title = newProjectData.title;
        projectToEdit.description = newProjectData.description;

    }
    
    removeProject(projectID) {

        const i = this.projects.findIndex(project => project.id === projectID);
        if (this.currentProject === this.projects[i]) this.currentProject = null;
        this.projects.splice(i , 1);

    }

}