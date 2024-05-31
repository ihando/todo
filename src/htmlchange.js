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
        newTask.setAttribute('data-project-index', i);
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
        let deletebutton = newTask.querySelector(".markdone")
        deletebutton.addEventListener("click", () => deleteTask(tempName, i));

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
        newProject.setAttribute('data-project-index', i);
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

        const deleteButton = newProject.querySelector("#deleteP");
        const renameButton = newProject.querySelector("#renameP");
        deleteButton.addEventListener('click', () => deleteProject(i));
        renameButton.addEventListener('click', () => renameProject(i));
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


function deleteProject(index) {
    projects.splice(index, 1);
    sidebarProjectsHTML(); 
}

function renameProject(index) {
    const newName = prompt("Enter the new project name:");
    if (newName) {
        projects[index].name = newName;
        sidebarProjectsHTML();
    }
}

function deleteTask(name, index) {
    if (allTodo[index].projectName != null) {
        let tempProject = allTodo[index].projectName;
        for (let i=0; i<projects.length; i++) {
            if (projects[i].name === tempProject) {
                for (let j=0; j<projects[i].todoList.length; j++) {
                    if (projects[i].todoList[j].title === name) {
                        projects[i].todoList.splice(j, 1)
                    }
                }
            }
        }
    }
    allTodo.splice(index, 1)
    changeAllTasksHTML();
    sidebarProjectsHTML();
}

