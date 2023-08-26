

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { query, where } from 'firebase/firestore';
import { getFirestore, collection, addDoc, getDocs,  updateDoc , serverTimestamp} from 'firebase/firestore';
import { useCart } from '../../Context/CartContext';

const Checkout = () => {
  const { cart,  clear } = useCart();
  const history = useNavigate();

  const [user, setUser] = useState({});
  const [validate, setValidate] = useState('');

 
  
  const userDat = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  

    const decrementStock = async (id, quantity) => {
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

      const productosCollection = collection(db, 'PowerComputacion');

      const q = id ? query(productosCollection, where('id', '==', id)) : productosCollection;

      const querySnapshot = await getDocs(q);
      const doc = querySnapshot.docs[0];
      const currentStock = doc.data().stock;
      const newStock = currentStock - quantity;
      
      await updateDoc(doc.ref, {
        stock: newStock,
      });
    };


  
  const generarOrden = async (e) => {
    e.preventDefault();
    
    if (!user.name || !user.phone || !user.address || !user.mail || !user.paymentMethod) {
      
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos para finalizar su compra.',
        showConfirmButton: false,
      });
      return;
    }
    cart.forEach((producto) => {
      
      decrementStock(producto.id, producto.quantity);
    });
    
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
        createdAt: serverTimestamp(),
        purchaseDate: new Date().toLocaleDateString(), 
      };
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
      const ordersCollectionRef = collection(db, 'orders');
      const docRef = await addDoc(ordersCollectionRef, orderData);
      const orderId = docRef.id; 
      
      
  
      Swal.fire({
        icon: 'success',
        title: `Confirmado !! Su pago ha sido procesado. Número de orden: ${orderId}
        Muy pronto recibirá un correo con los datos para proceder !! 
        Gracias  por su compra !!!`,
        showConfirmButton: true,
       
      });
      
      clear();
      history('/');
    } catch (error) {
      console.error('Error al procesar el checkout:', error);
    }
  }; 

  return (
    <div>
      <h2>Complete el formulario con sus datos para continuar</h2>
      <form onSubmit={generarOrden}>
      <div className='formulario'>
            <label className='form-label'>Nombre Completo</label>
            <input className='form-control' type='text' placeholder='Nombre y Apellido' name='name' onChange={userDat} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Número de telefono</label>
            <input className='form-control' type='number' placeholder='+549*****' name='phone' onChange={userDat} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Domicilio </label>
            <input className='form-control' type='text' placeholder='san martin 1550*' name='address' onChange={userDat} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Direccion de email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={userDat} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Repita su email</label>
            <input className='form-control' type='email' placeholder='rrrr@rrrr.com' name='mail' onChange={(e) => setValidate(e.target.value)} />
        </div>
        <div className='formulario'>
            <label className='form-label'>Método de pago</label>
            <select className='form-control' name='paymentMethod' onChange={userDat} defaultValue=''>
              <option value='' disabled hidden>Selecciona un método de pago</option>
              <option value='Mercadopago'>Mercadopago</option>
              <option value='Tarjeta de crédito'>Tarjeta de crédito</option>
              <option value='Transferencia'>Transferencia</option>
            </select>
        </div>
        <button className='boton_orden' type='submit' disabled={validate !== user.mail}>
          Generar Orden
        </button>
      </form>
    </div>
  );
};

export default Checkout;