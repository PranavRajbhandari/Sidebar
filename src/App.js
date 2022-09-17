import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';


function App() {
  return (
<>
<BrowserRouter>
<Routes>

 <Route  path ='/'  element={<Navbar />}/> 
 <Route  path ='/home' element={<Home/>}/> 
 <Route path ='/reports' element={<Reports />}/> 
 <Route path ='/products' element={<Products />}/> 
</Routes>
</BrowserRouter>
</>
 
  );
}

export default App;
