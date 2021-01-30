import styled from 'styled-components'

import Board from './board';
import Controls from './controls';
import Patterns from './patterns';

import img from './background.jpg';

const Container = styled.div`
  display: flex;
  background: url(${img});
`

function App() {
  return (
    <Container>
      <Controls />
      <Board />
      <Patterns />
    </Container>
  );
}

export default App;
