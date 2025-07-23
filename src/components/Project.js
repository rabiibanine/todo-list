export class Project {

    constructor(title, description) {

        this.title = title;
        this.description = description;

    }

    constructElement() {

        const project = document.createElement('div');
        project.classList.add('main__sidebar-project');
        project.textContent = project.title;
        return project;

    }

}