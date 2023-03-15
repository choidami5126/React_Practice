import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../redux/components/Header/Header'
import Footer from '../redux/components/Footer/Footer'
import Homepage from '../pages/Homepage'
import Submitpage from '../pages/Submitpage'
import Listpage from '../pages/Listpage'
import Detailpage from '../pages/Detailpage'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/submit" element={<Submitpage />} />
        <Route path="/list" element={<Listpage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
