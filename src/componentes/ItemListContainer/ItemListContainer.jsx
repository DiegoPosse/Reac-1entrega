import { useEffect, useState } from 'react';



const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => { 
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(json => setProductos(json));
  }, []);

  return ( 
    <>
       <div>
           <h1>{greeting}</h1>
       </div>
       {productos.map((producto) => (
         <div key={producto.id}>  
           <h2>{producto.title}</h2>
           <img src={producto.image} alt={producto.title} />
           <h1>{producto.price}</h1>
         </div>  
       ))}
    </>
  );
}

export default ItemListContainer