import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ greeting ,datos}) => {

  return (
    <>
    <h1>{greeting}</h1>
    <div className='itemlist'>
    <ItemList productos={datos}/>
    </div>
    
    </>
  )
}

export default ItemListContainer;