import {useState} from 'react'


const ItemCounter = ({count,ValInit,stock}) => {
const [contador,setcontador]= useState(ValInit)  
const sumar = () => {
    if(contador !=stock){
        setcontador(contador+1)
    }
    
} 
const restar = () => {
    if(contador >0){
        setcontador(contador-1)
    }
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCounter