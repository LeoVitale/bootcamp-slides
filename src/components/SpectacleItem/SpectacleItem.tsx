import * as React from 'react';
import {
  BlockQuote,
  Cite,
  Heading,
  Image,
  Link,
  Notes,
  Quote,
  Text
} from 'spectacle';

const SpectacleItem = ({ children, type, ...props }) => {
  let Component;
  switch (type) {
    case 'Text':
      Component = Text;
      break;
    case 'Cite':
      Component = Cite;
      break;
    case 'Notes':
      Component = Notes;
      break;
    case 'Quote':
      Component = Quote;
      break;
    case 'BlockQuote':
      Component = BlockQuote;
      break;
    case 'Image':
      Component = Image;
      break;
    case 'Link':
      Component = Link;
      break;
    case 'Heading':
      Component = Heading;
      break;
    default:
      Component = Text;
      break;
  }

  return <Component {...props}>{children}</Component>;
};

export default SpectacleItem;
