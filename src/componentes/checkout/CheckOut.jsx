
// import React, { useState } from 'react'
// import Swal from 'sweetalert2'
// import { useNavigate} from 'react-router-dom';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

// import { useCart } from '../../Context/CartContext';
// const firebaseConfig = {
//   apiKey: "AIzaSyD9NHAgEUUoTRrIduo5fXejD5BFhM1HZ7o",
//   authDomain: "e-commerce-25ba4.firebaseapp.com",
//   projectId: "e-commerce-25ba4",
//   storageBucket: "e-commerce-25ba4.appspot.com",
//   messagingSenderId: "894774974938",
//   appId: "1:894774974938:web:202add97b6cce2adf2c8e3"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const Checkout = () => {
//   const { cart, deleteItem, clear } = useCart();
//   const navigate = useNavigate();
//     const [user, setUser]= useState({})
//     const [validate, setValidate]= useState('')

//     const obtenerDatos = (e) =>{
//         setUser({
//             ...user,
//             [e.target.name]:e.target.value
//         })
//     }
    
//     const handleCheckout = async () => {
//       // for (const item of cart) {
//       //   const itemId = item.id;
//       //   const cantidadComprada = item.quantity;

//       //   try {
//       //     const itemRef = firebase.firestore().collection('PowerComputacion').doc(itemId);
//       //     const itemDoc = await itemRef.get();

      
//       //     const stockDisponible = itemDoc.data().stock;

      
//       //     const nuevoStock = stockDisponible - cantidadComprada;

      
//       //     await itemRef.update({ stock: nuevoStock });
//       //   } catch (error) {
//       //     console.error('Error al actualizar el stock:', error);
//       //   }
//       // }
      
//       function discountStock(id, quantity) {
  
//         const product = db.PowerComputacion.findById(id);
//         product.stock -= quantity;
//         db.PowerComputacion.save(product);
//       }
//       function discountCartStock(cart) {
//         for (const item of cart.items) {
//           discountStock(item.productId, item.quantity);
//         }
//       }
//       discountCartStock(cart)
//       localStorage.removeItem("carrito");
//       navigate('/')
      
//      // setCarrito([]);
//     }
    
//   //  const generarOrden = (e) =>{
//   const generarOrden = async (e) =>{
//     e.preventDefault();
//     console.log("compra enviada a pagos" )
//     Swal.fire({
//         icon: 'success',
//         title: 'Confirmado !! Su pago a sido procesado.',
//         showConfirmButton: false,
//         timer: 2500
//       })
//       try {
//         await handleCheckout();
//         navigate('/');
//       } catch (error) {
//         console.error('Error al procesar el checkout:', error);
//       }
//     };
       
      
    
    
  
  
    
//    return(
//     <div>
//     <h2>Terminar compra</h2>
//     <h5>Por favor llenar con sus datos</h5>
//     <form onSubmit={generarOrden}>
//         <div className='mb-3'>
//             <label className='form-label'>Nombre Completo</label>
//             <input className='form-control' type='text' placeholder='Nombre y Apellido' name='name' onChange={obtenerDatos} />
//         </div>
//         <div className='mb-3'>
//             <label className='form-label'>Número de telefono</label>
//             <input className='form-control' type='number' placeholder='+549*********' name='phone' onChange={obtenerDatos} />
//         </div>
//         <div className='mb-3'>
//             <label className='form-label'>Domicilio </label>
//             <input className='form-control' type='text' placeholder='san martin 1550*' name='address' onChange={obtenerDatos} />
//         </div>
//         <div className='mb-3'>
//             <label className='form-label'>Direccion de email</label>
//             <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={obtenerDatos} />
//         </div>
//         <div className='mb-3'>
//             <label className='form-label'>Repita su email</label>
//             <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={(e) => setValidate(e.target.value)} />
//         </div>
//         <div className='mb-3'>
//             <label className='form-label'>Método de pago</label>
//             <select className='form-control' name='paymentMethod' onChange={obtenerDatos}>
//                 <option value='Mercadopago'>Mercadopago</option>
//                 <option value='Tarjeta de crédito'>Tarjeta de crédito</option>
//                 <option value='Transferencia'>Transferencia</option>
//             </select>
//         </div>
//         <button className='btn btn-dark' type='submit' disabled={validate !== user.mail}>Generar Orden</button>
//     </form>
// </div>
//    )
    
  
// }

