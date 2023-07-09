const ItemListContainer=(props) =>  {
    const greeting = { message: props };
    return ( 
        <div>
            <h1>{greeting.message}</h1>
            <p >ItemListContainer</p>
        </div>
    )


}
export default ItemListContainer




