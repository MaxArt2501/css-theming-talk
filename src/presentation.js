import React from 'react';
import { Deck } from 'spectacle';

import './style.css';
import 'normalize.css';

import { Cover } from './slides/cover';
import { WhoIAm } from './slides/whoiam';

import { theme } from './theme';


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={1280}
        contentHeight={960}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {Cover}
        {WhoIAm}
      </Deck>
    );
  }
}
