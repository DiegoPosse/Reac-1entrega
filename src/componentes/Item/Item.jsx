import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetailContainer from '../ItemdetailContainer/ItemDetailContainer';
const Item = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      setTimeout(() => {
        fetch('https://fakestoreapi.com/products/')
          .then(res => res.json())
          .then(json => setProductos(json));
      }, 2000);
    }, []);  
  return (
    < >
      
      {productos.map((producto) => (
        <div className='item' key={producto.id}>
          <h2>{producto.title}</h2>
          <img src={producto.image} alt={producto.title} width="200px" height="200px" />
          <h1>{producto.price}</h1>
          <button onClick={() => ItemDetailContainer({ itemid: producto.id })}>Ver detalle</button>
        </div>
      ))}
    </>


  )
}

export default Item