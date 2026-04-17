import { SessionComp } from "./SessionComp.js"

export const Recents = (recents) => {
    let res = "";
    recents.forEach(recent => res += SessionComp(recent));
    if(res == "") res += "Hey! What's ur action today?";
    return `<div>${res}</div>`;
}