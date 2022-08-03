import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
//import { addTokenAction, removeTokenAction } from './Store/token/actions.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
    </Routes>
  )
}

export default App;
