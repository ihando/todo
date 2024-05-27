import { projects } from "./project";

export function createTodo(title, description, dueDate, priority, projectName){
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name === projectName) {
            return null;
        } 
    }
    return {
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
}
