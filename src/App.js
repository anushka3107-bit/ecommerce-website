import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/' element={<Home />} />
        <Route path='/footer' element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
