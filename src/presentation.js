import React from 'react';
import { Deck } from 'spectacle';

import './style.css';
import './typography.css';
import 'normalize.css';

import { Cover } from './slides/cover';
import { WhoIAm } from './slides/whoiam';
import { CSSIsEasy } from './slides/css-is-easy';
import { WowCode } from './slides/wow-code';

import { theme } from './theme';

// eslint-disable-next-line import/no-webpack-loader-syntax
const code = require('raw-loader!./index.js');

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
        {CSSIsEasy}
        {WowCode}
      </Deck>
    );
  }
}
