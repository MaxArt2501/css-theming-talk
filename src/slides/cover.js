import React from 'react';

import {
  Heading,
  Image,
  Slide,
  Text
} from 'spectacle';

export const Cover = (
  <Slide transition={['zoom']} bgImage="img/logo-antreem-contour.svg" bgSize="133% 133%" bgColor="primary" id="cover">
    <Heading size={1} fit caps lineHeight={1} textColor="background">
      Encapsulation and theming
    </Heading>
    <Text margin="1em 0 0" textColor="background" size={1} fit>
      the new frontiers of CSS' latest challenge
    </Text>
    <Text margin="3em 0 0" textColor="background">Massimo Artizzu</Text>
    <Image src="img/cssday.svg" margin="3em auto 0"></Image>
    <Text textColor="text">Faenza, 2018-03-16</Text>
  </Slide>
);
