import { allTodo } from "./addsubmitclose"
import { projects } from "./project";


export function changeAllTasksHTML() {
    resetAllTasksHTML();
    for (let i = 0; i < allTodo.length; i++) {
        let tempProject;
        let status = false;
        let tempName = allTodo[i].title;
        let tempDescrip = allTodo[i].description;
        let tempDate = allTodo[i].dueDate;
        if (allTodo[i].projectName != null) {
            tempProject = allTodo[i].projectName;
            status = true;
        }
        let taskcontainer = document.querySelector(".taskcontainer");
        var newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `
            <div class="markdone"></div>
            <div class="things">
                <div class="taskname">${tempName}</div>
                <div class="description">${tempDescrip}</div>
                <div class="date">${tempDate}</div>
            </div>
        `;
        taskcontainer.appendChild(newTask);

        let thingsDiv = newTask.querySelector(".things");

        if (status) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = tempProject;
            newDiv.classList.add("projectName");
            thingsDiv.appendChild(newDiv); 
        }
        var newLine = document.createElement("div");
        newLine.classList.add("line");
        taskcontainer.appendChild(newLine);
    }
}

function resetAllTasksHTML() {
    let taskcontainer = document.querySelector(".taskcontainer")
    taskcontainer.innerHTML = "";
}

export function sidebarProjectsHTML() {
    resetSidebarProjectsHTML();
    for (let i=0; i<projects.length; i++) {
        let taskNumber = projects[i].todoList.length;
        let name = projects[i].name
        let projectContainer = document.querySelector(".myprojects")
        let newProject = document.createElement("div");
        newProject.classList.add("one")
        newProject.classList.add("project")
        newProject.innerHTML = `
            <button class="text">${name}</button>
            <div class="number">${taskNumber}</div>
        `;
        projectContainer.appendChild(newProject);
    }
}

function resetSidebarProjectsHTML() {
    let projectContainer = document.querySelector(".myprojects");
    projectContainer.innerHTML = "";
}