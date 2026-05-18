import { updateState } from "../main.js";
import { Session } from "../models/Session.js";
import { Section } from "../models/Section.js";

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

    let atSection = 0, timerId, session = new Session(sessionName, task.name, task.duration);
    session.startSession();
    session.addSections(task.sections);

    if(task.sections.length == 1) controlNext.innerText="Finish";


    function displaySections() {
            if(atSection == 0) previousSection.innerText = ".......";
            else previousSection.innerText = session.sections[atSection-1].name;

            if(atSection == session.sections.length-1) nextSection.innerText="......";
            else nextSection.innerText = session.sections[atSection+1].name;
            sectionName.innerText = session.sections[atSection].name;
            timerId = displayTimer(timerDisplay, session.sections[atSection].duration);
            session.sections[atSection].startSection();
        }

    displaySections();
    session.sections[atSection].startSection();
    controlNext.addEventListener("click", () => {
        session.sections[atSection].endSection();
        clearInterval(timerId);
        time = 0;
        if(controlNext.innerText == "Next") {
            if(atSection == session.sections.length-2) controlNext.innerText = "Finish";
            atSection++;
            controlPlay.innerText = "Play";
            displaySections();
        } else {
            session.endSession();
            session
            task.sessions.push(session);
            recents.push(session);
            updateState((state) => {
                state.view = "task";
            })
        }
    })

    controlPlay.addEventListener("click", () => {
        if(controlPlay.innerText == "Pause") {
            clearInterval(timerId);
            controlPlay.innerText = "Resume";
        } else {
            timerId = displayTimer(timerDisplay, task.sections[atSection].duration);
            controlPlay.innerText = "Pause";
        }
    })
}