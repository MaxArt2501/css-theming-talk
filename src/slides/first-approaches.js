import React from 'react';

import {
  List,
  ListItem,
  Link,
  Slide,
  Text,
  Heading,
  CodePane
} from 'spectacle';

export const FirstApproaches = [
  <Slide bgColor="background" id="bem-is" key="bem-is">
    <Heading className="our-header" size={3}>BEM is&hellip;</Heading>
    <List textColor="text" margin="50px 0 0 100px">
      <ListItem>&hellip; effective;</ListItem>
      <ListItem>&hellip; simple enough;</ListItem>
      <ListItem>&hellip; <em>theme</em>-able;</ListItem>
      <ListItem>&hellip; nice to use (with the right tools).</ListItem>
    </List>
    <Text margin="50px 0" textAlign="left" textColor="text">&hellip; but also:</Text>
    <List textColor="text" margin="0 0 0 100px">
      <ListItem>&hellip; verbose;</ListItem>
      <ListItem>&hellip; &ldquo;manual&rdquo;;</ListItem>
      <ListItem>&hellip; not very readable.</ListItem>
    </List>
  </Slide>,
  <Slide bgColor="background" id="first-approaches" key="first-approaches">
    <Heading className="our-header" size={3}>The <code>scoped</code> attribute (2012)</Heading>
    <CodePane lang="html" textSize="30px" source={`<div>
  <style scoped>
    header { ... }
    picture > img { ... }
    ...
  </style>
  <header>...</header>
  <picture>
    <img src="...">
  </picture>
  ...
</div>`}></CodePane>
  </Slide>,
  <Slide bgColor="background" id="scoped-limitations" key="scoped-limitations">
    <Heading className="our-header" size={3}>Limitations of <code>scoped</code></Heading>
    <List textColor="text" textSize="30px" margin="100px 0">
      <ListItem>It allows to style sub-components</ListItem>
      <ListItem>It doesn't <em>shield</em> from global CSS</ListItem>
      <ListItem>A better alternative was coming&hellip;</ListItem>
    </List>
    <Text textColor="text" textSize="50px" textAlign="left">
      Support from Chrome was pulled in v36.
    </Text>
  </Slide>,
  <Slide bgColor="background" bgImage="img/vue.svg" bgPosition="100% 100%" bgSize="auto 30%" bgRepeat="no-repeat" id="not-vues-scoped" key="not-vues-scoped">
    <Heading className="our-header" size={4}>
      It&rsquo;s <em>not</em> the same <code>scoped</code> of <Link
        href="https://vue-loader.vuejs.org/en/features/scoped-css.html">.vue files</Link>
    </Heading>
    <CodePane lang="html" textSize="2.50px" margin="50px 0 0" width="500px" source={`<style scoped>
h2 { font-size: 150%; }
</style>
<template>
  <div> <h2>Hello, world!</h2> </div>
</template>`}></CodePane>
    <Text margin="10px 0">&#8681;</Text>
    <CodePane lang="html" textSize="2.50px" width="500px" source={`<!-- Inside the <head> -->
<style type="text/css">
  h2[data-v-4c74d97c] { font-size: 150%; }
</style>

<!-- In the page -->
<div data-v-4c74d97c>
  <h2 data-v-4c74d97c>Hello, world!</h2>
</div>`}></CodePane>
  </Slide>
];
