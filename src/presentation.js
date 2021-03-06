import React from 'react';
import { Deck } from 'spectacle';

import './style.css';
import './typography.css';
import 'normalize.css';

import { Cover } from './slides/cover';
import { WhoIAm } from './slides/whoiam';
import { CSSIsEasy } from './slides/css-is-easy';
import { WowCode } from './slides/wow-code';
import { DoWeNeed } from './slides/do-we-need';
import { HowToLocal } from './slides/how-to-local';
import { BEMStuff } from './slides/bem-stuff';
import { FirstApproaches } from './slides/first-approaches';
import { CSSEncapsulation } from './slides/css-encapsulation';
import { CSSVariables } from './slides/css-variables';
import { PartAndTheme } from './slides/part-and-theme';
import { Linkography } from './slides/linkography';

import { theme, deckWidth, deckHeight } from './theme';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={deckWidth}
        contentHeight={deckHeight}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="bar"
      >
        {Cover}
        {WhoIAm}
        {CSSIsEasy}
        {WowCode}
        {DoWeNeed}
        {HowToLocal}
        {BEMStuff}
        {FirstApproaches}
        {CSSEncapsulation}
        {CSSVariables}
        {PartAndTheme}
        {Linkography}
      </Deck>
    );
  }
}
