// import { useState } from 'react'
import Home from '../Pages/User/Home'
import { Routes , Route, Navigate } from 'react-router-dom'
import Mycourse from '../Pages/User/Mycourse'
import Courses from '../Pages/User/Courses'
import Login from '../Pages/User/Login'
import {useSelector} from 'react-redux'

function App() {
  const userAuth = useSelector((state) => state.Client.token)
  const PrivateRoute = ({ element, ...rest }) => {
    return userAuth ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route>
          {/* <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
          <Route path="/courses" element={<Courses />} /> 
          
          <Route path="/login" element={userAuth? <Mycourse/> : <Login />} />
          {/* Private */}
          <Route path="/my-course" element={<PrivateRoute element={<Mycourse/>}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
