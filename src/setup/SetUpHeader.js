import { updateState } from "../main.js"

export const setUpHeader = () => {
    const homeLink = document.getElementById("homeLink");
    const addLink = document.getElementById("addLink");
    const statsLink = document.getElementById("statsLink");
    const findLink = document.getElementById("findLink");


    if(homeLink) homeLink.addEventListener("click", () => {
        updateState(state => state.view = "home");
    });

    if(addLink) addLink.addEventListener("click", () => {
        updateState(state => state.view = "add");
    })

    if(findLink) findLink.addEventListener("click", () => {
        updateState(state => state.view = "find");
    })
}