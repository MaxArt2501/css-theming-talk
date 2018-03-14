import React from 'react';

import {
  CodePane,
  Heading,
  Notes,
  Slide
} from 'spectacle';

export const WowCode = [
  <Slide id="wow-code-1" key="wow-code-1" bgColor="background" transition={['fade']}>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="css" source={`
.align-right { float: right; }
/* ... */
.align-right { text-align: right; }
`.trim()}></CodePane>
  </Slide>,
  <Slide id="wow-code-2" key="wow-code-2" bgColor="background" transition={['fade']}>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="css" source={`
.list-box > div li p {
  text-indent: 1em;
}
`.trim()}></CodePane>
  </Slide>,
  <Slide id="wow-code-3" key="wow-code-3" bgColor="background" transition={['fade']}>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="css" source={`
.tons-of-💩 {
  width: 100% !important;
}
`.trim()}></CodePane>
  </Slide>,
  <Slide id="wow-code-4" key="wow-code-4" bgColor="background" transition={['fade']}>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="css" source={`
.modal-panel-box-other2 {
  position: relative;
}
`.trim()}></CodePane>
  </Slide>,
  <Slide id="wow-code-5" key="wow-code-5" bgColor="background" transition={['fade']}>
    <Notes>
      Utility classes aren't bad per se, but too many of them make things poorly
      semantic and quite hard to read, and so to maintain.
    </Notes>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="html" source={`
<div class="rounded-corners big-margin
  light-bg text-big text-justify
  nice-shadow normal-padding">
`.trim()}></CodePane>
  </Slide>,
  <Slide id="wow-code-6" key="wow-code-6" bgColor="background" transition={['fade']}>
    <Notes>
      Atomic CSS is actually a rational approach to utility/functional classes, and has
      the nice effect to keep your CSS bundle very small. But the price to pay in terms
      of readability, learning curve and package dependencies isn't negligible, and as
      Harold Abelson said, "Programs must be written for people to read, and only
      incidentally for machines to execute."
    </Notes>
    <Heading className="our-header" size={4}>The mess we witnessed&hellip;</Heading>
    <CodePane margin="80px 0 0" textSize="40px" lang="html" source={`
<div class="w-75 pv-10 ph-18 m-5
  bg-ivory c-indigo f-helvetica fs-90
  lh-1.5 fw-300 br-4 wtf-😭">
`.trim()}></CodePane>
  </Slide>,
  <Slide bgColor="background" bgImage="img/crying-with-wine.gif" align="flex-end flex-end" id="have-to-maintain" key="have-to-maintain">
    <Heading size={3} textColor="background" textAlign="right" margin="0 0 1em">&hellip; and have to maintain</Heading>
  </Slide>
];
