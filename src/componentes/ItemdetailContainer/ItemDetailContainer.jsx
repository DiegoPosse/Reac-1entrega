import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
const ItemDetailContainer = ({ itemdetalle }) => {
  
  return (
    <div>
        <p>Detalle del producto :</p>
        <ItemDetail producto={itemdetalle}/>
        <ItemCounter cuenta='Cantidad' ValInit={1} stock={8}/>
        <button>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetailContainer