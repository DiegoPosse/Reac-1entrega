import React from 'react'
import ItemDetailContainer from '../../ItemdetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const Detalle = () => {
    const {id} = useParams();
  return (
    <ItemDetailContainer
    iditem = {id}
    />
  )
}

export default Detalle