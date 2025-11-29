import React, { createContext, useContext, useState } from "react";

let DataContext = createContext()

const DataProvider = ({ children }) => {

    let [data, setData] = useState(1100)

    function increase() {
        setData(prev => { return prev + 1000 })
    }

    function decrease() {
        setData(prev => { return prev - 1000 })
    }

    return (
        <DataContext.Provider value={{ data, increase, decrease }}>
            {children}
        </DataContext.Provider>
    )
}

// custom hook

const useData = () => {
    return useContext(DataContext)
}  

export { DataProvider, useData }