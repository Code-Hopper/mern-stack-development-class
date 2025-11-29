import React, { useContext, useState } from 'react'
import { useData } from '../contexts/DataContext'

const Comp1 = () => {
    
    let { data, increase } = useData()

    let [data1 ,setData1] = useState(data)

    return (
        <div>
            <h1>This is Component 1</h1>
            <h2>{data1}</h2>
            <button onClick={() => { increase() }}>increase</button>
        </div>
    )
}

export default Comp1
