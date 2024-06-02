import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button, Drawer} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/Beat (3) copy.png'
import { logout } from '../../Redux/UserSlice';

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const token = useSelector((state)=>state.Client.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const signout=()=>{
      dispatch(logout())
    }
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const options = [
      {option: "Home",nav : '/home'},
      {option: "Courses",nav : '/courses'},
    ];
  return (
    <>
    <nav className="bg-opacity-10 backdrop-blur-lg bg-black/10 border-gray-200 shadow-xl fixed z-50 w-full px-4 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
          text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
          <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className='max-w-36 my-2' alt="" />
          </Link>

        <div className={`py-1 w-full md:block md:w-auto transition ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium md:flex flex-col p-4 md:p-0 mt-4 border  items-center border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {options.map((obj, index) => (
              <li key={index}>
                <Link
                  to={obj?.nav}
                  className="block py-2 px-3 text-blue-800 w-full rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  {obj.option}
                </Link>
              </li>
            ))}
          
              <>
              {
                token ? 
              <li>
                <Button onClick={()=>signout()} className="text-white bg-green-400"> Logout </Button>
              </li> : 
              <li>
                <Button onClick={()=>navigate('/login')} className="text-white bg-green-400">My Courses</Button>
              </li> 
              }
              </>
          
          </ul>
        </div>
    
             
      </div>
    </nav>
    </>
  )
}

export default Nav
