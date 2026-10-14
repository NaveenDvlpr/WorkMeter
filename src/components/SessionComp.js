const showSectionStats = (sections) => {
    let res = "";
    sections.forEach(section => {
        let diff = section.timeTaken()-section.duration;
        let direction = "fa-arrow-down";
        if(diff <= 0) {
            direction = "fa-arrow-up";
            diff = (-diff);
        }
        res += `<div class="section">
            <h5>${section.name}<small>
            <i class="fa-solid ${direction}"></i>
            <span>${diff}</span>
            </small></h5>
            <div>${section.duration}/${section.timeTaken()}</div>
        </div>`});
    return res;
}


export const SessionComp = (session) => {
    const date = new Date(session.startTime);
    return `<div class="session">
    <div class="sessionHeader"><h3>${session.name}(${session.getDuration()}/${session.timeTaken()})</h3>
    <h5>${session.taskName}/${date.toDateString()} </h5></div>
    <div class="sessionStats">${showSectionStats(session.sections)}</div>
    </div>`;
}