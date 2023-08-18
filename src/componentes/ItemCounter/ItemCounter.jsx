

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
      <div>
        <p>{cuenta}</p>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
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
