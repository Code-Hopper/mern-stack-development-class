import React, { useState } from 'react'

const App = () => {

  // let toShow = false

  let [toShow, setToShow] = useState(false)

  const handleClick = () => {
    setToShow(!toShow)
    // console.log(toShow)
    // state is static
  }

  return (
    <div className='p-5 m-5'>
      {/* <h1 className='p-56 text-6xl text-red-500 bg-blue-500'>this is app </h1> */}

      {
        toShow ? <h1 className='bg-red-500 text-white p-5 inline absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>hello</h1> : null
      }
      {/* conditional rendering */}

      <button onClick={handleClick} className='bg-black px-3 py-2 font-bold text-white'>Toggle</button>
    </div>
  )
}

export default App