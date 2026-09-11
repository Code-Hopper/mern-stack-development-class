import React, { useState } from 'react'

const Comp2 = () => {

    // let [name, setName] = useState("")
    // let [phone, setPhone] = useState("")
    // let [email, setEmail] = useState("")
    // let [age, setAge] = useState("")

    //  const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(name)
    //     console.log(email)
    //     console.log(phone)
    //     console.log(age)
    // }


    let [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        age: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        console.log(name, value)

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })

    }

    return (
        <div>
            <div className='p-20'>
                {/* <form onSubmit={handleSubmit}>
                    <input value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} className='p-2 border' name='name' placeholder='name' type="text" />

                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} className='p-2 border' name='email' placeholder='email' type="email" />

                    <input value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} className='p-2 border' name='phone' placeholder='phone' type="text" />

                    <input value={age} onChange={(e) => {
                        setAge(e.target.value)
                    }} className='p-2 border' name='age' placeholder='age' type="number" />

                    <button type='submit' className='block bg-blue-400 text-white font-bold p-3 rounded'>
                        Submit
                    </button>
                </form> */}

                <form onSubmit={handleSubmit}>
                    <input value={formData.name} onChange={handleChange} className='p-2 border' name='name' placeholder='name' type="text" />

                    <input value={formData.email} onChange={handleChange} className='p-2 border' name='email' placeholder='email' type="email" />

                    <input value={formData.phone} onChange={handleChange} className='p-2 border' name='phone' placeholder='phone' type="text" />

                    <input value={formData.age} onChange={handleChange} className='p-2 border' name='age' placeholder='age' type="number" />

                    <button type='submit' className='block bg-blue-400 text-white font-bold p-3 rounded'>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Comp2
