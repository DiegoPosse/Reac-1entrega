import React, { createContext, useContext, useState, useEffect } from 'react';
import { addDoc, doc, collection, getDocs, getFirestore, query, where, updateDoc, writeBatch } from 'firebase/firestore';
export const CartContext = createContext();

const productosLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];
export const CartProvider = ({ children }) => {
  //Se inicializa el estado con la variable del localStorage
  const [cart, setCart] = useState(productosLocalStorage);

  //Pongo a la escucha del cambio del estado para actualizar el local storage.
  //Con este useEffect trabajo normal con el estado sin necesidad de volver a modificar el storage nuevamente.
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart]);

  //FUNCION CON ITEM Y QUANTITY
  const addItem = (item, cantidad) => {
    //Aca tengo que evaluar si existe el item el carrito, sumar cantidades
    setCart([...cart, { ...item, quantity: cantidad }]);
  };

  const clear = () => {
    //Borrar el carrito, lo seteo nuevamente como un array vacio
    setCart([]);
  };

  const isInCart = (id) => {
    //Esta funcion tiene que retornar un booleano, por lo que uso some()
    //Si existe el en carrito, devuelve true sino false
    return cart.some((item) => item.id === id);
  };

  const deleteItem = (id) => {
    //Aca elimino un item, recibe por parametro el id, y filtro el array del carrito con todos los id que son distintos al que paso, por lo que ese item con ese id queda fuera del carrito. Clarita la cuenta XD
    setCart(cart.filter((item) => item.id !== id));
  };

  
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        isInCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);