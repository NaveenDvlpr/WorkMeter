import { updateState } from "../main.js";
import { Session } from "../models/Session.js";

let time = 0;

const displayTime = () => {
    let res = "";
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    if(minutes < 10) res += '0';
    res += `${minutes}:`;
    if(seconds < 10) res += '0';
    res += `${seconds}`;
    return res;
}

const displayTimer  = (timerDisplay, duration) => {
    return setInterval(() => {
        timerDisplay.innerText = `${duration}/${displayTime()}`;
        time++;
    }, 1000);
}

export const activateTask = (task, sessionName, recents) => {
    const previousSection = document.getElementById("previousSection");
    const currentSection = document.getElementById("currentSection");
    const sectionName = document.getElementById("sectionName");
    const timerDisplay = document.getElementById("timerDisplay");
    const controlPlay = document.getElementById("controlPlay");
    const controlNext = document.getElementById("controlNext");
    const nextSection = document.getElementById("nextSection");

    let atSection = 0, timerId, session = new Session(sessionName, task.name);
    session.startSession();

    function displaySections() {
            if(atSection == 0) previousSection.innerText = ".......";
            else previousSection.innerText = task.sections[atSection-1].name;

            if(atSection == task.sections.length-1) nextSection.innerText="......";
            else nextSection.innerText = task.sections[atSection+1].name;

            sectionName.innerText = task.sections[atSection].name;
            timerId = displayTimer(timerDisplay, task.sections[atSection].duration);
        }

    displaySections();
    controlNext.addEventListener("click", (e) => {
        e.preventDefault();
        session.timings.push(time);
        time = 0;
        if(controlNext.innerText == "Next") {
            if(atSection == task.sections.length-2) controlNext.innerText = "Finish";
            clearInterval(timerId);
            atSection++;
            controlPlay.innerText = "Play";
            displaySections();
        } else {
            session.endSession();
            task.sessions.push(session);
            recents.push(session);
            updateState((state) => {
                state.view = "task";
            })
        }
    })

    controlPlay.addEventListener("click", (e) => {
        e.preventDefault();
        if(controlPlay.innerText == "Pause") {
            clearInterval(timerId);
            controlPlay.innerText = "Resume";
        } else {
            timerId = displayTimer(timerDisplay, task.sections[atSection].duration);
            controlPlay.innerText = "Pause";
        }
    })
}