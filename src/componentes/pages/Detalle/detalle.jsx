import React, {useState,useEffect} from 'react'
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader/loader'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
const Detalle = () => {
  const [producto, setProducto] = useState('');
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  
  
  useEffect(() => {
    setLoading(true)
    
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

   
    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        const productos = data.map((item) => {
          return {
            title: item.title,
            description: item.description,
            price: item.price,
            image: item.image,
            category: item.category,
            id: item.id,
            stock: item.stock
          };
        
        });
        setProducto(productos);
        
      })
      .finally(() => setLoading(false));
  }, [id]);
 
  return (
    
    <div>{loading ? <Loader /> : 
    producto ? <ItemDetailContainer itemdetalle={producto}/> : <h1>Producto no encontrado</h1>
  }</div>
    
  )
}

export default Detalle