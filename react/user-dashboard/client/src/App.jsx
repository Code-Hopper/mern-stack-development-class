import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"

// context
import Message from './components/message/Message.jsx'
import MessageProvider from './context/MessageContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

// pages
import LoginRegister from './pages/LoginRegister.jsx'
import Dashboard from './pages/Dashboard.jsx'


const App = () => {
  return (
    <>
      <MessageProvider>
        <UserProvider >
          <Message />
          <Routers>
            <Routes>
              <Route path='/' element={<LoginRegister />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Routers>
        </UserProvider>
      </MessageProvider>
    </>
  )
}

export default App
