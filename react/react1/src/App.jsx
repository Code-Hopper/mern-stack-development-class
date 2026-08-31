import React from 'react'

// import "./styles/style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

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
      <h1 className='text-danger fs-2 fw-bolder'>hello world</h1>
    </div>
  )
}

export default App