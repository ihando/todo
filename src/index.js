import './styles.css';
import { createTodo } from "./maketodo";
import { createProject } from "./project";
import { addTaskE, removeTask, allTodo } from './addsubmitclose';
import { addProjectDOM } from './addproject';
import { hoverSidebarHTML } from './htmlchange';
import { sideBarDOM } from './sidebarDOM';

document.addEventListener("DOMContentLoaded", function() {
    let allTasks = createProject("all");
    addTaskE();
    addProjectDOM();
    sideBarDOM();
});


