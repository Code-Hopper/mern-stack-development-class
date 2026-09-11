import React from 'react'

import "./styles/style.css"
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

const App = () => {

  let number = 123

  // let style1 = { color: "red", backgroundColor: "black" }
  // let style2 = { color: "blue", backgroundColor: "black" }
  // let style3 = { color: "yellow", backgroundColor: "black" }

  return (
    <div>
      {/* <h1 style={style1}>hello world {number + 100}</h1>
      <h1 style={style2}>hello world</h1>
      <h1 style={style3}>hello world</h1>
      <h1 style={style1}>hello world</h1> */}
      <Comp2 />
      <Comp1 />
      {/* rendering */}

      <h1 className='text-red-500 text-5xl font-bold'>hello world</h1>
      <div className='w-[500px] h-[500px] bg-yellow-200'>
        <h1>content</h1>
      </div>
    </div>
  )
}

export default App