import { isToday, parseISO, isBefore } from 'date-fns';
import { allTodo } from './addsubmitclose';
import { saveData } from './localstorage';
import { updateAllTaskSidebarNumber } from './htmlchange';
import { projects } from './project';
import { sidebarProjectsHTML } from './htmlchange';

function getTasksDueToday() {
    return allTodo.filter(task => isToday(parseISO(task.dueDate)));
}

function getTasksOverdue() {
    const today = new Date();
    return allTodo.filter(task => isBefore(parseISO(task.dueDate), today) && !isToday(parseISO(task.dueDate)));
}

export let todaystatus = false;
export let overduestatus = false;
export function displayTasksDueToday() {
    todaystatus = true;
    overduestatus = false;
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

export function displayTasksOverdue() {
    overduestatus = true;
    const tasksOverdue = getTasksOverdue();
    const today = new Date();

    const taskContainer = document.querySelector('.taskcontainer');
    taskContainer.innerHTML = '';
    document.querySelector("#projectname").innerHTML= "Overdue"

    tasksOverdue.forEach(task => {
        const dueDate = parseISO(task.dueDate);
        if (isBefore(dueDate, today) && !isToday(dueDate)) {
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
            deleteButton.addEventListener('click', () => deleteOverdueTask(task.title, task.dueDate));
        }
    });

    var newLine = document.createElement("div");
    newLine.classList.add("line");
    taskContainer.appendChild(newLine);
}

function deleteTask(name, dueDate) {
    allTodo = allTodo.filter(task => !(task.title === name && task.dueDate === dueDate));
    saveData();
    displayTasksDueToday();
    sidebarDueToday();
    sidebarOverdue();
    updateAllTaskSidebarNumber();
    sidebarProjectsHTML();
}

function deleteOverdueTask(title, dueDate) {

    for (let i = 0; i < allTodo.length; i++) {
        if (allTodo[i].title === title && allTodo[i].dueDate === dueDate) {
            allTodo.splice(i, 1);
            break;
        }
    }

    for (let i = 0; i < projects.length; i++) {
        for (let j = 0; j < projects[i].todoList.length; j++) {
            if (projects[i].todoList[j].title === title && projects[i].todoList[j].dueDate === dueDate) {
                projects[i].todoList.splice(j, 1);
                break;
            }
        }
    }
    saveData();
    displayTasksOverdue();
    sidebarOverdue();
    updateAllTaskSidebarNumber();
    sidebarProjectsHTML();
    
}

export function sidebarDueToday() {
    document.querySelector("#todaynumber").innerHTML = getTasksDueToday().length;
}

export function sidebarOverdue() {
    document.querySelector("#overduenumber").innerHTML = getTasksOverdue().length;
}