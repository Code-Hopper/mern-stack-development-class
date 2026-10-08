import React from 'react'
import "./message.scss"
import { useMessage } from "../../context/MessageContext.jsx"

const Message = () => {

    let { message } = useMessage()

    return (
        <div id='message-component' className={`status-${message.status} ${message.isLive? "live": null}`}>
            {message.content ? message.content : "no message to display"}
        </div>
    )
}

export default Message
