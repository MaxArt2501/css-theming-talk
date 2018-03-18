import React, { Fragment } from 'react';
import { Heading, Slide, Text } from 'spectacle';

import CoverLogo from '../components/cover-logo';
import { isCSSDay, isMFM, isFEVR } from '../status';

export const Cover = (
  <Slide transition={['zoom']} bgImage="img/logo-antreem-contour.svg" bgSize="133% 133%" bgColor="brand" id="cover">
    <Heading size={1} fit caps lineHeight={1} textColor="background">
      Encapsulation and theming
    </Heading>
    <Text margin="1em 0 0" textColor="background" size={1} fit>
      the new frontiers of CSS' latest challenge
    </Text>
    <Text margin="3em 0 0" textColor="background">Massimo Artizzu</Text>
    <CoverLogo/>
  </Slide>
);
