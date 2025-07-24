export class Project {

    constructor(title, description) {

        this.title = title;
        this.description = description;
        this.id = crypto.randomUUID();

    }

    constructElement() {
        
        const projectElement = document.createElement('li');
        projectElement.classList.add('main__sidebar-project');
        const projectTitleElement = document.createElement('h2');
        projectTitleElement.classList.add('main__content-project-title');
        projectTitleElement.textContent = this.title;
        projectElement.appendChild(projectTitleElement);
        return projectElement;

    }

}