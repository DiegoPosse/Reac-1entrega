import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({productos}) => {
  return (
    <>
        {productos.map((producto) => (
        <div className='item' key={producto.id}>
          <h2>{producto.title}</h2>
          <img src={producto.image} alt={producto.title} width="200px" height="200px" />
          <h1>{producto.price}</h1>
          <Link to={`/detalle/${producto.id}`}>
        <div>Ver Detalle</div>
      </Link>
        
        </div>
      ))}
    </>
  )
}


export default ItemList
