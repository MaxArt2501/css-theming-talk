import React from 'react';

import {
  Image,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';

import { css } from 'emotion';

import Columns from '../components/columns';
import Octopus from '../components/octopus';
import QRCode from '../components/qrcode';

// !important because styling Spectacle is hell
const itemClass = css`
  text-indent: -1.33em;
  line-height: normal !important;
  margin: .5em 0;
  font-size: 100%;
`;

export const Linkography = [
  <Slide id="links-1" key="links-1">
    <Heading className="our-header" size={4}>Linkography - 1</Heading>
    <List margin="1em 2em">
      <ListItem textColor="text" className={itemClass}>
        Why I Abandoned @apply - Tab Atkins-Bittner<br/>
        <Link href="https://www.xanthir.com/b4o00">www.xanthir.com/b4o00</Link>
      </ListItem>
      <ListItem textColor="text" className={itemClass}>
        ::part and ::theme, an ::explainer - Monica Dinculescu<br/>
        <Link href="https://meowni.ca/posts/part-theme-explainer/">meowni.ca/posts/part-theme-explainer</Link>
      </ListItem>
      <ListItem textColor="text" className={itemClass}>
        CSS Shadow Parts - W3C<br/>
        <Link href="https://drafts.csswg.org/css-shadow-parts/">drafts.csswg.org/css-shadow-parts</Link>
      </ListItem>
      <ListItem textColor="text" className={itemClass}>
        Microsoft Edge Developer (please vote!)<br/>
        <Link href="https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer">
          wpdev.uservoice.com/forums/257854-microsoft-edge-developer
        </Link>
      </ListItem>
    </List>
  </Slide>,
  <Slide id="links-2" key="links-2">
    <Heading className="our-header" size={4}>Linkography - 2</Heading>
    <Heading size={5} textColor="text" margin="1em 0 0">You can find this presentation on</Heading>
    <Link textSize="150%" href="https://github.com/MaxArt2501/css-theming-talk">github.com/MaxArt2501/css-theming-talk</Link>
    <QRCode text="https://github.com/MaxArt2501/css-theming-talk" width={300}/>
  </Slide>,
  <Slide id="links-3" key="links-3">
    <Heading className="our-header" size={4} margin="0 0 1em">Vote this talk and comment!</Heading>
    <Link textSize="150%" href="https://joind.in/event/cssday-2018/incapsulamento-e-theming-le-nuove-frontiere-dellultima-sfida-css">
      joind.in/event/cssday-2018/incapsulamento-e-theming-le-nuove-frontiere-dellultima-sfida-css
    </Link>
    <QRCode text="https://joind.in/event/cssday-2018/incapsulamento-e-theming-le-nuove-frontiere-dellultima-sfida-css" width={300}/>
  </Slide>,
  <Slide id="links-4" key="links-4">
    <Heading className="our-header" size={4} margin="0 0 1em">Don't forget the hackathon!</Heading>
    <Columns align="center">
      <QRCode text="https://hackamirror.com" width={400}/>
      <Octopus/>
    </Columns>
  </Slide>
];
