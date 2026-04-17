import { updateState } from "../main.js";

export const Header = (view) => {
    let res = "";
    if(view != "home") res += `<a id="homeLink">Home</a>`;
    if(view != "active") {
        res += `<a id= "addLink">Add</a>`;
        res += `<a id="findLink">Find</a>`
    }
    if(view != "stats") res += '<a id="statsLink>Stats</a>';
    return res;
}