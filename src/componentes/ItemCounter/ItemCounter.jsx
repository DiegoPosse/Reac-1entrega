

import React, { useState } from 'react';
const ItemCounter = ({ cuenta, ValInit, stock, onAdd }) => {
  const [contador, setContador] = useState(ValInit);

  const sumar = () => {
    if (contador !== stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const handleAddToCart = () => {
      onAdd(contador);
  };

  return (
    <>
      <div className='contador'>
        <h2>{cuenta}</h2>
        <button onClick={restar}>-</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>+</button>
      </div>
      <button
        className="Botoncomprar"
        disabled={contador === 0 || stock === 0}
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCounter;
