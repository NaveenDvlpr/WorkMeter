export class Section {
    constructor({name, duration, startTime = null, endTime = null, timeSpent = 0, averageTimeTaken = 0}) {
        this.name = name;
        this.duration = duration;
        this.startTime = startTime;
        this.endTime = endTime;
        this.timeSpent = timeSpent;
        this.averageTimeTaken = averageTimeTaken;
    }

    startSection() {
        this.startTime = Date.now();
    }

    endSection() {
        this.endTime = Date.now();
    }

    timeTaken() {
        return this.timeSpent;
    }

    updateTimeSpent(time) {
        this.timeSpent += time;
    }
} 