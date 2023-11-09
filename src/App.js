import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter } from 'react-router-dom'
// import Login from "./pages/Login/Login.js"
// import Home  from "./pages/Home/Home.js";
// import Cadastro  from './pages/Cadastro/Cadastro.js'
// import Perfil from './pages/Perfil/Perfil.js';
// import Entrada from './pages/Entrada/Entrada.js'
import Rotas from './Routes/Routes.js'
import Playlist from './pages/Playlist/Playlist.js';
import Segunda from './pages/Segunda/Segunda.js'
import Terceira from './pages/Terceira/Terceira.js';


function App() {
  return (
    <>
    
      <ChakraProvider>
        <Rotas/>
        
      </ChakraProvider>
     
              
      
      
    </>
  );
}

export default App;