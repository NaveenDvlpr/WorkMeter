export class Task {
    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
        this.sessions = [];

        this.duration = 0;
        sections.forEach(section => this.duration += section.duration);
    }

    addSession(session) {
        this.sessions.push(session);
    }
};