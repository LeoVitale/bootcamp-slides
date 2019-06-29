import * as React from 'react';
import SpectacleItem from '../SpectacleItem';

const SlideContent = ({ contents }) => {
  const components = contents.map(item => (
    <SpectacleItem key={item.id} type={item.type} animated={item.animated} {...item.props}>
      {item.content}
    </SpectacleItem>
  ));
  return <div>{components}</div>;
};

export default SlideContent;
