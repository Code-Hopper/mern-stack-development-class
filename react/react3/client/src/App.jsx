import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  let [message, setMessage] = useState("")

  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData((prev) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)

      let result = await axios({
        method: "POST",
        url: "http://localhost:3011/data",
        data: formData
      })

      console.log(result)
      alert(result.data.message)

    } catch (err) {
      console.error("failed to send data : ", err)
      alert("failed to send data !")
    }
  }

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

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" id="" />
        <input onChange={handleChange} value={formData.phone} type="tel" name="phone" id="" />
        <input onChange={handleChange} value={formData.email} type="email" name="email" id="" />
        <button type='submit'>submit</button>
      </form>

    </div>
  )
}

export default App
