import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import RouteSwitch from './components/RouteSwitch';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <RouteSwitch />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
