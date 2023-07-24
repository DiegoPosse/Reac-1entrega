import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemdetailContainer/ItemDetailContainer'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='Proyecto'>
        
        <Navbar/>
        <ItemListContainer greeting='Lista de Productos'/>
       
        
    </div>

      
     
  )
}
<ItemDetailContainer/>
export default App
