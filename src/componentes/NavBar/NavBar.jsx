import CartWidget from '../CartWidget/CartWidget'
function Navbar() {
  return (
    <nav>
      <div className="logo"><h1>Power Computación</h1></div>
      <div className='barra'>
          <button>Inicio</button>
          <button>Categorias</button>
          <button>Nosotros</button>    
      </div>
      <CartWidget/>
    </nav>
  );
}

export default Navbar;