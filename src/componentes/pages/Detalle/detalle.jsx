import React, {useState,useEffect} from 'react'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Detalle = () => {
  const [producto, setProducto] = useState('');
  const {id} = useParams();
  
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
      
     setProducto(json); 
    })
    .catch(error => {
      console.error('Ocurrió un error al obtener la respuesta JSON:', error);
    })
  }, [id]);
  
  return (
   
    <ItemDetailContainer itemdetalle={producto}/>
  )
}

export default Detalle