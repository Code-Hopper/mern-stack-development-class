import React, { useState } from 'react'

import StudentForm from './components/StudentForm'
import Grid from './components/DisplayGrid'
import { StudentProvider } from './context/StudentContext'

const App = () => {

  return (
    <>
      <StudentProvider>
        <StudentForm />
        <Grid />
      </StudentProvider>
    </>
  )
}

export default App
