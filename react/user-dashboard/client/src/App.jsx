import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"

// context
import Message from './components/message/Message.jsx'
import MessageProvider from './context/MessageContext.jsx'

// pages
import LoginRegister from './pages/LoginRegister.jsx'


const App = () => {
  return (
    <>
      <MessageProvider>
        <Message />
        <Routers>
          <Routes>
            <Route path='/' element={<LoginRegister />} />
          </Routes>
        </Routers>
      </MessageProvider>
    </>
  )
}

export default App
