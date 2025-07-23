export class ProjectView {

    constructor(project) {

        this.project = project;

    }

    getElement() {
        
        const project = document.createElement('div');
        project.classList.add('project');
        project.textContent = this.project.title;
        return project;

    }

}