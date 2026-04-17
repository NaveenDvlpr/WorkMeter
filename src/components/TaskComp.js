import { SessionComp } from "./SessionComp.js";

const displaySessions = (sessions) => {
    let res = "";
    sessions.forEach((session) => res += SessionComp(session));
    return res;
}

export const TaskComp = (task) => {
    return `<h1>${task.name}</h1>
    <input type="text" id="sessionNameInput" placeHolder="Enter Session Name">
    <button id = "startSession">Start Session</button>
    <p>Number of sessions: ${task.sessions.length}</p>
    ${displaySessions(task.sessions)}`;

}