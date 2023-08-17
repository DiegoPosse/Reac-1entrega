import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/loader';
const ItemListContainer = ({ greeting, datos, cat }) => {
  const [isLoading, setIsLoading] = useState(true);
  

  let cartel = '';

  if (cat === undefined) {
    cartel = 'Rubro: Todos';
  } else {
    cartel = 'Rubro: ' + cat;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Cargando...</h2>
        <Loader />
      </div>
    );
  }

  if (datos.length === 0) {
    return (
      <div>
        <h2>No hay items disponibles en esta categoría</h2>
      </div>
    );
  }

  return (
    <>
      <h2>{cartel}</h2>
      <h1>{greeting}</h1>
      <div className='itemlist'>
        <ItemList productos={datos} />
      </div>
    </>
  );
};

export { ItemListContainer };