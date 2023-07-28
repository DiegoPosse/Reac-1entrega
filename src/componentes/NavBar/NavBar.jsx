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
            <NavLink to='/joyeria'onClick={closeRubrosMenu}>
              <span className='link'>Joyería</span>
            </NavLink>
            <NavLink to='/ropa de hombre' onClick={closeRubrosMenu}>
              <span className='link'>Ropa de hombre</span>
            </NavLink>
            <NavLink to='/ropa de mujer'onClick={closeRubrosMenu}>
              <span className='link'>Ropa de mujer</span>
            </NavLink>
            <NavLink to='/electronica'onClick={closeRubrosMenu}>
              <span className='link'>Electronica</span>
            </NavLink>
          </div>
          )}
        </div>
        <NavLink to='/nosotros'>
          <span className='link'>Acerca de nosotros</span>
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default Navbar;