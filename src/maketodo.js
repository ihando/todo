import { projects, createProject } from "./project";

export function createTodo(title, description, dueDate, priority, projectName){

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
    //adds todo to its corresponding project's todo array
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name === projectName) {
            projects[i].addTodo(todo)
        } 
    }
    return todo;
}
