import React from 'react';

import {
  List,
  ListItem,
  Slide,
  Heading,
  CodePane
} from 'spectacle';

export const HowToLocal = [
  <Slide bgColor="background" align="center flex-end" id="how-to-local" key="how-to-local" bgImage="img/concentration.gif">
    <Heading textColor="background" size={3}>So&hellip; how do we do it?</Heading>
  </Slide>,
  <Slide bgColor="background" id="conventions" key="conventions">
    <Heading className="our-header" size={3}>We need <em>conventions</em></Heading>
    <List textColor="text" textSize="40px" margin="100px 0 0 200px">
      <ListItem>OOCSS</ListItem>
      <ListItem>SMACSS, ITCSS</ListItem>
      <ListItem>SUIT, &hellip;</ListItem>
      <ListItem>👉 <b>BEM</b></ListItem>
    </List>
  </Slide>,
  <Slide bgColor="background" id="this-is-bem" key="this-is-bem">
    <Heading className="our-header" size={3}>Hello code, this is BEM:</Heading>
    <CodePane lang="html" textSize="25px" source={`<div class="content-card">
  <header class="content-card__header">...</header>
  <picture class="content-card__picture">
    <img src="..." class="content-card__image">
  </picture>
  <section class="content-card__abstract">
    <p>...</p>
  </section>
  <footer class="content-card__footer">
    <button type="button" class="content-card__favorite">☆</button>
    <nav class="content-card__actions">
      <a href="#" class="content-card__action">Read later</a>
      <a href="#" class="content-card__action content-card__action--view">View</a>
    </nav>
  </footer>
</div>`}></CodePane>
  </Slide>
];
