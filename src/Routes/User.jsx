import { useState } from 'react'
import Home from '../Pages/User/Home'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Courses from '../Pages/User/Courses'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
