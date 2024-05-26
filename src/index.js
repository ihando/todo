import './styles.css';
import { createTodo } from "./maketodo";
import { createProject } from "./project";
import { addTaskSubmit } from './addsubmitclose';

function createAllTasks() {
    allTasks = createProject();
}
addTaskSubmit();