import React , { useContext } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCounter from '../ItemCounter/ItemCounter'
import { CartContext,useCart } from '../../Context/CartContext';
import Swal from 'sweetalert2';


const ItemDetailContainer = ( {itemdetalle} ) => {
  
  const { addItem } = useContext(CartContext);
  const { isInCart } = useContext(CartContext);
  
  const { cart, updateItemQuantity } = useCart();
  const stockArt =itemdetalle[0].stock
  
  const { title, description, price, category, image, id, stock } = itemdetalle[0];
  
  const onAdd = (cantidad) => {
    
    let item = { title, description, price, category, image, id, stock };
    if (isInCart(id)) {
       
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
          container: 'custom-swal-container',
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Este articulo esta en el carrito !! ',
        text: "Desea actualizar la cantidad ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, actualizar !',
        cancelButtonText: 'No, cancelar !',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
           swalWithBootstrapButtons.fire(
             'Actualizado !!',
             'El carrito a sido modificado',
             'success'
            )
            const newQuantity = cantidad; 
            updateItemQuantity(id, newQuantity); 

        } else if (
           result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'el carrito no se ha modicado :)',
          'error'
         )
        }
      })


    }else {
      
      addItem(item, cantidad);
    }
         
  };
  
  const handleVolver = () => {
    window.history.back();
  };

  return (
    
    <div>
      
      <h2>Detalle del producto :</h2>
      <ItemDetail producto={itemdetalle[0]} />
      <ItemCounter cuenta='Cantidad' ValInit={1} stock={stockArt} onAdd={onAdd} />
      <button className='volver' onClick={handleVolver}>Volver</button>
    </div>
  
  )
}

export default ItemDetailContainer