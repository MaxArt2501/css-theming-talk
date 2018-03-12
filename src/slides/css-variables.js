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

import BrowserSupport from '../components/browser-support.js';

export const CSSVariables = [
  <Slide id="css-variables" key="css-variables">
    <Heading className="our-header" size={3}>With CSS """variables"""</Heading>
    <CodePane lang="css" textSize="25px" margin="2em 0 1em" source={`
button {
  background:    var(--var-button-background,    #ff6600);
  color:         var(--var-button-color,         white);
  border-radius: var(--var-button-border-radius, 2em);
  ...
}
`.trim()}></CodePane>
    <CodePane lang="css" textSize="25px" source={`
:root {
  --var-button-background:    aqua;
  --var-button-color:         #333;
  --var-button-border-radius: 0;
}
.danger { --var-button-background: #fcc; }
`.trim()}></CodePane>
  </Slide>,
  <Slide id="css-variables-support" key="css-variables-support">
    <Heading className="our-header" size={3}>Custom properties support</Heading>
    <BrowserSupport
      support={{ chrome: '👍', firefox: '👍', safari: '👍', edge: '👍', samsung: '👍' }}
      canIUse="css-variables"></BrowserSupport>
  </Slide>,
  <Slide id="expose-all-the-things" key="expose-all-the-things">
    <Image src="img/expose-att.png"/>
  </Slide>,
  <Slide id="expose-all-the-things-really" key="expose-all-the-things-really">
    <Image src="img/expose-all-tt.png"/>
  </Slide>,
  <Slide id="custom-variables-problems" key="custom-variables-problems">
    <Heading className="our-header" size={4}>Problems with CSS variables</Heading>
    <List textColor="text">
      <ListItem>One variable per property, which brings&hellip;</ListItem>
      <ListItem>&hellip; feature fragmentation&hellip;</ListItem>
      <ListItem>&hellip; boilerplate explosion&hellip;</ListItem>
      <ListItem>&hellip; naming concerns&hellip;</ListItem>
      <ListItem>&hellip; readability issues&hellip;</ListItem>
      <ListItem>&hellip; performance problems&hellip;</ListItem>
      <ListItem>&hellip; semantic poverty.</ListItem>
    </List>
  </Slide>,
  <Slide id="custom-variables-apply" key="custom-variables-apply">
    <Heading className="our-header" size={4}>A great idea: enters <code>@apply</code></Heading>
    <CodePane lang="css" textSize="25px" margin="1em 0 1em" source={`
:root {
  --var-button: {
    border-radius: 0;
    box-shadow:    0 .1em .2em rgba(0, 0, 0, .25);
  }
}
`.trim()}></CodePane>
    <CodePane lang="css" textSize="25px" source={`
button {
  background:    #ff6600;
  color:         white;
  border-radius: 2em;
  @apply(--var-button);
}
`.trim()}></CodePane>
  </Slide>,
  <Slide bgImage="img/rejoice.gif" align="center flex-start" id="apply-rejoice" key="apply-rejoice">
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit" caps>Mixins in CSS</Text>
    </Heading>
  </Slide>,
  <Slide id="apply-but" key="apply-but">
    <Heading className="our-header" margin="0 0 1em" size={4}>But&hellip;</Heading>
    <Text textColor="text" textAlign="left">
      &hellip; you still can't <em>nest</em> rules, so&hellip;
    </Text>
    <Text textColor="text" textAlign="left">
      &hellip; what about <code>:hover</code> styles?
    </Text>
    <Text textColor="text" textAlign="left">
      &hellip; and <code>:active</code>? <code>:focus-within</code>? <code>::before</code>?
    </Text>
    <Text textColor="text" textAlign="left">
      &hellip; what does <em>this</em> even do?
    </Text>
  <CodePane lang="css" textSize="25px" margin="1em 0 0" source={`
li {
  --item-style: {
    color: var(--theme-color);
  };
  @apply(--item-style);
}
li:first-child {
  --theme-color: red;
}
`.trim()}></CodePane>
  </Slide>,
  <Slide bgImage="img/sadness.gif" align="center flex-start" id="apply-removed" key="apply-removed">
    <Heading className="our-header" size={3}>
      <Text textColor="background" textSize="inherit">Support has been removed</Text>
    </Heading>
  </Slide>
];
