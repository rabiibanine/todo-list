import { TodoApp } from "./components/TodoApp";
import { Task } from "./components/Task"
import { Project } from "./components/Project";
import { ProjectManager } from "./components/ProjectManager";
import { TaskManager } from "./components/TaskManager";

import "./styles/main.css";
import "./styles/sidebar.css";
import "./styles/normalize.css";
import "./styles/content.css";

const main = document.querySelector('.main');

const projectManager = new ProjectManager();

const taskManager = new TaskManager();

const todoApp = new TodoApp(main, projectManager, taskManager);

todoApp.update();

const task1 = new Task("cool task", "cool task description", "tomorrow", 3);

taskManager.addTask(task1);

todoApp.update();