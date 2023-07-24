import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemdetailContainer/ItemDetailContainer'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Detalle from './pages/Detalle';
import Nosotros from './pages/Nosotros';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <main id='main__container'>
      <Routes>
        <Route
          exact
          path='Inicio'
          element={<Inicio/>}
        />
        <Route
          path='Detalle/:id'
          element={<Detalle/>}
        />
        <Route
          path='Nosotros'
          element={<Nosotros/>}
        />
      </Routes>
    </main>
  </BrowserRouter>
   // <div className='Proyecto'>
   //     
   //     <Navbar/>
   //     <ItemListContainer greeting='Lista de Productos'/>
   //    
    //    
    //</div>

      
     
  )
}

export default App
