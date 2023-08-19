import  { useState, useEffect } from 'react';
import { useCart } from '../../../Context/CartContext';
import Checkout from '../../checkout/CheckOut';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, deleteItem, clear } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);
  const handleDeleteItem = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
        container: 'custom-swal-container',
      },
      buttonsStyling: false
    })
  
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de borrar   ?',
      text: "se eliminara el item del carrito!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrar !',
      cancelButtonText: 'No, cancelar !',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'el articulo a sido removido del carrito.',
          'success'
          
        )
  
        deleteItem(id);
        
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Accion cancelada, no hay cambios.)',
          'error'
        )
      }
    })
  
  
  };

  const handleClearCart = () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger',
          container: 'custom-swal-container',
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de borrar   ?',
        text: "se eliminaran los items del carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Borrar !',
        cancelButtonText: 'No, cancelar !',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
           swalWithBootstrapButtons.fire(
             'Eliminados',
             'el carrito a sido limpiado.',
             'success'
            )
            clear();
            setIsProcessing(false);
            navigate('/');
           

        } else if (
           result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'el carrito no se ha borrado :)',
          'error'
         )
        }
      }) 
  };
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const handleProcessPurchase = () => {
    setIsProcessing(true);
   
    console.log('Compra procesada');
    setIsCheckoutVisible(true);
  };

  const total = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);



return (
  <div className="carrito">
    <h2>Carrito de Compras</h2>
    <table className="articulos">
      <thead>
        <tr>
          <th></th>
          <th>Articulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          const subtotal = item.price * item.quantity;

          return (
            <tr key={item.id} className="articulo">
              <td>
                <img src={item.image} alt={item.title} width="50px" height="auto" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${subtotal}</td>
              <td>
                <button  onClick={() => handleDeleteItem(item.id)} disabled={isProcessing}>Eliminar </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <div className="subtotal">
      <h2>Total: ${total}</h2>
    </div>
    <div className="button-container">
      <button onClick={handleClearCart} disabled={isProcessing}>Eliminar todo</button>
      <button onClick={handleProcessPurchase}>Procesar compra</button>
      {cart.length > 0 && isCheckoutVisible && <Checkout />}
    </div>
  </div>
);
};
export default Cart;
