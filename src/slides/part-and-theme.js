import React from 'react';

import {
  Image,
  List,
  ListItem,
  Link,
  Slide,
  Text,
  Heading,
  Appear,
  CodePane
} from 'spectacle';

import { css } from 'emotion';

import pseudoElements from './pseudo-elements';

const pseudoClass = css`
  margin: 0em 0.3em;
  display: inline-block;
  white-space: nowrap;
  font-size: inherit;
`;

export const PartAndTheme = [
  <Slide id="already-seend" key="already-seend">
    <Heading className="our-header" size={3}>Already seen</Heading>
    <Text textColor="text">How to style these?</Text>
    <Text margin="1em"><input type="range" style={{ width: '12em' }}/></Text>
    <Text margin="1em"><input type="text" placeholder="I'm a placeholder!"/></Text>
    <Text margin="1em"><progress max="100" value="60"></progress></Text>
  </Slide>,
  <Slide id="pseudo-elements" key="pseudo-elements">
    <Text textSize="22px" margin="0 0 1em">
      {pseudoElements.map(pseudo => <code key={pseudo} className={pseudoClass}>::{pseudo}</code>)}
    </Text>
    <Link href="https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls">
      www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls
    </Link>
  </Slide>,
  <Slide id="enter-part-theme" key="enter-part-theme">
    <Heading className="our-header" size={3}>A new proposal</Heading>
    <Heading size={4} textColor="text">
      <code>::part()</code> and <code>::theme()</code>
    </Heading>
  </Slide>
];
