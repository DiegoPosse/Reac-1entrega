
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
    
    const q = categorias ? query(productosCollection, where('category', '==', categorias)) : productosCollection;
    
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProductos(data);
      })
      .finally(() => setLoading(false));
  }, [categorias]);

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