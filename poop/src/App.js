import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Home from './pages/Home';
import AddWashroom from './pages/AddWashroom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<AddWashroom />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;