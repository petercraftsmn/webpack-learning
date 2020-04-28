import "./navbar-style.css";
import menuIconSvg from "./menu-24px.svg";
import personIconSvg from "./person_outline-24px.svg";

export default class navBar {
    constructor() {
        let navElement;
        navElement = document.createElement('nav');
        document.body.appendChild(navElement);
        navElement.classList.add("nav-element");
        navElement.classList.add("shadow");

        let menuIcon;
        menuIcon = document.createElement('img');
        navElement.appendChild(menuIcon);
        menuIcon.src = menuIconSvg;
        menuIcon.classList.add('menu-icon');

        let profileIcon;
        profileIcon = document.createElement('img');
        navElement.appendChild(profileIcon);
        profileIcon.src = personIconSvg;
        profileIcon.classList.add("profile-icon");

        let logo;
        logo = document.createElement('h2');
        navElement.appendChild(logo);
        logo.innerHTML = "Claudia";
        logo.classList.add("logo");
    }

}