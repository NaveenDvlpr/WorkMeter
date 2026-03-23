import {Element} from "./Element.js";

class Section {
    constructor(name, duration, startTime) {
        this.name = name;
        this.duration = duration;
        this.startTime = startTime;
    }
}

class Task {
    constructor(name, sections, startTime, status) {
        this.name = name;
        this.sections = sections;
        this.starttime = startTime;
        this.status = status;
    }
}

const state = {
    view: "home",
    tasks: []
}

const app = document.getElementById("app");
console.log(app);
app.innerHTML = Element();