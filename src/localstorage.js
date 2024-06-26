import { projects } from "./project";
import { allTodo } from "./addsubmitclose";
import { sidebarProjectsHTML, changeAllTasksHTML, updateAllTaskSidebarNumber } from "./htmlchange";
import { sidebarDueToday, sidebarOverdue } from "./dates";

export function saveData() {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('allTodo', JSON.stringify(allTodo));
}

export function loadData() {
    const projectsData = localStorage.getItem('projects');
    const allTodoData = localStorage.getItem('allTodo');
    
    if (projectsData) {
        projects = JSON.parse(projectsData);
    }
    
    if (allTodoData) {
        allTodo = JSON.parse(allTodoData);
    }
}

export function resetData() {
    document.getElementById("resetLocalStorage").addEventListener("click", () => {
        localStorage.clear();
        projects = [];
        allTodo = [];
        sidebarProjectsHTML();
        changeAllTasksHTML(); 
        updateAllTaskSidebarNumber();
        sidebarDueToday();
        sidebarOverdue();
    });
}
