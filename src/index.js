import './index.css';
import Icon from './demo.png';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello webpack 209'

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}
console.log("<<<<HHHHH");
console.log(process.env.NODE_ENV);
console.log("<<<<@@@");
document.body.appendChild(component());