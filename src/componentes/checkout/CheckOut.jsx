

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Importar 'addDoc' para agregar documentos

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