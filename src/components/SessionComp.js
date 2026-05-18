const showSectionStats = (sections) => {
    let res = "";
    sections.forEach(section => res += `<div>${section.name}</div>
        <div>${section.duration}/${section.timeTaken()}</div>`);
    return res;
}


export const SessionComp = (session) => {
    const date = new Date(session.startTime);
    return `<h3>${session.name}</h3>
    <h5>${session.taskName}/${date.toDateString()} </h5>
    <div>${session.getDuration()}/${session.timeTaken()}</div>
    ${showSectionStats(session.sections)}`;
}