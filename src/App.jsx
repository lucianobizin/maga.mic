import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FrontPage from './components/FrontPage/FrontPage';
import Checkout from './components/CheckOut/Checkout';

function MainContent() {
  const location = useLocation();
  const hideHeaderRoutes = ['/'];

  const shouldRenderNavBar = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldRenderNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/market" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="*"
          element={<h2>Error 404 - Sorry, we are working really hard to solve it -</h2>}
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
