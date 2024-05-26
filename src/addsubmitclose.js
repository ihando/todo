function addTaskSubmit() {
    document.querySelector(".taskform").addEventListener("submit", e => {
        e.preventDefault();
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
        <input type="text" id="name" name="name" placeholder="Task name (required)" required><br>

        <label for="date"></label>
        <input type="date" id="date" name="date" required><br>

        <select name="prio" id="prio">
            <option value="none" selected>No priority</option>
            <option value="low">Low priority</option>
            <option value="mid">Medium priority</option>
            <option value="high">High priority</option>
        </select><br>

        <select name="tasks" id="tasks">
            <option value="all">Tasks</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
        </select>

        <label for="descrip"></label>
        <input type="text" id="descrip" name="descrip" placeholder="Notes (optional)">

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
export function addTask() {
    document.querySelector(".taskbutton").addEventListener("click", addTaskForm);
}
function removeTask() {
    document.querySelector(".close").addEventListener("click", removeTaskForm)
}