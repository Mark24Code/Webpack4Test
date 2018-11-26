import './index.css';
import Icon from './demo.png';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'hello webpack 200999';

  // eslint-disable-next-line
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());
