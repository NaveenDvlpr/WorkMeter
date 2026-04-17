import { Section } from "../models/Section.js";
import { Task } from "../models/Task.js";


const createSections = (data) => {
    return [
        new Section(data.section1Name, data.section1Duration),
        new Section(data.section2Name, data.section2Duration),
        new Section(data.section3Name, data.section3Duration)
    ];
}

export const AddTask = (tasks) => {
    const form = document.getElementById("taskForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        tasks.push(new Task(data.taskName, createSections(data)));
        form.reset();
    });
}