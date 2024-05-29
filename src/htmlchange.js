import { allTodo } from "./addsubmitclose"


export function changeAllTasksHTML() {
    resetAllTasksHTML();
    for (let i = 0; i < allTodo.length; i++) {
        let status = false;
        let tempName = allTodo[i].title;
        let tempDescrip = allTodo[i].description;
        let tempDate = allTodo[i].dueDate;
        if (allTodo[i].projectName != null) {
            let tempProject = allTodo[i].projectName;
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