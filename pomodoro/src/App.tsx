import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" element={<div/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
