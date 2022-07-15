import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Error from './pages/Error/Error';
import Cart from './pages/Cart/Cart'
import Buy from './pages/Buy/Buy';

//Context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
