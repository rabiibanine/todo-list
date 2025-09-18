import { Project } from "./Project";

export class ProjectManager {

    constructor() {

        const projectData1 = {
            title: 'Default',
            description: 'project1 Description',
        }
        const project1 = new Project(projectData1);
        this.projects = [project1];
        this.currentProject = this.projects[0];

    }

    constructElement() {

        const projectManager = document.createElement('div');
        projectManager.classList.add('main__sidebar-project-manager');
        const projectManagerTitle = document.createElement('h1');
        projectManagerTitle.classList.add('main__sidebar-project-manager-title');
        projectManagerTitle.textContent = 'Projects';
        const projectAddButton = document.createElement('button');
        projectAddButton.classList.add('main__sidebar-project-add');
        projectAddButton.textContent = 'Add Project';
        const projectManagerProjects = document.createElement('ul');
        projectManagerProjects.classList.add('main__sidebar-project-list');

        this.projects.forEach(project => {
            const projectElement = project.constructElement();
            projectManagerProjects.appendChild(projectElement);
        })
        projectManager.appendChild(projectManagerTitle);
        projectManager.appendChild(projectAddButton);
        projectManager.appendChild(projectManagerProjects);
        return projectManager;

    }

    addProject(projectToAdd) {

        this.projects.push(projectToAdd);

    }
    
    removeProject(projectId) {

        const i = this.projects.findIndex(project => project.id === projectId);
        const projectToRemove = this.projects.find(project => project.id === projectId); 
        if (projectToRemove === this.currentProject) this.currentProject = null;
        this.projects.splice(i , 1);

    }

}