export function createTodo(title, description, dueDate, priority){
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        complete: false,
        markComplete: function() {
            this.complete = true;
        },
        changePriority: function(newPriority) {
            this.priority = newPriority;
        }
    }
}