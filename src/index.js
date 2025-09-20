import { TodoApp } from "./components/TodoApp";
import { Task } from "./components/Task";

import "./styles/main.css";
import "./styles/sidebar.css";
import "./styles/normalize.css";
import "./styles/content.css";
import "./styles/task-form.css";
import "./styles/project-manager.css";
import "./styles/project-form.css";
import "./styles/project.css";
import "./styles/task.css";
import "./styles/project-manager-header.css";
import "./styles/task-manager-header.css";
import "./styles/task-manager.css";

const main = document.querySelector('.main');

const todoApp = new TodoApp(main);

const taskData1 = {
    title: "yo",
}

const task1 = new Task(taskData1);

todoApp.projectManager.currentProject.taskManager.addTask(task1);

todoApp.update();


