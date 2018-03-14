import React from 'react';

import {
  List,
  ListItem,
  Notes,
  Slide,
  Text,
  Heading,
  CodePane
} from 'spectacle';

import Columns from '../components/columns.js';

export const BEMStuff = [
  <Slide id="bem-is" key="bem-is" transition={[ 'fade' ]}>
    <Heading className="our-header" size={3}>BEM is&hellip;</Heading>
    <List textColor="text" margin="50px 0 0 100px">
      <ListItem>&hellip; effective;</ListItem>
      <ListItem>&hellip; simple enough;</ListItem>
      <ListItem>&hellip; <em>theme</em>-able;</ListItem>
      <ListItem>&hellip; nice to use (with the right tools).</ListItem>
    </List>
  </Slide>,
  <Slide id="styling-with-bem" key="styling-with-bem" transition={[ 'fade' ]}>
    <Heading className="our-header" size={3} margin="0 0 1em">Styling in BEM</Heading>
    <Text textSize="40px" textAlign="left" textColor="text">
      We have <em>modifiers</em> for that reason:
    </Text>
    <CodePane lang="html" textSize="30px" margin="1em 0 0" source={`<style scoped>
  .var-button--big { font-size: 125%; }
  .var-button--round { border-radius: 10em; }
</style>
<button class="var-button var-button--big var-button--round">
  Click me!
</button>`}></CodePane>
  </Slide>,
  <Slide id="complex-bem-styling" key="complex-bem-styling" transition={[ 'fade' ]}>
    <Heading className="our-header" size={4} margin="0 0 1em">
      More complex components?
    </Heading>
    <CodePane lang="html" textSize="30px" source={`
<div class="card">
  <div class="card__header">...</div>
  <div class="card__content">
    <picture class="card__picture">
      ...
    </picture>
    <div class="card__body">...</div>
  </div>
  <div class="card__actions">...</div>
</div>
`.trim()}></CodePane>
  </Slide>,
  <Slide id="bem-styling-modifiers" key="bem-styling-modifiers" transition={[ '' ]}>
    <Heading className="our-header" size={4} margin="0 0 1em">
      Element modifiers
    </Heading>
    <CodePane lang="html" textSize="30px" source={`
<div class="card card--rounded">
  <div class="card__header card__header--overlay">...</div>
  <div class="card__content card__content--padded">
    <picture class="card__picture card__picture--blurred">
      ...
    </picture>
    <div class="card__body card__body--thin">...</div>
  </div>
  <div class="card__actions">...</div>
</div>
`.trim()}></CodePane>
  </Slide>,
  <Slide id="bem-modifiers-are" key="bem-modifiers-are">
    <Notes>
      Element modifiers are usually <em>specific</em> to one element, so they're
      hardly reusable anyway.
    </Notes>
    <Heading className="our-header" size={4} margin="0 0 1em">
      Element modifiers 👍 &amp; 👎
    </Heading>
    <Text textSize="40px" textAlign="left" textColor="text">👍</Text>
    <List textColor="text" margin="1em">
      <ListItem>Simple enough</ListItem>
      <ListItem>Reusable modifiers</ListItem>
    </List>
    <Text textSize="40px" textAlign="left" textColor="text">👎</Text>
    <List textColor="text" margin="1em">
      <ListItem>Bloated markup</ListItem>
      <ListItem>&hellip; do we <em>need</em> reusable modifiers?</ListItem>
    </List>
  </Slide>,
  <Slide id="bem-block-modifiers-1" key="bem-block-modifiers-1">
    <Heading className="our-header" size={4} margin="0 0 1em">
      Block modifiers
    </Heading>
    <CodePane lang="html" textSize="30px" source={`
<div class="card">
  <div class="card__header">...</div>
  <div class="card__content">
    <picture class="card__picture">
      ...
    </picture>
    <div class="card__body">...</div>
  </div>
  <div class="card__actions">...</div>
</div>
`.trim()}></CodePane>
  </Slide>,
  <Slide id="bem-block-modifiers-2" key="bem-block-modifiers-2" transition={[ '' ]}>
    <Heading className="our-header" size={4} margin="0 0 1em">
      Block modifiers
    </Heading>
    <CodePane lang="html" textSize="30px" source={`
<div class="card card--fancy"><!-- 👈 Just here! -->
  <div class="card__header">...</div>
  <div class="card__content">
    <picture class="card__picture">
      ...
    </picture>
    <div class="card__body">...</div>
  </div>
  <div class="card__actions">...</div>
</div>
`.trim()}></CodePane>
  </Slide>,
  <Slide id="bem-block-modifiers-3" key="bem-block-modifiers-3">
    <Heading className="our-header" size={4} margin="0 0 1em">
      (S)CSS in action
    </Heading>
    <Columns>
      <CodePane lang="scss" textSize="30px" source={`
.card {
  &--fancy {
    &.card { ... }
    .card {
      &__header { ... }
      &__content { ... }
      &__picture { ... }
      &__body { ... }
    }
  }
}
`.trim()}></CodePane>
      <CodePane lang="css" textSize="30px" source={`


.card--fancy.card { ... }
.card--fancy .card__header { ... }
.card--fancy .card__content { ... }
.card--fancy .card__picture { ... }
.card--fancy .card__body { ... }



`}></CodePane>
    </Columns>
  </Slide>,
  <Slide bgImage="img/panic.gif" id="specificity-gt-010" key="specificity-gt-010" align="center flex-start">
    <Heading size={4} fit textColor="background" className="blinking">Specificity > 0.1.0</Heading>
  </Slide>,
  <Slide bgImage="img/its-ok.gif" id="it-s-ok" key="it-s-ok">
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit">It's ok&hellip;</Text>
    </Heading>
    <Heading size={3} margin="400px 0 0">
      <Text textColor="background" textSize="inherit">
        No need to be <em>dogmatic</em>&hellip;
      </Text>
    </Heading>
  </Slide>,
  <Slide id="bem-also-is" key="bem-also-is" transition={[ 'fade' ]}>
    <Heading className="our-header" size={3}>BEM is also&hellip;</Heading>
    <List textColor="text" margin="50px 0 0 100px">
      <ListItem>&hellip; verbose;</ListItem>
      <ListItem>&hellip; &ldquo;manual&rdquo;;</ListItem>
      <ListItem>&hellip; not very readable;</ListItem>
      <ListItem>&hellip; a little boring.</ListItem>
    </List>
  </Slide>
];
