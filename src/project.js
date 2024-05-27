export let projects = {};

export function createProject(name) {
    const todoList = [];
    const projectId = generateUniqueId();
    const project = {
        todoList,
        name: name,
        projectId,
        addTodo: function(todo) {
            todoList.push(todo);
        },
        removeTodo: function(todoId) {
            const index = todoList.findIndex(todo => todo.todoId === todoId);
            if (index !== -1) {
                todoList.splice(index, 1);
            }
        }
    };
    projects[projectId] = project;
    return project;
}

export function removeProject(projectId){
    if (projects[projectId]){
        projects[projectId].todoList = [];
        delete projects[projectId];
    }
}
function generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 9);
}


