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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9NHAgEUUoTRrIduo5fXejD5BFhM1HZ7o",
  authDomain: "e-commerce-25ba4.firebaseapp.com",
  projectId: "e-commerce-25ba4",
  storageBucket: "e-commerce-25ba4.appspot.com",
  messagingSenderId: "894774974938",
  appId: "1:894774974938:web:202add97b6cce2adf2c8e3"
};

// Initialize Firebase
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

// Realiza la implementación en Firebase Hosting
// Puedes realizar la implementación ahora o más adelante. Para hacerlo ahora mismo, abre una ventana de la terminal y, luego, navega al directorio raíz de tu app web o crea uno.

// Acceder a Google
// firebase login
// Inicia el proyecto
// Ejecuta el siguiente comando en el directorio raíz de tu app:

// firebase init
// Cuando tengas todo listo, implementa tu app web
// Ubica los archivos estáticos (p. ej., HTML, CSS y JS) en el directorio de implementación de la app (el directorio predeterminado es “public”). Luego, ejecuta este comando desde el directorio raíz de tu app:

// firebase deploy
// Después de la implementación, consulta tu app en e-commerce-25ba4.web.app.

// ¿Necesitas ayuda? Consulta los documentos de Hosting.

