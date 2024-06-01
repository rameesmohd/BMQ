import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Users from '../Pages/Admin/User'
import { useSelector } from 'react-redux'
import NotFoundPage from '../Pages/404'
import Sales from '../Pages/Admin/Sales'
import Login from '../Pages/Admin/Login'

const Admin = () => {
  const adminAuth = useSelector((state) => state.Admin.token)
  const PrivateRoute = ({ element, ...rest }) => {
    return adminAuth ? element : <Navigate to="/admin/login" />;
  };
  return (
    <Routes>

        {/* Private */}
        <Route path='/login' element={adminAuth ? <Navigate to="/admin/login" /> :<Login/>}/>
        <Route path='/users' element={<PrivateRoute element={<Users/>}/>}/>
        <Route path='/sales' element={<PrivateRoute element={<Sales/>}/>}/>
         {/* 404 route */}
        <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  )}

export default Admin