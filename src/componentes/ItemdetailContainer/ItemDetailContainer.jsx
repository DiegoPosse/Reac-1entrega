import React , { useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
import { CartContext } from '../../Context/CartContext';


const ItemDetailContainer = ( {itemdetalle} ) => {
  
  const { addItem } = useContext(CartContext);
  const stockArt =itemdetalle[0].stock
  
  const { title, description, price, category, image, id, stock } = itemdetalle[0];
  
  const onAdd = (cantidad) => {
    
    let item = { title, description, price, category, image, id, stock };
      addItem(item, cantidad);
      
  };
  
  const handleVolver = () => {
    window.history.back();
  };

  return (
    
    <div>
      
      <h2>Detalle del producto :</h2>
      <ItemDetail producto={itemdetalle[0]} />
      <ItemCounter cuenta='Cantidad' ValInit={1} stock={stockArt} onAdd={onAdd} />
      <button onClick={handleVolver}>Volver</button>
    </div>
  
  )
}

export default ItemDetailContainer