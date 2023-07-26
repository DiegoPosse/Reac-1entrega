import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
const ItemDetailContainer = (items) => {
  console.log(items ,"hola")
  return (
    <div>
        <p>Detalle del producto :</p>
        <ItemDetail producto = {items}/>
        <ItemCounter count='Contador' ValInit={1} stock={8}/>
        <button>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetailContainer