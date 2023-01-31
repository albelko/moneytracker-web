import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Box, Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Box>
          <Button colorScheme="blue">Button</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
