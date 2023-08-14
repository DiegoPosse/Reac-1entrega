
const ItemDetail = ( {producto} ) => {
  
  return (
    
      <div className='item' key={producto.id}>
       
        <h2>{producto.title}</h2>
        <img
          src={producto.image}
          alt={producto.title}
          width="500px"
          height="250px"
        />
        <h2>{producto.description}</h2>
        
        <h2>Stock actual :{producto.stock}</h2>
        <h1>${producto.price.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1>
      
    </div>
   
  );
};

export default ItemDetail;