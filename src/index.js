import './styles.css';
import { createTodo } from "./maketodo";
import { createProject } from "./project";
import { addTask, removeTask } from './addsubmitclose';

document.addEventListener("DOMContentLoaded", function() {
    //createAllTasks();
    addTask();
});

/*function createAllTasks() {
    allTasks = createProject();
}*/