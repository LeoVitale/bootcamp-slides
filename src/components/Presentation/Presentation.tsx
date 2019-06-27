import * as React from 'react';
import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Slide from '../Slide';
import { Container } from './styles';

const theme = createTheme(
  {},
  {
    primary: {
      name: 'Cairo',
      googleFont: true,
      styles: ['300', '400', '600']
    }
  }
);

const Presentation = ({ slides }) => {
  return (
    <Container>
      <Deck theme={theme} transition={['slide']} transitionDuration={500}>
        {slides
          .filter(slide => slide.contents)
          .map(slide => (
            <Slide key={slide.id} contents={slide.contents} />
          ))}
      </Deck>
    </Container>
  );
};

export default Presentation;
