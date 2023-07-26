import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [rubrosMenuOpen, setRubrosMenuOpen] = useState(false);

  const toggleRubrosMenu = () => {
    setRubrosMenuOpen(!rubrosMenuOpen);
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
          <button className="dropdown-toggle" onClick={toggleRubrosMenu}>
            Rubros
          </button>
          {rubrosMenuOpen && (
            <div className="dropdown-menu">
              <NavLink to='/rubros/joyeria'>
                <span className='link'>Joyería</span>
              </NavLink>
              <NavLink to='/rubros/ropa'>
                <span className='link'>Ropa</span>
              </NavLink>
              <NavLink to='/rubros/computacion'>
                <span className='link'>Computación</span>
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