import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Checkout = () => {
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
        
      
      
      localStorage.removeItem("carrito");
      carrito = []

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
            <input className='form-control' type='number' placeholder='+54985131654564' name='phone' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Direccion de email</label>
            <input className='form-control' type='email' placeholder='lala@lala.com' name='mail' onChange={obtenerDatos} />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Repita su email</label>
            <input className='form-control' type='email' placeholder='lala@lala.com' name='mail' onChange={(e) => setValidate(e.target.value)} />
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