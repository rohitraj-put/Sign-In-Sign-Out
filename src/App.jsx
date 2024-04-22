import React from 'react'
import './App.css'
import Sign from './form/Sign';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './layout/Home';


function App() {

  return (
    <>
      <Sign />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
