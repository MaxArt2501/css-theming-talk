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

export const CSSEncapsulation = [
  <Slide bgColor="background" bgImage="img/blue-red-pill.gif" align="center flex-start" id="style-encapsulation" key="style-encapsulation">
    <Heading className="our-header" size={3}>
      <Text textColor="background" textSize="inherit">Style encapsulation</Text>
    </Heading>
  </Slide>,
  <Slide bgColor="background" id="web-components" key="web-components">
    <Heading className="our-header" size={3}>Web Components</Heading>
    <List>
      <ListItem>Achieve <em>true</em> encapsulation</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="background" id="resusability" key="resusability">
    <Heading className="our-header" size={3}>&hellip; component reusability?</Heading>
    <Image src="img/mashup-ui.png" height="40vmin"></Image>
  </Slide>
];
