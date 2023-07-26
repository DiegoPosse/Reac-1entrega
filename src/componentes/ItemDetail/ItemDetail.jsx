
const ItemDetail = ( {producto} ) => {
  
  return (
    
      <div className='item' key={producto.id}>
       
        <h2>{producto.title}</h2>
        <img
          src={producto.image}
          alt={producto.title}
          width="300px"
          height="300px"
        />
        <h2>{producto.description}</h2>
        <h1>{producto.price}</h1>
      
    </div>
   
  );
};

export default ItemDetail;