
import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const productosLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(productosLocalStorage);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item, cantidad) => {
    setCart([...cart, { ...item, quantity: cantidad }]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        clear,
        isInCart,
        deleteItem,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);