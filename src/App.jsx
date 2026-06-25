import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ProductProvider } from './context/ProductsContext';
import { useLocation, Routes, Route, Outlet } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import Order from './pages/Order';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About';

function MainLayout() {

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <div id="mother">

      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/order/:id/complete' element={<Order />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </div>
  )
}

export default App