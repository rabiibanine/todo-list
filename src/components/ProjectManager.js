import { Project } from "./Project";

export class ProjectManager {

    constructor() {

        this.projects = [new Project('project1', 'project1 description')];
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

    addProject(projectToAdd) {

        this.projects.push(projectToAdd);

    }
    
    removeProject(projectId) {

        const i = this.projects.findIndex(project => project.id === projectId);
        this.projects.splice(i , 1);

    }

}