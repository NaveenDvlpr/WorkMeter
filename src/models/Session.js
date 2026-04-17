export class Session {
    constructor(name, taskName) {
        this.name = name;
        this.taskName = taskName;
        this.startTime = null;
        this.endTime = null;
        this.timings = [];
    }

    startSession() {
        this.startTime = Date.now();
    }

    endSession() {
        this.endTime = Date.now();
    }
}