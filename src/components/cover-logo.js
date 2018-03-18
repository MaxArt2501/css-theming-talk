import React, { Fragment } from 'react';
import { Image, Text } from 'spectacle';
import { css } from 'emotion';

import { isCSSDay, isMFM, isFEVR } from '../status';

export default function CoverLogo() {
  if (isCSSDay) {
    return <Fragment>
      <Image src="img/cssday.svg" margin="3em auto 0"/>
      <Text textColor="text">Faenza, 2018-03-16</Text>
    </Fragment>;
  }
  if (isMFM) {
    return <Fragment>
      <Image src="img/mfm.svg" margin="3em auto .5em" padding="10px" width="300px" bgColor="white"/>
      <Text textColor="background">Milano, 2018-03-27</Text>
    </Fragment>;
  }
  if (isFEVR) {
    return <Fragment>
      <Image src="img/fevr.png" margin="2em auto .5em"/>
      <Text textColor="text">Verona, 2018</Text>
    </Fragment>;
  }
  return <Image src="img/logo-antreem-white.svg" margin="2em auto 0"/>
}
