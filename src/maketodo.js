export function createTodo(title, description, dueDate, priority, project){
    const todoId = generateUniqueIdTodo();
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        complete: false,
        project: project,
        todoId: todoId,
        markComplete: function() {
            this.complete = true;
        },
        changePriority: function(newPriority) {
            this.priority = newPriority;
        }
    }
}

function generateUniqueIdTodo() {
    return '_' + Math.random().toString(36).substring(2, 9);
}