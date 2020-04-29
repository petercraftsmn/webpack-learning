import "./drawer-style.css";

export default class Drawer {
    constructor() {
        let drawerWrapper = document.createElement('div');
        document.body.appendChild(drawerWrapper);
        drawerWrapper.classList.add("drawer-wrapper");
        drawerWrapper.classList.add("drawer-invisible");

        let drawerMain;
        drawerMain = document.createElement('div');
        drawerWrapper.appendChild(drawerMain);
        drawerMain.classList.add('drawer-main');

        // Open drawer
        document.querySelector('.menu-icon').onclick = function (event) {
            event.stopPropagation();
            event.preventDefault();
            drawerWrapper.classList.remove('drawer-invisible');
        }

        // Close drawer
        drawerWrapper.onclick = function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.target !== this) return;
            drawerWrapper.classList.add('drawer-invisible');
        }
    }
}