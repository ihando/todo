import { createTodo } from "./maketodo";
import { projects } from "./project";


export let allTodo = [];

//codes the submit button for the add task form
function addTaskSubmit() {
    document.querySelector(".taskform").addEventListener("submit", e => {
        e.preventDefault();
        let status = true;
        let project = null;
        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const prio = document.getElementById("prio").value;
        let projectName = document.getElementById("projects").value;
        //if all tasks dropdown is selected, set the projectName to null (not apart of any project)
        if (projectName === "saumyazaumya") {
            projectName = null;
        }
        const description = document.getElementById("descrip").value;

        //Looks for the matching project and checks if a todo with the same name exists
        for (let i=0; i<projects.length; i++) {
            if (projectName === projects[i].name){
                project = projects[i];
                for (let j=0; j<project.todoList.length; j++) {
                    if (name === project.todoList[i].title){
                        status = false;
                    }
                }
                break;
            }
        }
        //checks to make sure the form submission todo name doesnt match other todos for only todos with no project (allTodo)
        for (let i=0; i<allTodo.length; i++){
            if (allTodo[i].projectName === null) {
                if (name === allTodo[i].title) {
                    status = false;
                }
            }
        }
        //runs if the two checks above pass
        if (status) {
            let tempTodo = createTodo(name, description, date, prio, projectName);
            allTodo.push(tempTodo);
        }
        document.querySelector(".taskform").reset();
        removeTaskForm();
    }, {once: true})
}
let task = true;
function switchTaskStatus(){
    task = !task;
}
function addTaskForm() {
    if (task) {
        var form = document.createElement("form");
        form.classList.add("taskform");
        form.innerHTML = `
        <label for="name"></label>
        <input type="text" id="name" name="name" placeholder="Task name (required)" required autocomplete="off"><br>

        <label for="date"></label>
        <input type="date" id="date" name="date" required autocomplete="off"><br>

        <label for="prio"></label>
        <select name="prio" id="prio" autocomplete="off">
            <option value="none" selected>No priority</option>
            <option value="low">Low priority</option>
            <option value="mid">Medium priority</option>
            <option value="high">High priority</option>
        </select><br>

        <label for="projects"></label>
        <select name="projects" id="projects" autocomplete="off">
            <option value="saumyazaumya">Tasks</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
        </select>

        <label for="descrip"></label>
        <input type="text" id="descrip" name="descrip" placeholder="Notes (optional)" autocomplete="off" maxlength="20">

        <button type="button" class="button close">Close</button>
        <button type="submit" class="button submitButton">Submit</button>
        `
        document.querySelector(".onetwo").appendChild(form);
        switchTaskStatus();
        addTaskSubmit();
        removeTask();
    }
}

function removeTaskForm() {
    if (!task) {
        var form = document.querySelector(".taskform")
        document.querySelector(".onetwo").removeChild(form);
        form.innerHTML = "";
        form.classList.remove("taskform");
        switchTaskStatus();
    }
}

function removeTask() {
    document.querySelector(".close").addEventListener("click", removeTaskForm)
}

export function addTaskE() {
    document.querySelector(".taskbutton").addEventListener("click", addTaskForm);
}
