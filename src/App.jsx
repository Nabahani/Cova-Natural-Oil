import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ProductProvider } from './context/ProductsContext';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div id="mother">
      <Navbar />

      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ProductProvider>
    </div>
  )
}

export default App