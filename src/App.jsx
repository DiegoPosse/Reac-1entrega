import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='Proyecto'>
        <Navbar/>
        <ItemListContainer items={'Lista de Productos'}/> 
    </div>
     
     
  )
}

export default App
