// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// import { Slide as NewSlide } from './components/custom/slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

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
        <Slide transition={['zoom']} bgImage="img/logo-antreem-contour.svg" bgSize="133% 133%" bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="background">
            Encapsulation and theming
          </Heading>
          <Text margin="10px 0 0" textColor="background" size={1} fit bold>
            the new frontiers of CSS' latest challenge
          </Text>
          <Image src="img/cssday.svg" margin="6em auto 0"></Image>
          <Text textColor="text">Faenza, 2018-03-16</Text>
        </Slide>
      </Deck>
    );
  }
}
