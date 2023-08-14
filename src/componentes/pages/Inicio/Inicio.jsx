
// import  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ItemListContainer } from '../../ItemListContainer/ItemListContainer';
// import Loader from '../../Loader/loader';
// const Inicio = () => {
//   const [productos, setProductos] = useState([]);
//   const { categorias } = useParams();
//   const [loading, setLoading] = useState(false);

  

//   useEffect(() => {
//     setLoading(true)
//     setTimeout(() => {
//       let url = 'https://fakestoreapi.com/products/';

//       if (categorias) {
//          const mappedCategory = categorias;
//         url = `https://fakestoreapi.com/products/category/${mappedCategory}`;
//       }

//       fetch(url)
//         .then((res) => res.json())
//         .then((json) => setProductos(json)
        
        
//         );  
//         setLoading(false)           
//     }, 2000);
    
//   }, [categorias]);
 
//     return (
    
//       <div className='Main-container'>
//         {loading ? <Loader /> :<ItemListContainer greeting='Lista de Productos' datos={productos} cat={categorias}  /> }
        
//       </div>
//   );
  
  
// };

// export default Inicio;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { ItemListContainer } from '../../ItemListContainer/ItemListContainer';
import Loader from '../../Loader/loader';

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const { categorias } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Inicializar Firebase
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

    // Obtener la colección de productos
    const productosCollection = collection(db, 'PowerComputacion');

    // Filtrar por categoría si se proporciona
    const q = categorias ? query(productosCollection, where('category', '==', categorias)) : productosCollection;

    // Obtener los documentos de la colección
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProductos(data);
      })
      .finally(() => setLoading(false));
  }, [categorias]);
console.log(productos)
  return (
    <div className='Main-container'>
      {loading ? (
        <Loader />
      ) : (
        <ItemListContainer greeting='Lista de Productos' datos={productos} cat={categorias} />
      )}
    </div>
  );
};

export default Inicio;