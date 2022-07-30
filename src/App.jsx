import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import React from 'react';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' index exact element={<Home/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  