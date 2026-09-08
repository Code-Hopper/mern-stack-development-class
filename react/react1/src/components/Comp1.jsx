import React from "react";
import { useState } from "react";

const Comp1 = () => {


    // state variable

    let [age,setAge] = useState(25)

    let name = "amey"
    // let age = 25

    const increaseAge = () => {
        setAge((prev)=>{return prev + 1})
        console.log(age)
    }

    return (
        <>
            {/* rendering */}
            <h1 className="text-blue-500 text-4xl font-black underline">hello from comp1{name}</h1>
            {
                age > 23 ? <h3 className="text-3xl font-black">{age}</h3> : null
            }
            <button onClick={increaseAge} className="bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-400 transition">increase age </button>
        </>
    )
}

export default Comp1