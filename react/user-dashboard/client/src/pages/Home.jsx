import React from 'react'
import Comp1 from '../components/Comp1'
import Navbar from '../components/Navbar'
import { useMessage } from "../context/MessageContext.jsx"

export const Home = () => {
    let { triggerMessage } = useMessage()
    return (
        <div>
            <Navbar />
            <Comp1 />
            <button onClick={()=>{triggerMessage("success","testing message component !")}}>
                open message
            </button>
        </div>
    )
}
