import React from 'react';

import {
  Image,
  Slide,
  Text
} from 'spectacle';

export const WhoIAm = (
  <Slide bgColor="background" id="whoiam">
    <Image src="img/maxart.jpg" width="200px" className="round bordered"></Image>
    <Text textColor="text" margin="2em 0 0">
      Massimo Artizzu
      <Image src="img/github.svg" display="inline" width="1.5em" className="middle-align" margin="0 .25em"></Image>
      <Image src="img/twitter.svg" display="inline" width="1.5em" className="middle-align" margin="0 .25em"></Image>
      @MaxArt2501
    </Text>
    <Text margin="2em auto 1em">Senior developer @</Text>
    <Image src="img/logo-antreem.svg"></Image>
  </Slide>
);
