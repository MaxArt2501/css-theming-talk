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

import Columns from '../components/columns.js';
import BrowserSupport from '../components/browser-support.js';
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
    <Text textSize="20px" margin="0 0 1em">
      {pseudoElements.map(pseudo => <code key={pseudo} className={pseudoClass}>::{pseudo}</code>)}
    </Text>
    <Link href="https://www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls">
      www.tjvantoll.com/2013/04/15/list-of-pseudo-elements-to-style-form-controls
    </Link>
  </Slide>,
  <Slide bgImage="img/my-gosh.gif" id="so-many-pseudos" key="so-many-pseudos" align="flex-start flex-end">
    <Heading size={2} textColor="background" textAlign="left">
      &hellip; all 92 of them<br/>
      <Text textSize="40%" textColor="background">(not counting the modifiers)</Text>
    </Heading>
  </Slide>,
  <Slide id="enter-part-theme" key="enter-part-theme">
    <Heading className="our-header" size={3}>A new proposal</Heading>
    <Heading size={4} textColor="text" margin="1em 0">
      <code>::part()</code> and <code>::theme()</code>
    </Heading>
    <Text textColor="text">A way to expose elements to styling</Text>
  </Slide>,
  <Slide id="how-part-works" key="how-part-works">
    <Heading className="our-header" size={4}>How <code>::part()</code> works</Heading>
    <CodePane lang="html" textSize="25px" margin="2em 0 1em" source={`
<div part="wrapper">
  <header part="header">...</header>
  <div part="content">...</div>
  <footer part="actions">...</footer>
</div>
`.trim()}></CodePane>
    <CodePane lang="css" textSize="25px" source={`
fancy-card::part(wrapper) {
  box-shadow: 0 .25em .5em rgba(0, 0, 0, .5);
  ...
}
fancy-card::part(header) {
  font-weight: bold;
  ...
}
`.trim()}></CodePane>
  </Slide>,
  <Slide id="what-part-can-do" key="what-part-can-do">
    <Heading className="our-header" size={4} margin="0 0 1em">What <code>::part()</code> can do</Heading>
    <Columns>
      <Text textSize="100px">👍</Text>
      <CodePane lang="css" textSize="25px" source={`
fancy-card::part(picture):hover {
  transform: scale(1.1);
}
`.trim()}></CodePane>
    </Columns>
    <Columns>
      <Text textSize="100px">❌</Text>
      <CodePane lang="css" textSize="25px" source={`
fancy-card::part(picture) > img {
  filter: blur(2vmin);
}
`.trim()}></CodePane>
    </Columns>
  </Slide>,
  <Slide id="sub-parts" key="sub-parts">
    <Heading className="our-header" size={4}>Styling Custom Sub-Elements</Heading>
    <Columns align="center">
      <CodePane lang="html" textSize="25px" margin="1em 0" source={`
<div part="wrapper">
  ...
  <footer part="actions">
    <fancy-button>View</fancy-button>
  </footer>
</div>
`.trim()}></CodePane>
      <CodePane lang="html" textSize="25px" source={`
<button type="button">
  <span part="icon"></span>
  <slot></slot>
</button>
`.trim()}></CodePane>
    </Columns>
    <Columns>
      <Text textSize="100px">❌</Text>
      <CodePane lang="css" textSize="25px" source={`
fancy-card::part(icon) {
  opacity: .75;
}
`.trim()}></CodePane>
    </Columns>
  </Slide>,
  <Slide id="forwarding-parts" key="forwarding-parts">
    <Heading className="our-header" size={4} margin="0 0 1em">Forwarding parts</Heading>
    <CodePane lang="html" textSize="25px" margin="0 0 2em" source={`
<div part="card-wrapper">
  ...
  <footer part="actions">
    <fancy-button part="icon => button-icon">View</fancy-button>
  </footer>
</div>
`.trim()}></CodePane>
    <Columns>
      <Text textSize="100px">👍</Text>
      <CodePane lang="css" textSize="25px" source={`
fancy-card::part(button-icon) {
  opacity: .75;
}
`.trim()}></CodePane>
    </Columns>
  </Slide>,
  <Slide id="forwarding-multi-parts" key="forwarding-multi-parts">
    <Heading className="our-header" size={4} margin="0 0 1em">Forwarding multiple parts</Heading>
    <Columns>
      <Text textSize="100px">👍</Text>
      <CodePane lang="html" textSize="25px" margin="0 0 2em" source={`
<fancy-picture src="..."
  part="image => image, caption => picture-caption">
</fancy-picture>
`.trim()}></CodePane>
    </Columns>
    <Columns>
      <Text textSize="100px">👍</Text>
      <CodePane lang="html" textSize="25px" margin="0 0 2em" source={`
<fancy-picture src="..."
  part="* => picture-*">
</fancy-picture>
`.trim()}></CodePane>
    </Columns>
    <Columns>
      <Text textSize="100px">❌</Text>
      <CodePane lang="html" textSize="25px" source={`
<fancy-picture src="..."
  part="* => *">
</fancy-picture>
`.trim()}></CodePane>
    </Columns>
  </Slide>,
  <Slide id="styling-all-the-parts-1" key="styling-all-the-parts-1">
    <Heading className="our-header" size={4}>Styling <em>all</em> the parts</Heading>
    <CodePane lang="html" textSize="20px" margin="1em 0" source={`
<div part="card-wrapper">
  <fancy-header
    part="header-title => header-title, header-icon => header-icon">...
  </fancy-header>
  <div part="card-content">
    <fancy-picture src="..."
      part="picture-image => picture-image, picture-caption => picture-caption">
    </fancy-picture>
    <div part="card-body"><slot></slot></div>
  </div>
  <footer part="actions">
    <fancy-button part="button-icon => button-icon">View</fancy-button>
  </footer>
</div>
`.trim()}></CodePane>
    <CodePane lang="css" textSize="20px" source={`
::part(header-title) { ... }
::part(header-icon) { ... }
::part(picture-image) { ... }
...
`.trim()}></CodePane>
  </Slide>,
  <Slide id="styling-all-the-parts-2" key="styling-all-the-parts-2">
    <Heading className="our-header" size={4}>Styling <em>all</em> the parts&hellip; with prefixes</Heading>
    <CodePane lang="html" textSize="20px" margin="1em 0" source={`
<div part="card-wrapper">
  <fancy-header part="* => card-*">...</fancy-header>
  <div part="card-content">
    <fancy-picture src="..." part="* => card-*"></fancy-picture>
    <div part="card-body"><slot></slot></div>
  </div>
  <footer part="actions">
    <fancy-button part="* => card-*">View</fancy-button>
  </footer>
</div>
`.trim()}></CodePane>
    <CodePane lang="css" textSize="20px" source={`
::part(header-title),  ::part(card-header-title),  ::part(list-card-header-title)  { ... }
::part(header-icon),   ::part(card-header-icon),   ::part(list-card-header-icon)   { ... }
::part(picture-image), ::part(card-picture-image), ::part(list-card-picture-image) { ... }
...
`.trim()}></CodePane>
  </Slide>,
  <Slide id="theming-with-theme" key="theming-with-theme">
    <Heading className="our-header" size={4}>Theming&hellip; with <code>::theme()</code></Heading>
    <CodePane lang="html" textSize="20px" margin="1em 0" source={`
<div part="card-wrapper">
  <fancy-header>...</fancy-header>
  <div part="card-content">
    <fancy-picture src="..."></fancy-picture>
    <div part="card-body"><slot></slot></div>
  </div>
  <footer part="actions">
    <fancy-button>View</fancy-button>
  </footer>
</div>
`.trim()}></CodePane>
    <CodePane lang="css" textSize="20px" source={`
::theme(header-title) { ... }
::theme(header-icon) { ... }
::theme(picture-image) { ... }
...
`.trim()}></CodePane>
  </Slide>,
  <Slide bgImage="img/celebrating.gif" align="center flex-start" id="yay-theme" key="yay-theme">
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit">Yay!</Text>
    </Heading>
  </Slide>,
  <Slide id="part-theme-support" key="part-theme-support">
    <Heading className="our-header" size={4} margin="0 0 1em">
      <code>::part()</code> and <code>::theme()</code> support
    </Heading>
    <BrowserSupport
      support={{ chrome: '❌', firefox: '❌', edge: '❌', safari: '❌', samsung: '❌' }}
    ></BrowserSupport>
  </Slide>,
  <Slide bgImage="img/disappointed.gif" id="no-theme" key="no-theme">
    <Text textSize="250px" textAlign="right">☹️</Text>
  </Slide>
];
