import * as React from 'react';
import { Slide } from 'spectacle';
import SpectacleItem from '../SpectacleItem';

const SlideContent = ({ contents }) => {
  const components = contents.map(item => (
    <SpectacleItem key={item.id} type={item.type} {...item.props}>
      {item.content}
    </SpectacleItem>
  ));
  return <div>{components}</div>;
};

export default SlideContent;
