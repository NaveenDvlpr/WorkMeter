import { Header } from "./components/Header.js";
import { AddTask } from "./components/AddTask.js";

class Section {
    constructor(name, duration, startTime) {
        this.name = name;
        this.duration = duration;
        this.startTime = startTime;
    }
}

class TaskList {
    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
        this.activity = [];
    }

    add(task){
        this.activity.push(task);
    }
}

const data = {
    name: "Frog Jump II",
    sections: [
        {
            sectionName: "Read",
            sectionDuration: 120
        }, {
            sectionName: "Understand",
            sectionDuration: 240
        }, {
            sectionName: "Code",
            sectionDuration: 120
        }
    ],
    startTime: 0,
    endTime: 0
}

const state = {
    view: "home",
    tasks: []
}

const app = document.getElementById("app");
console.log(app);
app.innerHTML = Header(state.view)+AddTask();
console.log(app);


const form = document.getElementById("taskForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);
});