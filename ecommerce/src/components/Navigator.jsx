import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import NavBar from './NavBar';
import Login from './Login';
import Product from './Product';
import Cart from './Cart';

import data from '../assets/product.json'

function Navigator() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='articles'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {data.map((dato) => (
            <Route path={`/product/${dato.id}`} element={<Product dato={dato}/>} key={dato.id}/>
          ))}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigator;