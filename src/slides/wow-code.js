import React from 'react';
import Columns from '../components/columns';

import {
  Appear,
  CodePane,
  Heading,
  Image,
  Slide
} from 'spectacle';

export const WowCode = [
  <Slide id="wow-code" key="wow-code" bgColor="background">
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <Columns align="center">
      <Appear><CodePane textSize="3vmin" lang="css" source={`
.align-right { float: right; }
/* ... */
.align-right { text-align: right; }
`.trim()}></CodePane></Appear>
      <Appear><Image src="img/troll-right.png"></Image></Appear>
    </Columns>
    <Columns align="center">
      <Appear><CodePane textSize="3vmin" lang="css" source={`
.list-box > div li p {
  text-indent: 1em;
}
`.trim()}></CodePane></Appear>
      <Appear><CodePane textSize="3vmin" lang="css" source={`
.tons-of-💩 {
  width: 100% !important;
}
`.trim()}></CodePane></Appear>
    </Columns>
    <Columns align="center">
      <Appear><CodePane textSize="3vmin" lang="css" source={`
.modal-panel-box-other2 {
  position: relative;
}
`.trim()}></CodePane></Appear>
      <Appear><CodePane textSize="3vmin" lang="html" source={`
<div class="w-75 pv-10 ph-18 m-5
  bg-ivory c-indigo f-helvetica fs-90
  lh-1.5 fw-300 br-4 wtf-😭">
`.trim()}></CodePane></Appear>
    </Columns>
  </Slide>,
  <Slide bgColor="background" bgImage="img/crying-with-wine.gif" align="flex-end flex-end" id="have-to-maintain" key="have-to-maintain">
    <Heading size={3} textColor="background" textAlign="right" margin="0 0 1em">&hellip; and have to maintain</Heading>
  </Slide>
];
