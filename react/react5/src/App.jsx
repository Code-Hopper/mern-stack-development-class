import React from 'react'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Data Provider
import { DataProvider } from './contexts/DataContext.jsx'

const App = () => {
  return (
    <>
      <DataProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Comp1 />} />
            <Route path="/another" element={<Comp2 />} />
          </Routes>
        </Router>

      </DataProvider>
    </>
  )
}

export default App
