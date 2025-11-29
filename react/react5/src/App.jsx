import React from 'react'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'

// Data Provider
import { DataProvider } from './contexts/DataContext.jsx'

const App = () => {
  return (
    <>
      <DataProvider>
        <Comp1 />
        <Comp2 />
      </DataProvider>
    </>
  )
}

export default App
