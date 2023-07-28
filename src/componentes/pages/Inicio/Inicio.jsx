
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const { categorias } = useParams();
  
  console.log(categorias)

  
  const mapCategory = (apiCategory) => {
    switch (apiCategory) {
      case "ropa de hombre":
        return "men's clothing";
      case "ropa de mujer":
        return "women's clothing";
      case 'joyeria':
        return 'jewelery';
      case 'electronica':
        return 'electronics';
      default:
        return '';
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let url = 'https://fakestoreapi.com/products/';

      if (categorias) {
         const mappedCategory = mapCategory(categorias);
        url = `https://fakestoreapi.com/products/category/${mappedCategory}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((json) => setProductos(json));
    }, 2000);
  }, [categorias]);

  return (
    <div className='Main-container'>
      <ItemListContainer greeting='Lista de Productos' datos={productos} />
    </div>
  );
};

export default Inicio;