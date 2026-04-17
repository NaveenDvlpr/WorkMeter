import { updateState } from "../main.js";

const TaskStats = (name, index) => {
    return `<h1>${name}</h1>
    <button class="goToTask" value = ${index}>Go to task</button>`;
}

export const Find = (tasks) => {
    let res = "";
    for(let i = 0; i < tasks.length; i++) res += TaskStats(tasks[i].name, i);
    if(res == "") res = "<h1>Add some tasks to start fun</h1>";
    return `<div>${res}</div>`;
}