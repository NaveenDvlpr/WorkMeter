export class Task {
    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
        this.sessions = [];

        this.duration = 0;
        sections.forEach(section => this.duration += section.duration);
    }

    calculateStats(session) {
        for(let i = 0; i < this.sections.length; i++) {
            if(this.sessions.length > 1) {
                this.sections[i].timeTaken += session.sections[i].timeTaken();
                this.sections[i].averageTimeTaken = Math.floor(this.sections[i].timeTaken/this.sessions.length);
            } else {
                this.sections[i].timeTaken = session.sections[i].timeTaken();
                this.sections[i].averageTimeTaken = this.sections[i].timeTaken;
            }
               
        }
    }

    addSession(session) {
        this.sessions.push(session);
        this.calculateStats(session);
    } 
};