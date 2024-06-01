// import {Spin} from 'antd'
import { Formik } from "formik";
import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAxios from "../../Axios/Useraxios";
// import img from '../assets/01 (1).png'
import tradingPhoto from '../../assets/trading-app.jpg'
import toast from "react-hot-toast";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch} from 'react-redux'
import { setUser } from '../../Redux/UserSlice'
import { Flex, Spin } from "antd";

const Login = () => {
  const navigate = useNavigate()
  const [errMsg,setErrMsg] = useState('')
  const dispatch = useDispatch()
  const axiosInstance = userAxios()


  return (
    <div className="md:grid grid-cols-2">
      <div className="col-span-1 h-full ">
      <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 animate-fade-right transition-opacity border">
      <div className="py-8 px-6 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
        <div className="flex justify-center">
          <Link to="/">
             <img src={'img'} alt="" className="w-40" />
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         setErrMsg('')
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (values.password.length < 6) {
          errors.password = "Password must contain min 6 characters";
        }
         return errors;
       }}
       onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axiosInstance.post("/login", {
            email: values.email,
            password: values.password
          });
          const result = response.data.result
          console.log(result);
          dispatch(setUser({
              user_id : result.user_id,
              token : result.token,
          }))
          navigate('/my-course');
        } catch (error) {
          toast.error(error.response.data.message)
          setErrMsg(error.response.data.message)
        } finally {
          setSubmitting(false);
        }
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
          {errMsg.length>0 && <div className="border border-red-600 text-red-800 bg-red-200 text-sm p-2 flex justify-start">
            <div className="flex items-center"> 
              <IoWarningOutline className="text-xl "/>
              <p className="mx-2">{errMsg}</p>
            </div>
          </div>}
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {
                    <p className="text-xs  text-red-500">
                      {errors.email && touched.email && errors.email}{" "}
                    </p>
               }
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                {
                  <p className="text-xs  text-red-500">
                    {errors.password && touched.password && errors.password}
                  </p>
                }
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spin/> : 'Sign in'}
            </button>
          </div>
        </form>
        )}
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to={"/courses"}
            className="font-semibold leading-6 text-indigo-600 mx-2 hover:text-indigo-500"
          >
            Purchase course to get access to our course library
          </Link>
        </p>
      </div>
    </div> 
    </>
      </div>
      <div className="hidden md:block col-span-1 bg-blue-gray-100 relative ">
        <img
          // src={'https://www.wales247.co.uk/wp-content/uploads/2021/03/trading-app.jp'}
          src={'https://media.licdn.com/dms/image/C5612AQFpjMFJoJtQHQ/article-cover_image-shrink_600_2000/0/1554281438769?e=2147483647&v=beta&t=Cf5OYq8Z03Lr3E6ReBLWJ2Mxk4fNXeGfbwiOa2wk7QA'}
          className="transition-opacity object-cover h-screen w-full "
          alt=""
        />
      </div>
    </div>
 
  );
};

export default Login;