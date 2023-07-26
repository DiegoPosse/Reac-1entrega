import React, {useState,useEffect} from 'react'
import ItemDetailContainer from '../../ItemdetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Detalle = () => {
  const [producto, setProducto] = useState(null);
  const {id} = useParams();
  
  console.log('id de producto:', id)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(json => {
      console.log(json,"json con id")
     setProducto(json); 
    })
    .catch(error => {
      console.error('Ocurrió un error al obtener la respuesta JSON:', error);
    })
  }, [id]);
  return (
    <ItemDetailContainer
    itemdetalle = {producto}
    />
  )
}

export default Detalle