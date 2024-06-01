import './styles.css';
import { addTaskE, removeTask, allTodo } from './addsubmitclose';
import { addProjectDOM } from './addproject';
import { sideBarDOM } from './sidebarDOM';
import { loadData, resetData } from './localstorage';
import { sidebarProjectsHTML, changeAllTasksHTML } from './htmlchange';

document.addEventListener("DOMContentLoaded", function() {
    loadData();
    addTaskE();
    addProjectDOM();
    sideBarDOM();
    sidebarProjectsHTML();
    changeAllTasksHTML();
    resetData();
    
});


