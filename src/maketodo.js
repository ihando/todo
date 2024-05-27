import { projects, createProject } from "./project";

export function createTodo(title, description, dueDate, priority, projectName){
    let project = null;
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name === projectName) {
            project = projects[i];
            for (let j=0; j<project.todoList.length; j++){
                if (project.todoList[i].title === title) {
                    return null;
                }
            }
            break;
        } 
    }

    const todo = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        complete: false,
        projectName: projectName,
        markComplete: function() {
            this.complete = true;
        },
        changePriority: function(newPriority) {
            this.priority = newPriority;
        }
    }
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name === projectName) {
            projects[i].addTodo(todo)
        } 
    }
    return todo;
}
