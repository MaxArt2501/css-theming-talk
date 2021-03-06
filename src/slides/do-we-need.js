import React from 'react';

import {
  Image,
  Slide,
  Text,
  Heading
} from 'spectacle';

export const DoWeNeed = [
  <Slide bgColor="background" id="do-we-need" key="do-we-need">
    <Heading className="our-header" size={3}>Do we <em>need</em> the cascade?</Heading>
    <Image src="img/yes-no.gif" height="400px" margin="100px auto 0"></Image>
  </Slide>,
  <Slide bgColor="background" id="not-the-cascade" key="not-the-cascade">
    <Heading className="our-header" size={3}>The problem is <em>not</em> the cascade&hellip;</Heading>
    <Text textSize="4.9rem" textColor="text" margin="2em 0 0" textAlign="right" bold>
      &hellip; but the <em>global scope</em> of CSS rules!
    </Text>
  </Slide>,
  <Slide bgColor="background" id="what-we-need" key="what-we-need">
    <Heading className="our-header" size={3}>As component-based UIs gain popularity&hellip;</Heading>
    <Text textSize="4.9rem" textColor="text" margin="2em 0 0" textAlign="right" bold>
      &hellip; we need <em>component-based</em> styles!
    </Text>
  </Slide>
];
