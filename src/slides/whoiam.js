import React from 'react';
import { css } from 'emotion';

import {
  Image,
  Heading,
  Link,
  Slide,
  Text
} from 'spectacle';

import Columns from '../components/columns';
import Octopus from '../components/octopus';

const octopusClass = css`
  max-width: 400px;
`;

export const WhoIAm = (
  <Slide id="whoiam" key="whoiam">
    <Image src="img/maxart.jpg" width="200px" className="round bordered"></Image>
    <Text textColor="text" margin="2em 0 0">
      Massimo Artizzu
      <Image src="img/github.svg" display="inline" width="1.5em" className="middle-align" margin="0 .25em"></Image>
      <Image src="img/twitter.svg" display="inline" width="1.5em" className="middle-align" margin="0 .25em"></Image>
      @MaxArt2501
    </Text>
    <Text margin="2em auto 1em">Senior developer @</Text>
    <Image src="img/logo-antreem.svg"></Image>
  </Slide>,
  <Slide bgColor="brand" id="hackamirror" key="hackamirror">
    <Columns align="center">
      <div>
        <Heading textColor="background" size={3}>
          Join us <em>today!</em>
        </Heading>
        <Image src="img/hackamirror.svg" margin="1em 0"/>
        <Text textColor="background">Autodromo Enzo e Dino Ferrari</Text>
        <Text textColor="background">Piazza Ayrton Senna da Silva</Text>
        <Text textColor="background" margin="0 0 1em">h. 20:00 - 8:00</Text>
        <Link href="http://hackamirror.com" textSize="60px">hackamirror.com</Link>
      </div>
      <Octopus className={octopusClass}/>
    </Columns>
  </Slide>
);
