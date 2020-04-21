import './style.css';
// import City from './city.jpg';
import printMe from './print';

function component() {
    const element = document.createElement( 'div' );
    element.innerHTML = [ 'Hello ' + 'world ' ].join();
    element.classList.add( 'hello' );

    // const myImage = new Image();
    // myImage.src = City;
    // element.appendChild( myImage );

    const btn = document.createElement( 'button' );
    btn.innerHTML = "Click me and check console";
    btn.onclick = printMe;
    element.appendChild( btn );

    return element;
}

document.body.appendChild( component() );


