import { Section } from "./Section.js";


export class Session {
    constructor(name, taskName, duration) {
        this.name = name;
        this.taskName = taskName;
        this.startTime = null;
        this.endTime = null;
        this.sections = [];
        this.duration = duration;
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

    addSections(sections) {
        sections.forEach(section => this.sections.push(new Section(section.name, section.duration)));
    }


}