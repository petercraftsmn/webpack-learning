import './style.css';
import City from './city.jpg';

function component() {
    const element = document.createElement( 'div' );
    element.innerHTML = [ 'Hello ' + 'world' ].join();
    element.classList.add( 'hello' );

    const myImage = new Image();
    myImage.src = City;
    element.appendChild( myImage );

    return element;
}

document.body.appendChild( component() );


