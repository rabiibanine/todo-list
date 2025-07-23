import { Project } from "./Project";

export class ProjectManager {

    constructor() {

        this.projects = [
            new Project("Default", "Default Project")
        ];

    }

    constructElement() {

        const projectManager = document.createElement('div');
        const projectManagerTitle = document.createElement('h1');
        const projectManagerProjects = document.createElement('ul');
        projectManager.classList.add('main__sidebar-project-manager');
        projectManagerTitle.classList.add('main__sidebar-project-manager-title');
        projectManagerProjects.classList.add('main__sidebar-project-list');
        projectManagerTitle.textContent = 'Projects';
        this.projects.forEach(project => {
            const projectElement = document.createElement('li');
            projectElement.classList.add('main__sidebar-project');
            const projectTitleElement = document.createElement('h2');
            projectTitleElement.classList.add('main__content-project-title');
            projectTitleElement.textContent = project.title;
            projectElement.appendChild(projectTitleElement);
            projectManagerProjects.appendChild(projectElement);
        })
        projectManager.appendChild(projectManagerTitle);
        projectManager.appendChild(projectManagerProjects)
        return projectManager;

    }

    addProject(project) {

        this.projects.push(project);

    }

}