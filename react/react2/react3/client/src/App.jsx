import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  let [message, setMessage] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      let result = await axios({
        method: "GET",
        url: "http://localhost:3011/data"
      })

      console.log(result)

      setMessage(result.data.message)

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>this is frontend !</h1>
      {message}
    </div>
  )
}

export default App
