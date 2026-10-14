import { Section } from "../models/Section.js";
import { Task } from "../models/Task.js";

export const AddTask = (tasks) => {
    const taskForm = document.getElementById("taskForm");
    const sectionCount = document.getElementById("sectionCount");
    const sectionInput = document.getElementById("sectionInput");
    const sectionButton = document.getElementById("sectionButton");

    const addSection = () => {
        let index = sectionInput.childElementCount;
        const section = document.createElement("div");
        section.innerHTML = `
            <div>
            <h3>Section${index+1}</h3>
            <p>
                <label for="sectionName">Section Name</label>
                <input type="text" id="sectionName" name="section[${index}][name]" required></input>
            </p>
            <p>
                <label for="sectionDuration">Duration</label>
                <input type="number" id="sectionDuration" name="section[${index}][duration]" required>
            </p>
        </div>`;
        sectionInput.appendChild(section);
    }

    sectionCount.addEventListener("change", () => {
        let count = sectionCount.value-1;
        sectionInput.innerHTML = "";
        addSection();
        sectionButton.addEventListener("click", () => {
            if(count) {
                addSection();
                count--;
            } else {
                sectionButton.disabled = true;
            }
        });
    })

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(taskForm);
        let taskName, sections = [];
        for(let [key, value] of formData) {
            if(key == 'taskName') taskName = value;
            else {
                let keys = key.match(/[^\[\]]+/g);
                if(sections[keys[1]] == undefined) sections[keys[1]] = {};
                sections[keys[1]][keys[2]] = value;
            }
        }
        tasks.push(new Task({name: taskName, sections: sections}));
        sectionInput.innerHTML = "";
        sectionButton.disabled = false;
        taskForm.reset();
    });
}