// export default Checkout
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
//import { getFirestore, collection, addDoc } from 'firebase/firestore'; 

import { useCart } from '../../Context/CartContext';

const firebaseConfig = {
  apiKey: "AIzaSyD9NHAgEUUoTRrIduo5fXejD5BFhM1HZ7o",
  authDomain: "e-commerce-25ba4.firebaseapp.com",
  projectId: "e-commerce-25ba4",
  storageBucket: "e-commerce-25ba4.appspot.com",
  messagingSenderId: "894774974938",
  appId: "1:894774974938:web:202add97b6cce2adf2c8e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Checkout = () => {
  const { cart, deleteItem, clear } = useCart();
  const history = useNavigate();

  const [user, setUser] = useState({});
  const [validate, setValidate] = useState('');

  const obtenerDatos = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  async function handleCheckout() {
    try {
      // Obtener los productos del carrito de Firestore
      const cartItems = await getCartItemsFromFirestore();
      
      // Verificar y actualizar el stock de cada producto en el carrito
      for (const item of cartItems) {
        const itemId = item.id;
        const cantidadComprada = item.quantity;
        
        // Obtener la referencia al documento del producto en Firestore
        const itemRef = doc(db, 'PowerComputacion', itemId);
        
        // Obtener el stock actual del producto
        const itemSnapshot = await getDoc(itemRef);
        
        if (itemSnapshot.exists()) {
          const stockDisponible = itemSnapshot.data().stock;
          
          if (stockDisponible !== undefined) {
            if (stockDisponible >= cantidadComprada) {
              const nuevoStock = stockDisponible - cantidadComprada;
              
              // Actualizar el stock en Firestore
              await updateDoc(itemRef, { stock: nuevoStock });
            } else {
              console.error('No hay suficiente stock disponible para el artículo:', itemId);
            }
          } else {
            console.error('No se pudo obtener el stock del documento:', itemId);
          }
        } else {
          console.error('El documento no existe:', itemId);
        }
      }
      
      // Resto de la lógica para procesar el pago y generar la orden...
    } catch (error) {
      console.error('Error al actualizar el stock:', error);
    }
  }
  const generarOrden = async (e) => {
    e.preventDefault();
    if (!user.name || !user.phone || !user.address || !user.mail || !user.paymentMethod) {
      console.error('estan faltando datos');
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos para finalizar su compra.',
        showConfirmButton: false,
        
      });
      return;
    }
    handleCheckout()
    console.log('compra enviada a pagos');
    try {
      const orderData = {
        items: cart,
        user: {
          name: user.name,
          phone: user.phone,
          address: user.address,
          mail: user.mail,
        },
        paymentMethod: user.paymentMethod,
      };
  
      const ordersCollectionRef = collection(db, 'orders');
      await addDoc(ordersCollectionRef, orderData);
  
      Swal.fire({
        icon: 'success',
        title: 'Confirmado !! Su pago ha sido procesado.',
        showConfirmButton: false,
        timer: 2500,
      });
  
      clear();
      history('/');
    } catch (error) {
      console.error('Error al procesar el checkout:', error);
    }
  };
  

  return (
    <div>
      <h2>Terminar compra</h2>
      <h5>Por favor llenar con sus datos</h5>
      <form onSubmit={generarOrden}>
      <div className='formulario'>
            <label className='form-label'>Nombre Completo</label>
            <input className='form-control' type='text' placeholder='Nombre y Apellido' name='name' onChange={obtenerDatos} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Número de telefono</label>
            <input className='form-control' type='number' placeholder='+549*****' name='phone' onChange={obtenerDatos} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Domicilio </label>
            <input className='form-control' type='text' placeholder='san martin 1550*' name='address' onChange={obtenerDatos} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Direccion de email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={obtenerDatos} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Repita su email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={(e) => setValidate(e.target.value)} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Método de pago</label>
            <select className='form-control' name='paymentMethod' onChange={obtenerDatos} defaultValue=''>
              <option value='' disabled hidden>Selecciona un método de pago</option>
              <option value='Mercadopago'>Mercadopago</option>
              <option value='Tarjeta de crédito'>Tarjeta de crédito</option>
              <option value='Transferencia'>Transferencia</option>
            </select>
        </div>
        <button className='btn btn-dark' type='submit' disabled={validate !== user.mail}>
          Generar Orden
        </button>
      </form>
    </div>
  );
};

export default Checkout;