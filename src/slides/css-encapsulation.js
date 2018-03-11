import React from 'react';
import {
  Image,
  List,
  ListItem,
  Link,
  Slide,
  Text,
  Heading,
  CodePane
} from 'spectacle';

import Columns from '../components/columns.js';

export const CSSEncapsulation = [
  <Slide bgImage="img/blue-red-pill.gif" align="center flex-start" id="style-encapsulation" key="style-encapsulation">
    <Heading className="our-header" size={3}>
      <Text textColor="background" textSize="inherit">Style encapsulation</Text>
    </Heading>
  </Slide>,
  <Slide id="web-components" key="web-components">
    <Heading className="our-header" size={3}>Web Components</Heading>
    <List textColor="text" textSize="30px" margin="3em 0 0 2em">
      <ListItem>Achieve <em>true</em> encapsulation;</ListItem>
      <ListItem>small DOM &rArr; simple CSS;</ListItem>
      <ListItem>allows easy component reusability.</ListItem>
    </List>
  </Slide>,
  <Slide id="reusability" key="reusability">
    <Heading className="our-header" size={3}>&hellip; component reusability?</Heading>
    <Image src="img/mashup-ui.png" height="400px"></Image>
  </Slide>,
  <Slide id="piercing-encapsulation" key="piercing-encapsulation">
    <Heading className="our-header" size={3}>We need to <em>pierce</em><br/>the encapsulation</Heading>
    <Columns align="center">
      <CodePane lang="css" textSize="30px" source={`
cool-modal nice-button /deep/ button {
  border-radius: 0;
}
`.trim()}></CodePane>
      <Image src="img/pierce.jpg" height="400px" align="right"></Image>
    </Columns>
  </Slide>,
  <Slide id="deep-nope" key="deep-nope">
    <Heading className="our-header" size={3}>&hellip; but why?!</Heading>
    <List textColor="text" textSize="30px" margin="3em 0 2em 2em">
      <ListItem><code>/deep/</code> defies the point of encapsulation;</ListItem>
      <ListItem>it's <em>very</em> prone to abuses;</ListItem>
      <ListItem>kittens cry 😿</ListItem>
    </List>
    <Text textColor="text" textSize="45px" textAlign="left">Support has finally been pulled from Chrome</Text>
    <Text textColor="text" textSize="30px" textAlign="left">Soon in Angular too</Text>
  </Slide>,
  <Slide id="host-context" key="host-context">
    <Heading className="our-header" size={4} margin="0 0 1em">
      <code>:host()</code> and <code>:host-context()</code>
    </Heading>
    <Text textColor="text" textSize="45px" textAlign="left">
      Shifting the control from the <em>parent</em> to the <em>child</em>
    </Text>
    <Columns>
      <div>
        <CodePane lang="css" textSize="25px" margin="1em 0 0" source={`
:host(.hell-yeah-🤘) {
  border-radius: .25em;
}
    `.trim()}></CodePane>
        <CodePane lang="html" textSize="25px" margin="1em 0 0" source={`
<cool-button class="hell-yeah-🤘">
</cool-button>
    `.trim()}></CodePane>
      </div>
      <div>
        <CodePane lang="css" textSize="25px" margin="1em 0 0" source={`
:host-context(.colorfest-theme-🌈) {
  border-radius: .25em;
}
    `.trim()}></CodePane>
        <CodePane lang="html" textSize="25px" margin="1em 0 1em" source={`
<body class="colorfest-theme-🌈">
  ...
  <cool-button></cool-button>
</body>
    `.trim()}></CodePane>
      </div>
    </Columns>
    <Link href="https://host-context-styling.glitch.me/" textSize="40px">host-context-styling.glitch.me</Link>
  </Slide>,
  <Slide id="host-problems" key="host-problems">
    <Heading className="our-header" size={4}>The problem with <code>:host(-context)</code></Heading>
    <List textColor="text">
      <ListItem>Shifts the theming to the <em>component</em>, which means:</ListItem>
      <ListItem>&hellip; it could only give limited choices&hellip;</ListItem>
      <ListItem>&hellip; it's not really fit for a library.</ListItem>
    </List>
  </Slide>,
  <Slide id="so-what-custom-elements" key="so-what-custom-elements">
    <Heading size={3} textColor="text"><em>Components</em> should expose an interface to style them</Heading>
  </Slide>,
  <Slide id="custom-example" key="custom-example">
    <Heading className="our-header" size={5}>With parameters</Heading>
    <CodePane lang="javascript" textSize="30px" margin="1em 0" source={`
customElements.define('var-button', class extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    const btn = document.createElement('button');
    btn.textContent = this.textContent;
    root.appendChild(btn);
    btn.style.color = this.getAttribute('color');
  }
});
`.trim()}></CodePane>
    <CodePane lang="html" textSize="30px" margin="0 0 1em" source={`
<var-button color="navy">So cool!</var-button>
`.trim()}></CodePane>
    <Link href="https://custom-element-styling.glitch.me/" textSize="40px">custom-element-styling.glitch.me</Link>
  </Slide>,
  <Slide id="expose-all-the-things" key="expose-all-the-things">
    <Image src="img/expose-att.png"/>
  </Slide>,
  <Slide id="expose-all-the-things-really" key="expose-all-the-things-really">
    <Image src="img/expose-all-tt.png"/>
  </Slide>,
  <Slide id="custom-theme" key="custom-theme">
    <Heading className="our-header" size={5}><code>theme</code> parameter</Heading>
    <CodePane lang="javascript" textSize="25px" margin="1em 0" source={`
customElements.define('var-button', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    ...
    this.setTheme(this.getAttribute('theme'))
  }
  async setTheme(theme) {
    const { buttonCss } = await import(\`./themes/\${theme}.js\`);
    const style = document.createElement('style');
    style.textContent = buttonCss;
    this.shadowRoot.appendChild(style);
  }
});
`.trim()}></CodePane>
    <CodePane lang="html" textSize="25px" margin="0 0 1em" source={`
<var-button theme="material">So cool!</var-button>
`.trim()}></CodePane>
    <Link href="https://custom-element-theming.glitch.me/" textSize="40px">custom-element-theming.glitch.me</Link>
  </Slide>,
  <Slide bgImage="img/jck.gif" align="center flex-end" id="too-strong" key="too-strong">
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit" caps>Too strong</Text>
    </Heading>
  </Slide>
];
