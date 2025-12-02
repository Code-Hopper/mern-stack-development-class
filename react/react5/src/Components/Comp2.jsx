import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useData } from '../contexts/DataContext'

const Comp2 = () => {

    let { data, decrease } = useData()

    let navigate = useNavigate()

    return (
        <div>
            <h1>this is Component 2</h1>
            <h2>{data}</h2>
            <button onClick={decrease}>decrease</button>
            <button onClick={()=>{navigate("/")}}>GO to Home Page</button>
        </div>
    )
}

export default Comp2
