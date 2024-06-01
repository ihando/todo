import { isToday, parseISO } from 'date-fns';
import { allTodo } from './addsubmitclose';
import { saveData } from './localstorage';
import { updateAllTaskSidebarNumber } from './htmlchange';

function getTasksDueToday() {
    return allTodo.filter(task => isToday(parseISO(task.dueDate)));
}
export let todaystatus = false;
export function displayTasksDueToday() {
    todaystatus = true;
    const tasksDueToday = getTasksDueToday();
    const taskContainer = document.querySelector('.taskcontainer');
    taskContainer.innerHTML = ''; 
    document.querySelector("#projectname").innerHTML= "Today"

    tasksDueToday.forEach(task => {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `
            <div class="markdone"></div>
            <div class="things">
                <div class="taskname">${task.title}</div>
                <div class="description">${task.description}</div>
                <div class="date">${task.dueDate}</div>
            </div>
        `;
        taskContainer.appendChild(newTask);

        const deleteButton = newTask.querySelector('.markdone');
        deleteButton.addEventListener('click', () => deleteTask(task.title, task.dueDate));

        var newLine = document.createElement("div");
        newLine.classList.add("line");
        taskContainer.appendChild(newLine);
    });
}


function deleteTask(name, dueDate) {
    allTodo = allTodo.filter(task => !(task.title === name && task.dueDate === dueDate));
    saveData();
    displayTasksDueToday();
    sidebarDueToday();
    updateAllTaskSidebarNumber();
}

export function sidebarDueToday() {
    document.querySelector("#todaynumber").innerHTML = getTasksDueToday().length;
}