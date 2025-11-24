import React, { useState, useEffect } from 'react'
import { DisplayFormEntries } from './DisplayFormEntries'

const Comp2 = () => {

    let [form, setForm] = useState({
        user_name: "", phone: "", email: "", address: "", password: ""
    })

    let [formEntries, setFormEntries] = useState([])

    let [error, setError] = useState({
        status: false,
        message: ""
    })

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const handleInputChange = (e) => {
        let { name, value } = e.target
        // console.log(name, value)

        if (name == "phone" && value != "1") {
            setError(prev => {
                return {
                    status: true,
                    message: "invalid phone number"
                }
            })
        }

        setTimeout(() => {
            setError({
                status: false,
                message: ""
            })
        }, 3000)

        setForm(prev => {
            return { ...prev, [name]: value }
        })

    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        handleResetClick()
        // we can store locally/temp
        // we can send this data to a api/backend/database
        setFormEntries(prev => {
            return [...prev, form]
        })
    }

    const handleResetClick = () => {
        setForm({
            name: "", phone: "", email: "", address: ""
        })
    }

    // whenever a component in mounted/re-mounted the effect hook will get calleg

    useEffect(() => {
        // data fetch (Example Profile Fetch)
        // validation
        // page protect
        console.log("Effect hook ran !")
    }, [formEntries, form])

    return (
        <div id='form'>
            <form onSubmit={handleFormSubmit} className='w-1/2 flex flex-col gap-5'>
                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="text" name='name' value={form.name} placeholder='name' />

                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="tel" name='phone' value={form.phone} placeholder='phone' />

                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="email" name='email' value={form.email} placeholder='email' />

                <textarea onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' placeholder='Address' name="address" value={form.address} id="" rows={10}></textarea>

                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="text" name='password' value={form.password} placeholder='password' />

                {
                    form.password ?
                        passwordRegex.test(form.password) ? null :
                            <div className='bg-red-200 p-4 rounded'>
                                <span>Password must have : Atleast 1 Number, 1 Upper Case Char , 1 Lower Case Char and should be atleast 8 charchters long.</span>
                            </div>
                        : null
                }

                <button type='submit' className='bg-green-400 p-3 rounded hover:bg-green-500 font-bold transition'>Submit</button>

                <button onClick={handleResetClick} type='button' className='bg-red-400 p-3 rounded hover:bg-red-500 font-bold transition'>Reset</button>

                <div className='error'>
                    {
                        error.status ? <span className='font-bold bg-red-200 p-4 block w-full'>Error : {error.message}</span> : null
                    }
                </div>

            </form>



            <div className="my-20 relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                {
                    formEntries.length == 0 ?
                        <h1 className='text-3xl font-bold'>No Data To Show !</h1>
                        :

                        <table className="w-full text-sm text-left rtl:text-right text-body">
                            <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                                <tr className='bg-black text-white'>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Phone
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Address
                                    </th>
                                    <th scope="col" className="px-6 py-3 font-medium">
                                        Password
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formEntries.map(
                                        (item) => {
                                            return <DisplayFormEntries itemToDisplay={item} />
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>

        </div>
    )
}

export default Comp2

// props
