import { updateState } from "../main.js";

export const taskSetUp = (task) => {
    const sessionNameInput = document.getElementById("sessionNameInput");
    const startSession = document.getElementById("startSession");

    startSession.addEventListener("click", () => {
        if(sessionNameInput.value) {
            updateState((state) => {
                state.view = "active";
                state.activeTask = task;
                state.sessionName = sessionNameInput.value;
            });
        }
    });
}