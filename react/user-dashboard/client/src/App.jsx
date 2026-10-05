import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'

const App = () => {
  return (
    <>
      <Routers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Routers>
    </>
  )
}

export default App
