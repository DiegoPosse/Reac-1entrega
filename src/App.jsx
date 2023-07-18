import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

import Itemcounter from './componentes/ItemCounter/ItemCounter'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='Proyecto'>
        
        <Navbar/>
        
        <Itemcounter count='Contador' ValInit={1} stock={8} />
    </div>
      
     
  )
}

export default App
