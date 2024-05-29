import { projects, createProject } from "./project";
import { sidebarProjectsHTML } from "./htmlchange";

let projectStatus = true;
function changeStatus() {
    projectStatus = !projectStatus;
}

function addProjectSubmit() {
    document.querySelector(".projectForm").addEventListener("submit", e => {
        e.preventDefault();
        let status = true;
        const name = document.getElementById("name").value;
        for (let i=0; i<projects.length; i++) {
            if (projects[i].name === name) {
                status = false;
                console.log("hi")
            }
        }
        if (status) {
            let tempProject = createProject(name);
            projects.push(tempProject);
        }
        document.querySelector(".projectForm").reset();
        removeProjectForm();
        sidebarProjectsHTML();
    }, {once: true})
}

function addProjectForm() {
    if (projectStatus) {
        var form = document.createElement("form");
        form.classList.add("projectForm");
        form.innerHTML = `
        <button type="button" class="closeProject">XXXXXXXXXX</button>
        <label for="name"></label>
        <input type="text" id="name" name="name" placeholder="Project name + [Enter]" required autocomplete="off">
        <button type="submit" style="display:none"></button>
        `
        document.querySelector(".sidebar").appendChild(form);
        changeStatus();
        addProjectSubmit();
        removeProjectFormDOM();
    }
}

function removeProjectForm() {
    if (!projectStatus) {
        var form = document.querySelector(".projectForm")
        document.querySelector(".sidebar").removeChild(form);
        form.innerHTML = "";
        form.classList.remove("projectForm");
        changeStatus();
    }
}

function removeProjectFormDOM() {
    document.querySelector(".closeProject").addEventListener("click", removeProjectForm)
}

export function addProjectDOM() {
    document.querySelector(".create").addEventListener("click", addProjectForm);
}

