

import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';

const ItemCounter = ({ cuenta, ValInit, stock, onAdd }) => {
  const [contador, setContador] = useState(ValInit);
  const { isInCart } = useCart();

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
    if (!isInCart()) {
      onAdd(contador);
    } else {
      console.log('El item ya está en el carrito');
    }
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
// const ItemCounter = ({cuenta,ValInit,stock,onAdd}) => {
// const [contador,setcontador]= useState(ValInit)  
// const sumar = () => {
//     if(contador !=stock){
//         setcontador(contador+1)
//     }
    
// } 
// const restar = () => {
//     if(contador >0){
//         setcontador(contador-1)
//     }
//     }
//     const handleAddToCart = () => {
//       if (!isInCart()) {
//         onAdd(contador);
//       } else {
//         console.log('El item ya está en el carrito');
//       }
//     };

//   return (
//     <>
//     <div>
//         <p>{cuenta}</p>
//         <button onClick={restar}>-</button>
//         <span>{contador}</span>
//         <button onClick={sumar}>+</button>
//     </div>
//     <button
//     className="Botoncomprar"
//     disabled={contador === 0 || stock === 0}
//     onClick={() => onAdd(contador)}
//   >
//     Agregar al carrito
//   </button>
//   </>
//   )
// }

// export default ItemCounter