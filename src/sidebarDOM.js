import { changeAllTasksHTML } from "./htmlchange"
import { displayTasksDueToday } from "./dates";

export function sideBarDOM() {
    allTaskSidebar();
    todaySidebar();
}

function allTaskSidebar() {
    document.querySelector(".alltasks").addEventListener("click", changeAllTasksHTML)
}

function todaySidebar() {
    document.querySelector(".today").addEventListener("click", displayTasksDueToday)
}