import { projects, createProject } from "./project";
import { sidebarProjectsHTML } from "./htmlchange";
import { saveData } from "./localstorage";

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
            }
        }
        if (status) {
            let tempProject = createProject(name);
            projects.push(tempProject);
            saveData();
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
        <div class = "text">
            <button type="button" class="closeProject pointer">X</button>
        </div>
        <label for="name"></label>
        <input type="text" id="name" class = "projectbox" name="name" placeholder="Project name + [Enter]" required autocomplete="off">
        <button type="submit" style="display:none"></button>
        `
        document.querySelector(".poop").appendChild(form);
        changeStatus();
        addProjectSubmit();
        removeProjectFormDOM();
    }
}

function removeProjectForm() {
    if (!projectStatus) {
        var form = document.querySelector(".projectForm")
        document.querySelector(".poop").removeChild(form);
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

