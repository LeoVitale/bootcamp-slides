import * as React from 'react';
import { Deck, Slide } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import SlideContent from '../SlideContent';
import { Container } from './styles';

const theme = createTheme(
  {
    primary: '#B1CC15'
  },
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
      <Deck theme={theme} transition={['slide']} transitionDuration={500} controls={false}>
        {slides
          .filter(slide => slide.contents)
          .map(slide => (
            <Slide key={slide.id} {...slide.props} transition={['slide']}>
              <SlideContent contents={slide.contents}/>
            </Slide>
          ))}
      </Deck>
    </Container>
  );
};

export default Presentation;
