export const ActiveTask = (task, sessionName) => {
    return `<h1>${sessionName}</h1>
    <h3>${task.name}</h3>
    <div id="previousSection"></div>
    <div id="currentSection">
        <div id="sectionName"></div>
        <div id="timerDisplay"></div>
        <div id="nextSection"></div>
        <button id = "controlPlay">Pause</button>
        <button id = "controlNext">Next</button>
    </div>`;
}
    
   