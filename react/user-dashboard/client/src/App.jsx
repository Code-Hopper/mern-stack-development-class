import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import Message from './components/message/Message.jsx'
import MessageProvider from './context/MessageContext.jsx'

const App = () => {
  return (
    <>
      <MessageProvider>
        <Message />
        <Routers>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Routers>
      </MessageProvider>
    </>
  )
}

export default App
