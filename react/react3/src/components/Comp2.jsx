import React, { useState } from 'react'

const Comp2 = () => {

    let [form, setForm] = useState({
        user_name: "", phone: "", email: "", address: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target
        // console.log(name, value)
        setForm(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        handleResetClick()
        // we can store locally/temp
        // we can send this data to a api/backend/database
    }

    const handleResetClick = () => {
        setForm({
            name: "", phone: "", email: "", address: ""
        })
    }

    return (
        <div id='form'>
            <form onSubmit={handleFormSubmit} className='w-1/2 flex flex-col gap-5'>
                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="text" name='name' value={form.name} placeholder='name' />

                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="tel" name='phone' value={form.phone} placeholder='phone' />

                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="email" name='email' value={form.email} placeholder='email' />

                <textarea onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' placeholder='Address' name="address" value={form.address} id="" rows={10}></textarea>

                <button type='submit' className='bg-green-400 p-3 rounded hover:bg-green-500 font-bold transition'>Submit</button>

                <button onClick={handleResetClick} type='button' className='bg-red-400 p-3 rounded hover:bg-red-500 font-bold transition'>Reset</button>

            </form>
        </div>
    )
}

export default Comp2
