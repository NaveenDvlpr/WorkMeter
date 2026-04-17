export class Task {
    constructor(name, sections) {
        this.name = name;
        this.sections = sections;
        this.sessions = [];
    }

    addSession(session) {
        this.sessions.push(session);
    }
};