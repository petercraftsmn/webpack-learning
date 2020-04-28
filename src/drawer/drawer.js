import "./drawer-style.css";

export default class Drawer {
    constructor() {
        let drawerWrapper = document.createElement('div');
        document.body.appendChild(drawerWrapper);
        drawerWrapper.innerHTML = "HI i am drawer";
        drawerWrapper.classList.add("wrapper");

    }
}