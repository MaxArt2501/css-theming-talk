import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

import { deckWidth, deckHeight } from './theme';

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

const [ , protoQS ] = window.location.hash.split('?');
const qsParts = protoQS ? protoQS.split('&').filter(Boolean) : [];
if (!qsParts.includes('presenter')) {
  const root = document.getElementById('root');
  const deckRoot = root.querySelector('.spectacle-deck');
  Object.assign(deckRoot.style, {
    width: `${deckWidth}px`,
    height: `${deckHeight}px`
  });

  function setDeckRatio() {
    const ratio = Math.min(window.innerWidth / deckWidth, window.innerHeight / deckHeight);
    root.style.transform = `translate(calc(50vw - ${deckWidth * ratio / 2}px), calc(50vh - ${deckHeight * ratio / 2}px)) scale(${ratio})`;
  }
  window.addEventListener('resize', setDeckRatio, { passive: true });
  setDeckRatio();
}
