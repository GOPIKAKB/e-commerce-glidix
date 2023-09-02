import './App.css';
import Header from './Component/Header';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Component/Product/ProductList';
import Cart from './Component/Cart';
import ProductDetail from './Component/ProductDetail';

export const newContext = createContext()

function App() {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <newContext.Provider value={{ data, setData, cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route> 
            <Route path='/product/:id' element={<ProductDetail/>}></Route>
          </Routes>
        </BrowserRouter>
      </newContext.Provider>
    </div>
  );
}

export default App;
