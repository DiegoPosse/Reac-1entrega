import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

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
  const history = useHistory();
    const [user, setUser]= useState({})
    const [validate, setValidate]= useState('')

    const obtenerDatos = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    
   const generarOrden = (e) =>{
    e.preventDefault();
    console.log("compra enviada a pagos" )
    Swal.fire({
        icon: 'success',
        title: 'Confirmado !! Su pago a sido procesado.',
        showConfirmButton: false,
        timer: 2500
      })
      handleCheckout()  
      
      const handleCheckout = async () => {
        // for (const item of cart) {
        //   const itemId = item.id;
        //   const cantidadComprada = item.quantity;
  
        //   try {
        //     const itemRef = firebase.firestore().collection('PowerComputacion').doc(itemId);
        //     const itemDoc = await itemRef.get();
  
        
        //     const stockDisponible = itemDoc.data().stock;
  
        
        //     const nuevoStock = stockDisponible - cantidadComprada;
  
        
        //     await itemRef.update({ stock: nuevoStock });
        //   } catch (error) {
        //     console.error('Error al actualizar el stock:', error);
        //   }
        // }
      
        
       // setCarrito([]);
      //}
      discountCartStock(cart)
      function discountStock(id, quantity) {

        const product = db.PowerComputacion.findById(id);
        product.stock -= quantity;
        db.PowerComputacion.save(product);
      }
      function discountCartStock(cart) {
        for (const item of cart.items) {
          discountStock(item.productId, item.quantity);
        }
      }
      localStorage.removeItem("carrito");
      history.push('/');
  }
  }
    
   return(
    <div>
    <h2>Terminar compra</h2>
    <h5>Por favor llenar con sus datos</h5>
    <form onSubmit={generarOrden}>
        <div className='mb-3'>
            <label className='form-label'>Nombre Completo</label>
            <input className='form-control' type='text' placeholder='Nombre y Apellido' name='name' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Número de telefono</label>
            <input className='form-control' type='number' placeholder='+549*********' name='phone' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Domicilio </label>
            <input className='form-control' type='text' placeholder='san martin 1550*' name='address' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Direccion de email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Repita su email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={(e) => setValidate(e.target.value)} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Método de pago</label>
            <select className='form-control' name='paymentMethod' onChange={obtenerDatos}>
                <option value='Mercadopago'>Mercadopago</option>
                <option value='Tarjeta de crédito'>Tarjeta de crédito</option>
                <option value='Transferencia'>Transferencia</option>
            </select>
        </div>
        <button className='btn btn-dark' type='submit' disabled={validate !== user.mail}>Generar Orden</button>
    </form>
</div>
   )
    
  
}

export default Checkout