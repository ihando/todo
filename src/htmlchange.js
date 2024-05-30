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
            <div class="text">${name}</div>
            <div class="number">${taskNumber}</div>
            <div class="hover"></div>
            <div class="popup">
                <button class="projectButton" id="deleteP">Delete</button>
                <button class="projectButton" id="renameP">Rename</button>
            </div>
        `;
        projectContainer.appendChild(newProject);
        const hoverButton = newProject.querySelector(".hover");
        const popup = newProject.querySelector(".popup");
        hoverSidebarHTML(hoverButton, popup);
    }
}

function resetSidebarProjectsHTML() {
    let projectContainer = document.querySelector(".myprojects");
    projectContainer.innerHTML = "";
}

export function hoverSidebarHTML(hoverButton, popup) {
    
    hoverButton.addEventListener("click", (event) => {
        event.stopPropagation();
        document.querySelectorAll(".popup").forEach(p => {
            p.style.display = 'none';
        });
        popup.style.display = 'block';
    });
    

    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target) && !hoverButton.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
}