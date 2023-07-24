import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ItemDetail = () => {
  const [producto, setProducto] = useState(null);
  const {id} = useParams();
  console.log('id:', id)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
      if (json && json.length > 0) {
        setProducto(json);
      } else {
        console.error('La respuesta JSON está vacía o no es válida');
      }
    })
    .catch(error => {
      console.error('Ocurrió un error al obtener la respuesta JSON:', error);
    });
  }, [id]);

  return (
    <div>
      {producto ? (
        <>
          <h2>{producto.title}</h2>
          <img src={producto.image} alt={producto.title} />
          <h1>{producto.description}</h1>
          <h1>{producto.rating}</h1>
          <h1>{producto.price}</h1>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default ItemDetail;