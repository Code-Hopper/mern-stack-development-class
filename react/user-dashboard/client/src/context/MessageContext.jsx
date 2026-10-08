import React, { createContext, useContext, useState } from 'react'

let MessageContext = createContext()

const MessageProvider = ({ children }) => {

    let [message, setMessage] = useState({
        status: "", //success, error, warning
        content: "",
        isLive: true
    })

    const triggerMessage = (status, content) => {
        setMessage({ status: status, content: content, isLive: true })
        setTimeout(() => {
            setMessage({
                status: "", //success, error, warning
                content: "",
                isLive: false
            })
        }, [5000])
    }

    return (
        <MessageContext.Provider value={{ message, triggerMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageProvider

const useMessage = () => useContext(MessageContext)

export { useMessage }
