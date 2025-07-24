import { TodoApp } from "./components/TodoApp";
import { Task } from "./components/Task";

import "./styles/main.css";
import "./styles/sidebar.css";
import "./styles/normalize.css";
import "./styles/content.css";

const main = document.querySelector('.main');

const todoApp = new TodoApp(main);

const task1 = new Task('yo', 'this', 'a task', 3);

todoApp.projectManager.currentProject.taskManager.addTask(task1);

todoApp.update();


