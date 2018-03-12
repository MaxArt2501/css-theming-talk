import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();

const keyCodeRemap = {
  40: 39,
  38: 37
};
window.addEventListener('keydown', ({ keyCode }) => {
  if (keyCode in keyCodeRemap) {
      const e = new KeyboardEvent('keydown', { keyCode: keyCodeRemap[keyCode] });
      window.dispatchEvent(e);
  }
});
