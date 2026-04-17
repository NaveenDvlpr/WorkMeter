export class Section {
    constructor(name, duration) {
        this.name = name;
        this.duration = duration;
        this.startTime = null;
        this.endTime = null;
    }

    startSection() {
        this.startTime = Date.now();
    }

    endSection() {
        this.endTime = Date.now();
    }
}