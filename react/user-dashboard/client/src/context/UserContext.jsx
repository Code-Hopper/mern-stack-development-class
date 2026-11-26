import { createContext, useState, useEffect, Children, useContext } from "react";

const UserContext = createContext()

let UserProvider = ({ children }) => {

    let user = useState({
        isLogin: false
    })


    const HandleUserLogin = () => {

    }


    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }