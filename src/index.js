import './styles.css';
import { createTodo } from "./maketodo";
import { createProject } from "./project";
import { addTaskE, removeTask } from './addsubmitclose';

document.addEventListener("DOMContentLoaded", function() {
    let allTasks = createProject("asdfkjasdlkjfalsdkf");
    addTaskE();
});


