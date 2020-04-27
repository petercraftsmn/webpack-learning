let websiteName;
websiteName = document.createElement('h1');
document.body.appendChild(websiteName);

websiteName.innerHTML = "Claudia's website";
websiteName.style.color = "red";
websiteName.style.textAlign = "center";
websiteName.id = "claudia";

let onClickHandler;
onClickHandler = function () {
    websiteName.style.textAlign = "right";
    websiteName.style.fontSize = "60px";
};

websiteName.onclick = onClickHandler;


let pankaj;
pankaj = document.createElement('h2');
document.body.appendChild(pankaj);

pankaj.innerHTML = "Hi Everyone.";
pankaj.style.color = "drak pink";
pankaj.style.textAlign = "right";
pankaj.id = "color";

let onClickHandlerPankaj;
onClickHandlerPankaj = function () {
    pankaj.style.textAlign = "left";
    pankaj.style.fontSize = "100";
}

pankaj.onclick = onClickHandlerPankaj;