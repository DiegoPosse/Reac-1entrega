import Navbar from './componentes/NavBar/NavBar'
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Inicio from './componentes/pages/Inicio/Inicio';
import Detalle from './componentes/pages/Detalle/detalle';
import Nosotros from './componentes/pages/Nosotros/Nosotros';
import Cart from './componentes/pages/Cart/carrito';
import { CartProvider } from './Context/CartContext';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9NHAgEUUoTRrIduo5fXejD5BFhM1HZ7o",
  authDomain: "e-commerce-25ba4.firebaseapp.com",
  projectId: "e-commerce-25ba4",
  storageBucket: "e-commerce-25ba4.appspot.com",
  messagingSenderId: "894774974938",
  appId: "1:894774974938:web:202add97b6cce2adf2c8e3"
};


const app = initializeApp(firebaseConfig);
import './App.css'

function App() {
  return (
    <div className="App">

    <CartProvider>
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
            <Route
              path='/Cart'
              element={<Cart />}
            />
          </Routes>
        </main>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

