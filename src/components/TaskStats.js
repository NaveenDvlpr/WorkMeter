const showSectionStats = (task) => {
    let res = "";
    task.sections.forEach(section => {
        let diff = section.averageTimeTaken-section.duration;
        let direction = "fa-arrow-down";
        if(diff <= 0) {
            direction = "fa-arrow-up";
            diff = (-diff);
        }
        res += `<div class="section">
            <h6>${section.name}</h6>
            <small>
            <i class="fa-solid ${direction}"></i>
            <span>${diff}</span>
            </small>
            <small>Duration: ${section.duration}</small>
            <small>AverageTimeTaken: ${section.averageTimeTaken}</small>
        </div>`;
    });
    return res;
}

export const TaskStats = (task) => {
    return `<div class="taskStats">
        <div class="taskHeader">
        <h4>${task.name}</h4>
        <data value=${task.sessions.length}>count: ${task.sessions.length}</data>
        </div>
        <div class="sections">${showSectionStats(task)}</div>
    </div>`;
}   