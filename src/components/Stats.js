import { TaskStats } from "./TaskStats.js";

export const Stats = (tasks) => {
    let res = "";
    tasks.forEach((task) => res += TaskStats(task));
    if(res == "") res = "<div>Add some tasks to start fun</di>";
    return `<div class="recents">${res}</div>`;
}