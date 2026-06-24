
import './App.css';

import { Home } from './componentes/Home';
import { Cliente } from './componentes/cliente/Cliente';
import { Usuario } from './componentes/usuario/Usuario';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ClientContextProvider } from './componentes/cliente/ClientContext';
import { ClientForm } from './componentes/cliente/ClientForm';

function App() {
 
 
  return (

     <ClientContextProvider>

      <BrowserRouter>
    
     <nav className="navbar navbar-expand bg-body-tertiary">
  <div className="container-fluid">
   
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/cliente">Clientes</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usuario">Usuarios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/newcliente" element={<ClientForm />} />
        <Route path="/usuario" element={<Usuario />} />  
      </Routes>
    </BrowserRouter>
      
      
          
        </ClientContextProvider>
    
   
 
  
    
   
    
     
  );
   
}

export default App;
