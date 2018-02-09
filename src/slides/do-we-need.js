import React from 'react';

import {
  Image,
  Slide,
  Text,
  Heading,
  Appear
} from 'spectacle';

export const DoWeNeed = [
  <Slide bgColor="background" id="do-we-need" key="do-we-need">
    <Heading className="our-header" size={3}>Do we <em>need</em> the cascade?</Heading>
    <Image src="img/yes-no.gif" height="40vmin" margin="10vmin auto 0"></Image>
  </Slide>,
  <Slide bgColor="background" id="not-the-cascade" key="not-the-cascade">
    <Heading className="our-header" size={3}>The problem is <em>not</em> the cascade&hellip;</Heading>
    <Text textSize="4.9rem" textColor="text" margin="2em 0 0" textAlign="right" bold>
      &hellip; but the <em>global scope</em> of CSS rules!
    </Text>
  </Slide>
];
