import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import RouteSwitch from './components/RouteSwitch';
import Header from './components/Header';
import { useState } from 'react';
import './App.css';

function App() {
  const [ cart, setCart] = useState([]);

  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Header cart={cart}/>
          <RouteSwitch cart={cart} setCart={setCart}/>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
