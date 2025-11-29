import React, { useContext } from 'react'

import { useData } from '../contexts/DataContext'

const Comp2 = () => {

    let { data, decrease } = useData()

    return (
        <div>
            <h1>this is Component 2</h1>
            <h2>{data}</h2>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default Comp2
