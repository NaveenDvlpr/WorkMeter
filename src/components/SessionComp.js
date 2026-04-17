export const SessionComp = (session) => {
    return `<h3>${session.name}</h3>
    <h4>${session.taskName}</h4>
    <div>${session.startTime}</div>
    <div>${session.endTime}</div>`;
}