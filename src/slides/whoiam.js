import React from 'react';
import { css } from 'emotion';

import {
  Image,
  Heading,
  Slide,
  Text
} from 'spectacle';

import Columns from '../components/columns';
import Octopus from '../components/octopus';

const octopusClass = css`
  max-width: 400px;
`

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
    <Columns>
      <div>
        <Heading textColor="background" size={3}>
          Join us <em>today!</em>
        </Heading>
      </div>
      <Octopus className={octopusClass}/>
    </Columns>
  </Slide>
);
