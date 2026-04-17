import { Header } from "./components/Header.js";
import { Add } from "./components/Add.js";
import { ActiveTask } from "./components/ActiveTask.js";
import { AddTask } from "./setup/AddTask.js";
import { activateTask } from "./setup/ActivatateTask.js";
import { Task } from "./models/Task.js";
import { Section } from "./models/Section.js";
import { TaskComp } from "./components/TaskComp.js";
import { setUpHeader } from "./setup/SetUpHeader.js";
import { taskSetUp } from "./setup/TaskSetUp.js";
import { Find } from "./components/Find.js";
import { findSetUp } from "./setup/FindSetUp.js";
import { Recents } from "./components/Recents.js";

const state = {
    view: "home",
    activeTask: null,
    sessionName: null,
    tasks: [],
    recents: []
}

const app = document.getElementById("app");


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
    render();
}

render();

window.state = state;