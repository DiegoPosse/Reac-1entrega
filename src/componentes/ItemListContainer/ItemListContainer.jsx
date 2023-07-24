import ItemList from '../ItemList/ItemList'



const ItemListContainer = ({ greeting }) => {

  

  return (
    <>
    <div>
        <h1>{greeting}</h1>
    </div>
    <ItemList/>
    </>
  )
}

export default ItemListContainer;