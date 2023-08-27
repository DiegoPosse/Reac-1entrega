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
          let currentQuantity = 0;
          const currentItem = cart.find(item => item.id === id);
          if (currentItem) {
            currentQuantity = currentItem.quantity; 
          }
          const newQuantity = cantidad;
          const suma = currentQuantity + newQuantity;
          const resto =  stock - currentQuantity
          if (suma > stock) {
            Swal.fire({
              icon: 'error',
              title: 'No hay suficiente stock disponible',
              text: 'ya hay '+currentQuantity+' en el carrito'+
              ' solo puede agregar '+ resto +' como maximo'
              
            }) ;
           }
           else{
            
               swalWithBootstrapButtons.fire(
               'Actualizado !!',
               'El carrito a sido modificado',
               'success'
               )
               updateItemQuantity(id, newQuantity); 
          }
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
      if (stock <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'No hay stock disponible',
          text: 'No se puede agregar el artículo al carrito',
        }) ;
       }
       else{    
        addItem(item, cantidad);
        Swal.fire({
          icon: 'success',
          title: 'Articulo agregado al carrito.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
         
  };
  
  const handleVolver = () => {
    window.history.back();
  };

  return (
    
    <div className='detalle'>
      
      <h2>Detalle del producto :</h2>
      <ItemDetail producto={itemdetalle[0]} />
      <ItemCounter cuenta='Cantidad' ValInit={1} stock={stockArt} onAdd={onAdd} />
      <button className='volver' onClick={handleVolver}>Volver</button>
    </div>
  
  )
}

export default ItemDetailContainer