import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import {
  Image,
  List,
  ListItem,
  Link,
  Notes,
  Slide,
  Text,
  Heading,
  CodePane
} from 'spectacle';

import Columns from '../components/columns.js';
import BrowserSupport from '../components/browser-support.js';

const DonaldSlogan = styled('div')`
  width: 400px;
  font-weight: bold;
`;

export const CSSEncapsulation = [
  <Slide bgImage="img/blue-red-pill.gif" align="center flex-start" id="style-encapsulation" key="style-encapsulation">
    <Heading className="our-header" size={3}>
      <Text textColor="background" textSize="inherit">Style encapsulation</Text>
    </Heading>
  </Slide>,
  <Slide id="web-components" key="web-components">
    <Heading className="our-header" size={3} margin="0 0 1em">Web Components</Heading>
    <Text textColor="text" textAlign="left">Specifically, <b>Custom Elements</b> and <b>Shadow DOM</b></Text>
    <List textColor="text" textSize="30px" margin="1m 0 0">
      <ListItem><em>True</em> encapsulation;</ListItem>
      <ListItem>small DOM &rArr; simple CSS;</ListItem>
      <ListItem>easy component reusability.</ListItem>
    </List>
  </Slide>,
  <Slide id="what-about-frameworks" key="what-about-frameworks">
    <Notes>
      Some of the concepts ahead will apply to several component-based front-end frameworks too.
      <ul>
        <li>React made CSS-in-JS a choice of life, and caused the birth of a plethora of
          different solutions for style encapsulation. This fragmentation also means that
          theming in react would need not just a talk, but a whole workshop.</li>
        <li>Angular gives freedom to choose between native Shadow DOM, emulated encapsulation
          and simple light DOM. The point is that Angular components are <em>not</em> "ghost"
          in the DOM, but actually stay there.</li>
        <li>Vue is halfway between React and Angular, offering no or emulated encapsulation.</li>
      </ul>
    </Notes>
    <Heading className="our-header" size={3}>What about&hellip;</Heading>
    <Columns>
      <Image src="img/react.svg" margin="1em"></Image>
      <Image src="img/angular.svg" margin="1em"></Image>
      <Image src="img/vue.svg" margin="1em"></Image>
    </Columns>
  </Slide>,
  <Slide id="css-in-js" key="css-in-js">
    <Heading className="our-header" size={3}>CSS-in-JS</Heading>
    <Image src="img/css-in-js.png" margin="1em auto"></Image>
    <Link href="https://github.com/MicheleBertoli/css-in-js">github.com/MicheleBertoli/css-in-js</Link>
  </Slide>,
  <Slide id="passing-props" key="passing-props">
    <Heading className="our-header" size={4}>React example: using props</Heading>
    <CodePane lang="jsx" textSize="30px" margin="1em 0 0" source={`
export class VarButton extends React.Component {
  render() {
    const themeClass = this.props.theme || '';
    return <div className={themeClass}>
      ...
    </div>;
  }
}
`.trim()}></CodePane>
  </Slide>,
  <Slide id="styled-components" key="styled-components">
    <Notes>This is made possible thanks to the new Context API that has been made available since React 16.4</Notes>
    <Heading className="our-header" size={4}>React example: <code>styled-components</code></Heading>
    <CodePane lang="jsx" textSize="25px" margin="1em 0" source={`
const Button = styled.button\`
  background: \${props => props.theme.baseColor};
  color: white;
\`;
Button.defaultProps = {
  theme: { baseColor: 'red' }
};

render(
  <ThemeProvider theme={{ baseColor: 'rebeccapurple' }}>
    <Button>Ok</Button>
  </ThemeProvider>
);
`.trim()}></CodePane>
    <Link href="https://www.styled-components.com/docs/advanced#theming">
      www.styled-components.com/docs/advanced#theming
    </Link>
  </Slide>,
  <Slide id="custom-elements-support" key="custom-elements-support">
    <BrowserSupport
      support={{ chrome: '🙌', firefox: '🏴', edge: '🤔', safari: '👍', samsung: '🙌' }}
      canIUse="custom-elementsv1"></BrowserSupport>
    <Text>&nbsp;</Text>
    <BrowserSupport
      support={{ chrome: '👍', firefox: '🏴', edge: '🤔', safari: '🤞', samsung: '👍' }}
      canIUse="shadowdomv1"></BrowserSupport>
  </Slide>,
  <Slide id="reusability" key="reusability">
    <Heading className="our-header" size={3}>&hellip; component reusability?</Heading>
    <Image src="img/mashup-ui.png" height="400px"></Image>
  </Slide>,
  <Slide bgImage="img/the-wall.jpg" align="center flex-start" id="style-wall" key="style-wall">
    <Heading className="our-header" size={3}>
      <Text textColor="background" textSize="inherit">Can't pass the Wall</Text>
    </Heading>
  </Slide>,
  <Slide id="piercing-encapsulation" key="piercing-encapsulation">
    <Heading className="our-header" size={3}>We need to <em>pierce</em><br/>the encapsulation</Heading>
    <Columns align="center">
      <div>
        <Text textColor="text"><code>/deep/</code>, <code>>>></code>, <code>::shadow</code></Text>
        <CodePane lang="css" textSize="30px" margin="1em 0 0" source={`
cool-modal nice-button /deep/ button {
  border-radius: 0;
}
`.trim()}></CodePane>
      </div>
      <Image src="img/pierce.jpg" height="400px" align="right"></Image>
    </Columns>
  </Slide>,
  <Slide id="deep-nope" key="deep-nope">
    <Heading className="our-header" size={3}>&hellip; but why?!</Heading>
    <List textColor="text" textSize="30px" margin="2em">
      <ListItem><code>/deep/</code> defies the point of encapsulation;</ListItem>
      <ListItem>it's <em>very</em> prone to abuses;</ListItem>
      <ListItem>
        &hellip; you'll have to fight an army of
        <Image src="img/white-walker.png" className={css`
          display: inline;
          height: 1.5em;
          vertical-align: -0.4em;
          margin: 0 .5em;
        `}/>
      </ListItem>
    </List>
    <BrowserSupport support={{ chrome: '…-63', firefox: '❌', edge: '❌', safari: '❌', samsung: '❌' }}></BrowserSupport>
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
    <Link href="demos/host-context-styling/index.html" textSize="40px">🏓</Link>
  </Slide>,
  <Slide id="host-problems" key="host-problems">
    <Heading className="our-header" size={4}>The problem with <code>:host(-context)</code></Heading>
    <List textColor="text">
      <ListItem>Shifts the theming to the <em>component</em>, which means:</ListItem>
      <ListItem>&hellip; it could only give limited choices&hellip;</ListItem>
      <ListItem>&hellip; it's not really fit for a library;</ListItem>
      <ListItem>also, <code>::host-context()</code> isn't liked very much.</ListItem>
    </List>
    <BrowserSupport
      support={{ chrome: '👍', firefox: ':host 🏴', edge: '❌', safari: '❌', samsung: '👍' }}></BrowserSupport>
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
    <Link href="demos/custom-element-styling/index.html" textSize="40px">🏓</Link>
  </Slide>,
  <Slide bgImage="img/weak.gif" align="center flex-start" id="too-weak" key="too-weak">
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit" caps>Too weak</Text>
    </Heading>
  </Slide>,
  <Slide id="html-2-great-again" key="html-2-great-again">
    <Columns align="center">
      <Image src="img/donald.png" width="400px"/>
      <DonaldSlogan>
        <Text fit caps textColor="#0157ae">Make</Text>
        <Text fit caps textColor="#d42729">HTML 2.0</Text>
        <Text fit caps textColor="#0157ae">great</Text>
        <Text fit caps textColor="#d42729">again</Text>
      </DonaldSlogan>
    </Columns>
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
    <Link href="demos/custom-element-theming/index.html" textSize="40px">🏓</Link>
  </Slide>,
  <Slide bgImage="img/jck.gif" align="center flex-end" id="too-strong" key="too-strong">
    <Notes>
      The point is that you can style basically anything inside the component.
        Component developers don't want that.
    </Notes>
    <Heading className="our-header" size={2}>
      <Text textColor="background" textSize="inherit" caps>Too strong</Text>
    </Heading>
  </Slide>,
  <Slide id="why-strong" key="why-strong">
    <Notes>
      The same applies to passing whole CSS text strings and injecting them into
        style elements. Breaking out of scoping context is way too easy.
        Also even passing a class name is potentially destructive (pretty common
        in React or anything without true encapsulation).
    </Notes>
    <Heading className="our-header" size={4}>Also when passing raw CSS</Heading>
    <CodePane lang="html" textSize="25px" margin="1em 0" source={`
<div class="stylable">Just style me!</div>
<div class="unstylable">Can't touch me!</div>
`.trim()}></CodePane>
    <CodePane lang="javascript" textSize="25px" margin="0 0 1em" source={`
customElements.define('style-test', class extends HTMLElement {
  constructor() {
    const style = document.createElement('style');
    style.textContent = \`.stylable {\${this.getAttribute('raw-style')}}\`;
    this.shadowRoot.appendChild(style);
  }
});
`.trim()}></CodePane>
    <CodePane lang="html" textSize="25px" margin="1em 0" source={`
<style-test raw-style="color: red"></style-test>

<style-test
  raw-style="} .unstylable {font-family:'Comic Sans MS'">
</style-test>
`.trim()}></CodePane>
  </Slide>,
  <Slide id="bobby-tables" key="bobby-tables">
    <Notes>
      This can be mitigated with libraries that accept style objects too
      instead of just strings, like glamor or emotion. So you don't pass a class
      that can mess up a component, you'd pass a style object.
    </Notes>
    <Heading className="our-header" size={4}>Sanitize your CSS!</Heading>
    <Image src="img/bobby-tables.png" height="400px" margin="2em auto"/>
    <Text textColor="text">Or, maybe, use a different approach.</Text>
  </Slide>
];
