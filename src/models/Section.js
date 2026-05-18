export class Section {
    constructor(name, duration) {
        this.name = name;
        this.duration = Number(duration);
        this.startTime = null;
        this.endTime = null;
    }

    startSection() {
        this.startTime = Date.now();
    }

    endSection() {
        this.endTime = Date.now();
    }

    timeTaken() {
        return Math.floor((this.endTime-this.startTime)/1000);
    }
}