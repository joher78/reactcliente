
import './App.css';

import { Home } from './componentes/Home';
import { Cliente } from './componentes/cliente/Cliente';
import { Usuario } from './componentes/usuario/Usuario';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
 

  

  return (
    <>
    
    <BrowserRouter>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/usuario" element={<Usuario />} />  
      </Routes>
    </BrowserRouter>
    </>
     
  );
   
}

export default App;
