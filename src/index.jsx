import * as React from 'react';
import { render } from 'react-dom';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Presentation from './components/Presentation';

import { Apresentacao, Proposta, Regras, FrontEndDevs, Ferramentas, HandsOn } from './slides';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    padding: 0;
    background-color: white;
  }
`;

const slides = [...Apresentacao, ...Proposta, ...Regras, ...FrontEndDevs, ...Ferramentas, ...HandsOn];

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
