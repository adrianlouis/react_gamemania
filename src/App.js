import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Destaques from './Destaques';
import Banner from './Banner';
import Cart from './Cart';
import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';
import {BrowserRouter, Routes, Route, useLocation, Router } from 'react-router-dom'
import NotFound from './NotFound';
import LogCad from './LogCad';
import Register from './Register';
import Detalhes from './Detalhes';
import Footer from './Footer';
import React from 'react';

function App() {

  return (
    <BrowserRouter>

        <GlobalStorage>
          < Header />
        <Routes>
          <Route path='/' element={<Destaques/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='logcad' element={<LogCad/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='detail/:id' element={<Detalhes/>} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
