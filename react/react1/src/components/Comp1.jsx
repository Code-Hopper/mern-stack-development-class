import React from "react";
import { useState } from "react";

const Comp1 = () => {


    // state variable

    let [age, setAge] = useState(25)

    let name = "amey"
    // let age = 25

    const increaseAge = () => {
        setAge((prev) => { return prev + 1 })
        console.log(age)
    }

    let data = [
        { id: 1, name: "amey", address: "nagpur", phone: "9766696550" },
        { id: 2, name: "Om", address: "Mumbai", phone: "9766696550" },
        { id: 3, name: "Yash", address: "Pune", phone: "9766696550" },
        { id: 4, name: "Aniket", address: "", phone: "9766696550" },
    ]

    let [InputValue, SetInputValue] = useState("")

    return (
        <>
            {/* rendering */}
            <h1 className="text-blue-500 text-4xl font-black underline">hello from comp1{name}</h1>
            {
                age > 23 ? <h3 className="text-3xl font-black">{age}</h3> : null
            }
            <button onClick={increaseAge} className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-400 transition">increase age </button>

            <table border={1}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>phone</th>
                </tr>
                {
                    data.map((item) => {
                        return <tr> <td>{item.id}</td> <td>{item.name}</td> <td>{item.address}</td> <td>{item.phone}</td> </tr>
                    })
                }
            </table>

            <input className="ring-1 rounded" type="text" placeholder="enter your name" value={InputValue} onChange={(e)=>{
                SetInputValue(e.target.value)
            }}/>

        </>
    )
}

export default Comp1