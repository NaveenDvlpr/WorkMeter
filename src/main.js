import { Header } from "./components/Header.js";
import { Add } from "./components/Add.js";
import { ActiveTask } from "./components/ActiveTask.js";
import { AddTask } from "./setup/AddTask.js";
import { activateTask } from "./setup/ActivatateTask.js";
import { Task } from "./models/Task.js";
import { Session } from "./models/Session.js";
import { TaskComp } from "./components/TaskComp.js";
import { setUpHeader } from "./setup/SetUpHeader.js";
import { taskSetUp } from "./setup/TaskSetUp.js";
import { Find } from "./components/Find.js";
import { findSetUp } from "./setup/FindSetUp.js";
import { Recents } from "./components/Recents.js";
import { Stats } from "./components/Stats.js";

const app = document.getElementById("app");

const saveState = () => {
    localStorage.setItem("state", JSON.stringify(state));
}

const loadState = () => {
    return JSON.parse(localStorage.getItem("state")) || {
        view: "home",
        activeTask: null,
        sessionName: null,
        tasks: [],
        recents: []
    };
}

const makeState = () => {
    const tempState = loadState();
    tempState.tasks = tempState.tasks.map(task => new Task(task));
    tempState.recents = tempState.recents.map(recent => new Session(recent));
    return tempState;
}

let state = makeState();

const render = () => {
    let view = state.view;
    app.innerHTML = Header(view);
    if(view == "home") {
        app.innerHTML += Recents(state.recents);
    } else if(view == "add") {
        app.innerHTML += Add();
    } else if(view == "active") {
        app.innerHTML += ActiveTask(state.activeTask, state.sessionName);
    } else if (view == "task") {
        app.innerHTML += TaskComp(state.activeTask);
    } else if(view == "stats") {
        app.innerHTML += Stats(state.tasks);
    } else if(view == "find") {
        app.innerHTML += Find(state.tasks);
    }

    setup();
}

const setup = () => {
    let view = state.view;
    if(view == "home") {
        
    } else if(view == "add") {
        AddTask(state.tasks);
    } else if(view == "active") {
        activateTask(state.activeTask, state.sessionName, state.recents);
    } else if (view == "task") {
        taskSetUp(state.activeTask);
    } else if(view == "stats") {
        
    } else if(view == "find") {
        findSetUp();
    }

    setUpHeader();
}


export const updateState = (updater) => {
    updater(state);
    saveState();
    render();
}

render();

window.state = state;