import { TodoApp } from "./components/TodoApp";
import { Task } from "./components/Task";

import "./styles/variables.css";
import "./styles/normalize.css";
import "./styles/main.css";
import "./styles/sidebar.css";
import "./styles/content.css";
import "./styles/project-manager.css";
import "./styles/project.css";
import "./styles/task.css";
import "./styles/task-manager.css";
import "./styles/form.css";

const main = document.querySelector(".main");

const todoApp = new TodoApp(main);
