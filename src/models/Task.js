import { Section } from "./Section.js";
import { Session } from "./Session.js";

export class Task {
    constructor({name, sections, sessions = []}) {
        this.name = name;
        this.sections = [];
        sections.forEach(section => this.sections.push(new Section(section)));
        this.sessions = [];
        sessions.forEach(session => this.sessions.push(new Session(session)));

        this.duration = 0;
        sections.forEach(section => this.duration += Number(section.duration));
    }

    calculateStats(session) {
        for(let i = 0; i < this.sections.length; i++) {
            if(this.sessions.length > 1) {
                this.sections[i].timeSpent += session.sections[i].timeTaken();
                this.sections[i].averageTimeTaken = Math.floor(this.sections[i].timeSpent/this.sessions.length);
            } else {
                this.sections[i].timeSpent = session.sections[i].timeTaken();
                this.sections[i].averageTimeTaken = this.sections[i].timeSpent;
            }
               
        }
    }

    addSession(session) {
        this.sessions.push(session);
        this.calculateStats(session);
    } 
};