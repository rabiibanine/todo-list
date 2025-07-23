export class TodoApp {

    constructor(root, projectManager, taskManager) {

        this.root = root;
        this.projectManager = projectManager;
        this.taskManager = taskManager;
        this.sidebar = document.createElement('div');
        this.content = document.createElement('div');
        this.sidebar.classList.add('main__sidebar');
        this.content.classList.add('main__content');

    }

    update() {

        this.sidebar.innerHTML = '';
        this.content.innerHTML = '';
        this.sidebar.appendChild(this.projectManager.constructElement());
        this.content.appendChild(this.taskManager.constructElement());
        this.root.appendChild(this.sidebar);
        this.root.appendChild(this.content);
        this.cacheDOM();

    }

    cacheDOM() {

        console.log(this.projectManager);

    }
    
}
