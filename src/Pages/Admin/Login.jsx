import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Card } from 'antd';
import Adminaxios from '../../Axios/Adminaxios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {setToken} from '../../Redux/Adminslice'

const App = () => {
  const axiosInstance = Adminaxios()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = async(values) => {
  try {
          console.log('Received values of form: ', values);
          const response = await axiosInstance.post('/login',values)
          console.log("Server response:", response.data);
          dispatch(setToken(response.data.token))
          if(response){
              navigate('/admin/users')
          }    
      } catch (error) {
          toast.error(error.message)
          toast.error(error.data.response.data.message)
      }
  }

  return (
    <div className='w-full h-screen container mx-auto flex justify-center items-center'>
    <Card className=''>
    <div className='my-1 flex font-semibold justify-center w-full'>
    <span className='text-green-400'> 
    BEATMARKET
    </span> 
    EDU</div>
    <div className='w-full  text-center font-bold my-2'>ADMIN PANEL </div>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
        </Form.Item>
        <Form.Item className='text-center'>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
    </Form>
    </Card>
    </div>
  );
};
export default App;