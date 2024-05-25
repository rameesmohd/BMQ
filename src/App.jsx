import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Courses from './pages/Courses'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
