import * as React from 'react';
import { render } from 'react-dom';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Presentation from './components/Presentation';

import { Section1, Apresentacao } from './slides';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    padding: 0;
    background-color: white;
  }
`;

const slides = [...Section1, ...Apresentacao];

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Presentation slides={slides} />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
