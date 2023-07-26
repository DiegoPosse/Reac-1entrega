import React, {useState,useEffect} from 'react'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => setProductos(json));
    }, 2000);
  }, []);
  return (
    <div className='Main-container'>
      <ItemListContainer greeting='Lista de Productos'
      datos={productos}
       />
    </div>
    // categorias = men's clothing , jewelery , electronics ,women's clothing
  
    )
}
export default Inicio
