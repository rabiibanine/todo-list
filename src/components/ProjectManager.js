import { Project } from "./Project";

export class ProjectManager {

    constructor() {

        this.projects = [
            new Project("Default", "Default Project")
        ];
        this.currentProject = this.projects[0];

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
            const projectElement = project.constructElement();
            projectManagerProjects.appendChild(projectElement);
        })
        projectManager.appendChild(projectManagerTitle);
        projectManager.appendChild(projectManagerProjects)
        return projectManager;

    }

    addProject(project) {

        this.projects.push(project);

    }

    setProject(project) {

        this.currentProject = project;

    }

}