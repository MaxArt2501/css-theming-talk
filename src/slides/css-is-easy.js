import React from 'react';

import {
  Slide,
  Heading
} from 'spectacle';

export const CSSIsEasy = [
  <Slide id="css-is-easy" bgColor="background">
    <Heading size={1} fit textColor="text">CSS is <em>easy</em>&hellip;</Heading>
  </Slide>,
  <Slide bgColor="background" bgImage="img/shishi-odoshi.gif" id="cascade" align="center flex-start">
    <Heading size={1} fit textColor="text">Cascading&hellip;</Heading>
  </Slide>,
  <Slide bgColor="background" bgImage="img/khaaan.gif" id="cascaaading" align="center flex-start">
    <Heading size={1} fit textColor="background" className="shaking" caps>Cascaaading!</Heading>
  </Slide>,
  <Slide id="css-is-not-easy" bgColor="background">
    <Heading size={1} fit textColor="text">&hellip; but not <em>easy to master!</em></Heading>
  </Slide>
];
