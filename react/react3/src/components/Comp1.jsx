import React, { useState } from 'react'

const Comp1 = () => {

    // controlled components

    let [data, setData] = useState("")

    let [error, setError] = useState({
        status: false,
        message: "some message"
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        if (data.includes("hello")) {
            setError({
                status: true,
                message: ` "${data}" is Invalid Input String !`
            })
        }

        setData(event.target.value)
    }

    return (
        <div>
            <form className='flex flex-col gap-10 my-20' action="">
                <input onChange={handleInputChange} className='bg-gray-100 focus:outline-none focus:ring-2 ring-blue-500 transition-all rounded p-3' type="text" placeholder='enter your name' value={data} />

                {error.status ?
                    <div className='text-center font-bold error-message bg-red-300 p-4 rounded border-2 border-red-700'>
                        {error.message}
                    </div>
                    : null}

            </form>

        </div>
    )
}

export default Comp1
