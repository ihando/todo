export let projects = [];

export function createProject(name) {
    const todoList = [];
    let projectName;
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name === name) {
            return null;
        }
    }
    projectName = name;
    const project = {
        todoList,
        name: projectName,
        addTodo: function(todo) {
            todoList.push(todo);
        },
        removeTodo: function(todoName) {
            for (let i=0; i<todoList.length; i++) {
                if (todoList[i].name === todoName) {
                    todoList.splice(i, 1);
                } 
            }
        }
    };
    projects.push(project);
    return project;
}

export function removeProject(name){
    if (projects[name]){
        projects[name].todoList = [];
        delete projects[name];
    }
}



