export function createProject() {
    let list = [];
    return {
        list,
        addTodo: function(todo){
            list.push(todo);
        },
        removeTodo: function(index){
            list.splice(index, 1);
        }
    }
}


