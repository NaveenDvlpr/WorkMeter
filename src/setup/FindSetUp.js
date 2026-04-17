import { updateState } from "../main.js";

export const findSetUp = () => {
    const goToTasks = document.getElementsByClassName("goToTask");
    if(goToTasks.length) {
        console.log(goToTasks);
        for(let i = 0; i < goToTasks.length; i++) {
            goToTasks[i].addEventListener("click", () => {
            updateState(state => {
                state.view = "task";
                state.activeTask = state.tasks[goToTasks[i].value];
            })});
        }
        
    }
}