import * as React from 'react';
import { Slide as SpectSlide } from 'spectacle';
import SpectacleItem from '../SpectacleItem';

const Slide = ({ contents }) => {
  const components = contents.map(item => (
    <SpectacleItem key={item.id} type={item.type} {...item.props}>
      {item.content}
    </SpectacleItem>
  ));
  return <SpectSlide>{components}</SpectSlide>;
};

export default Slide;
