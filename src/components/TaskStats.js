const showSectionStats = (task) => {
    let res = "";
    task.sections.forEach(section => {
        res += `<div>
            <h6>${section.name}</h6>
            <small>Duration: ${section.duration}</small>
            <small>AverageTimeTaken: ${section.averageTimeTaken}</small>
        </div>`;
    });
    return res;
}



export const TaskStats = (task) => {
    return `<div>
        <h4>${task.name}</h4>
        <data value=${task.sessions.length}>count: ${task.sessions.length}</data>
        ${showSectionStats(task)}
    </div>`;
}   