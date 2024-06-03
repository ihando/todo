import './styles.css';
import { addTaskE, removeTask, allTodo } from './addsubmitclose';
import { addProjectDOM } from './addproject';
import { sideBarDOM } from './sidebarDOM';
import { loadData, resetData } from './localstorage';
import { sidebarProjectsHTML, changeAllTasksHTML, updateAllTaskSidebarNumber } from './htmlchange';
import { sidebarDueToday, sidebarOverdue } from './dates';

document.addEventListener("DOMContentLoaded", function() {
    loadData();
    addTaskE();
    addProjectDOM();
    sideBarDOM();
    sidebarProjectsHTML();
    changeAllTasksHTML();
    updateAllTaskSidebarNumber();
    sidebarDueToday();
    sidebarOverdue();
    clickColor();
    resetData();
    
});

function clickColor() {
    const divs = document.querySelectorAll('.hoverback');
    let currentDiv = null;
    divs.forEach(div => {
        div.addEventListener('click', () => {
            if (currentDiv) {
                currentDiv.style.backgroundColor = '';
            }
            
            div.style.backgroundColor = '#93A3CA'; 
            currentDiv = div;
        });
    })
}