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
import LogCad from './LogCad';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
        <GlobalStorage>
          < Header />
          {/* <Banner /> */}
        <Routes>
          <Route path='/' element={<Destaques/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='logcad' element={<LogCad/>}/>
          <Route path='register' element={<Register/>}/>
          {/* <Destaques/> */}
          {/* <Cart /> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
        </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
