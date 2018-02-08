import React from 'react';
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import './style.css';
import 'normalize.css';

import { Cover } from './slides/cover';
import { WhoIAm } from './slides/whoiam';

const theme = createTheme(
  {
    primary: '#f60',
    background: '#fff',
    text: '#595959',
    alt: '#03a9fc'
  },
  {
    primary: 'Raleway',
    secondary: 'system-ui'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={1280}
        contentHeight={960}
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {Cover}
        {WhoIAm}
      </Deck>
    );
  }
}
