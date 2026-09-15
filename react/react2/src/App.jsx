import React, { useState } from 'react'

import StudentForm from './components/StudentForm'
import DisplayGrid from './components/DisplayGrid'

const App = () => {

  let [studentData, setStudentData] = useState([])

  const addToStudentData = (student) => {
    setStudentData(prev => {
      return [...prev, student]
    })
    console.log(studentData)
  }

  return (
    <>
      <StudentForm addStudent={addToStudentData} />
      <DisplayGrid studentData={studentData}/>
    </>
  )
}

export default App
