import React from 'react';
import { GlobalStyles, Container } from './styles/Global';
import { ExperienceBar } from './components/ExperienceBar';

function App() {
  return (
    <Container>
      <ExperienceBar />
      <GlobalStyles />
    </Container>
  )
}

export { App };
