import Navbar from './componentes/NavBar/NavBar'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Inicio from './componentes/pages/Inicio/Inicio';
import Detalle from './componentes/pages/Detalle/detalle';
import Nosotros from './componentes/pages/Nosotros/Nosotros';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main id='main__container'>
          <Routes>
            <Route
              exact
              path='/'
              element={<Inicio />}
            />
            <Route
              exact
              path='/:categorias'
              element={<Inicio />}
            />
            <Route
              path='/Detalle/:id'
              element={<Detalle />}
            />
            <Route
              path='/Nosotros'
              element={<Nosotros />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;