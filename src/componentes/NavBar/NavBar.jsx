import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

  function Navbar() {
  const [rubrosMenuOpen, setRubrosMenuOpen] = useState(false);
  
  const toggleRubrosMenu = () => {
    setRubrosMenuOpen(!rubrosMenuOpen);
  };
  const closeRubrosMenu = () => {
    setRubrosMenuOpen(false);
  };
  return (
    <nav id='navbar'>
      <div className="logo">
        <h1>Power Computación</h1>
        <img src="..\src\assets\logo.jpeg" alt="logopower" width="50px" height="50px"/>
  
      </div>
      <div className="nav-links">
        <NavLink to='/'>
          <span className='link'>Inicio</span>
        </NavLink>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleRubrosMenu} >
            Rubros
          </button>
          {rubrosMenuOpen && (
            <div className="dropdown-menu">
            <NavLink to='/mothers'onClick={closeRubrosMenu}>
              <span className='link'>Placas Madre</span>
            </NavLink>
            <NavLink to='/procesadores' onClick={closeRubrosMenu}>
              <span className='link'>Procesadores</span>
            </NavLink>
            <NavLink to='/memorias'onClick={closeRubrosMenu}>
              <span className='link'>Memorias</span>
            </NavLink>
            <NavLink to='/placas de video'onClick={closeRubrosMenu}>
              <span className='link'>Placas de video</span>
            </NavLink>
            <NavLink to='/discos'onClick={closeRubrosMenu}>
              <span className='link'>Discos</span>
            </NavLink>
          </div>
          )}
        </div>
        <NavLink to='/nosotros'>
          <span className='link'>Acerca de nosotros</span>
        </NavLink>
        <NavLink to='/Cart'>
          <span className='link'>Carrito</span>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;