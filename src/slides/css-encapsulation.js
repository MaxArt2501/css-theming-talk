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
  <Slide id="resusability" key="resusability">
    <Heading className="our-header" size={3}>&hellip; component reusability?</Heading>
    <Image src="img/mashup-ui.png" height="400px"></Image>
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
  </Slide>
];
