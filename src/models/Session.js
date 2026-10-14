import { Section } from "./Section.js";


export class Session {
    constructor({name, taskName, duration, sections, startTime = null, endTime = null}) {
        this.name = name;
        this.taskName = taskName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.sections = [];
        sections.forEach(section => this.sections.push(new Section(section)));
    }

    startSession() {
        this.startTime = Date.now();
    }

    endSession() {
        this.endTime = Date.now();
    }

    timeTaken() {
        return Math.floor((this.endTime-this.startTime)/1000);
    }    

    getDuration() {
        return this.duration;
    }

}