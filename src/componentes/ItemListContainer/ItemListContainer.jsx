import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ greeting ,datos}) => {
  
  return (
    <>
    <div>
        <h1>{greeting}</h1>
    </div>
    <ItemList
    productos={datos}
    />
    </>
  )
}

export default ItemListContainer;