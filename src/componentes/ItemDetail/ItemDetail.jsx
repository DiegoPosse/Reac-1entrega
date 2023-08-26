
const ItemDetail = ( {producto} ) => {
  
  return (
    
      <div className='item' key={producto.id}>
       
        <h2>{producto.title}</h2>
        <img
          src={producto.image}
          alt={producto.title}
          width="500px"
          height="auto"
        />
        <h2>{producto.description}</h2>
        {producto.stock === 0 ? (
        <h2 style={{ fontSize: '2rem', color: 'red' }}>No hay stock de este artículo por el momento</h2>
         ) : (
        <h2>Stock actual: {producto.stock}</h2>
        )}
        
        <h1>${producto.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1>
      
    </div>
   
  );
};

export default ItemDetail;