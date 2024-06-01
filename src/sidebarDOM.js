import { changeAllTasksHTML } from "./htmlchange"
import { displayTasksDueToday, displayTasksOverdue } from "./dates";

export function sideBarDOM() {
    allTaskSidebar();
    todaySidebar();
    overdueSidebar();
}

function allTaskSidebar() {
    document.querySelector(".alltasks").addEventListener("click", changeAllTasksHTML)
}

function todaySidebar() {
    document.querySelector(".today").addEventListener("click", displayTasksDueToday)
}

function overdueSidebar() {
    document.querySelector(".overdue").addEventListener("click", displayTasksOverdue)
}