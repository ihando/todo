import { changeAllTasksHTML } from "./htmlchange"
export function sideBarDOM() {
    allTaskSidebar();
}

function allTaskSidebar() {
    document.querySelector(".alltasks").addEventListener("click", changeAllTasksHTML)
}