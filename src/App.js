import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Destaques from './Destaques';
import Banner from './Banner';
import Cart from './Cart';
import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
        <GlobalStorage>
          < Header />
        <Routes>
          <Route path='/' element={<Destaques/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='*' element={<NotFound />} />
          {/* <Destaques/> */}
          {/* <Cart /> */}

        </Routes>
        </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
