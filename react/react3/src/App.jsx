import React, { use, useState } from 'react'
import Comp1 from './components/Comp1'

const App = () => {

  // let toShow = false

  // state varible

  let [toShow, setToShow] = useState(false)

  let [profile, setProfile] = useState({
    name: "amey khondekar",
    contact: "9766696550",
    email: "ameykhondekar01@gmail.com",
    address: "sakkaradhara nagpur 440024"
  })

  let [data, setData] = useState(123)

  const handleClick = () => {
    setToShow((prev) => {
      return !prev
    })
    // console.log(toShow)
    // state is static
  }

  return (
    <div className='p-5 m-5'>
      {/* <h1 className='p-56 text-6xl text-red-500 bg-blue-500'>this is app </h1> */}

      <Comp1 />

      {
        toShow ? <h1 className='bg-red-500 text-white p-5 inline absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>hello</h1> : null
      }
      {/* conditional rendering */}

      {
        profile ?
          <div>
            <table className='table border-2'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{profile.name ? profile.name : "no name"}</td>
                  <td>{profile.contact}</td>
                  <td>{profile.email}</td>
                  <td>{profile.address}</td>
                </tr>
              </tbody>
            </table>
          </div> :
          <h1>empty profile !</h1>
      }

      <button onClick={handleClick} className='bg-black px-3 py-2 font-bold text-white'>Toggle</button>
    </div>
  )
}

export default App

//react hooks, useState, useEffect, useContext, useRef, useMemo,
// custom hooks