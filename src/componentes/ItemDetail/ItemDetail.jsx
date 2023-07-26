import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ItemDetail = ({producto}) => {
console.log(producto,"itemdetail")

  return (
    <div>
        <>
          <h2>{producto.itemdetalle.title}</h2>
          <img src={producto.itemdetalle.image} alt={producto.title} width="200px" height="200px" />
          <h2>{producto.itemdetalle.description}</h2>
          <h1>{producto.itemdetalle.rating}</h1>
          <h1>{producto.price}</h1>
        </>
    </div>
  );
}

export default ItemDetail;