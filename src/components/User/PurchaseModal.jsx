import React, { useState } from 'react';
import LoginForm from '../Common/LoginForm'
import { Button, Checkbox, Modal,Form, Input } from 'antd';
import { LockOutlined, MailOutlined, MobileOutlined, UserOutlined, WarningOutlined } from '@ant-design/icons';
import {toast} from 'react-hot-toast';

const App = ({isModalOpen,setIsModalOpen,formData,setFormData,LoadPhonepe}) => {
  const [loading,setLoading] = useState(false)
  const handleOk = async() => {
      if(formData.email==''){
        toast.error('Enter a valid email')
        return
      }
      if (!formData.email) {
        toast.error('Enter a valid email')
        return
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        toast.error('Enter a valid email')
        return
      }
      if (formData.mobile.length < 10) {
        toast.error("Mobile must contain min 10 characters")
        return
      }
      setLoading(true)
      await LoadPhonepe()
      setLoading(false)
  };
  const handleCancel = () => {
      setIsModalOpen(false);
  };
  const onFinish = (values) => {
      console.log('Received values of form: ', values);
  };
  
  return (
    <>
      <Modal title={<span style={{ fontSize: '20px' }}>Lets Learn and Earn</span>} 
      open={isModalOpen} 
      onOk={handleOk} 
      okText={"Purchase"} 
      onCancel={handleCancel}
      okButtonProps={{ loading: loading }}
      >
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        >
           <Form.Item
            name="firstname"
            rules={[
            {
                required: true,
                message: 'Please input your first name!',
            },
            ]}
        >
            <Input 
            prefix={<UserOutlined   className="site-form-item-icon" />} 
            placeholder="First name" 
            size="large"
            onChange={(e)=>setFormData({...formData,firstName : e.target.value})}
            />
        </Form.Item>
        <Form.Item
            name="Last name"
            rules={[
            {
                required: true,
                message: 'Please input your last name!',
            },
            ]}
        >
            <Input 
            prefix={<UserOutlined  className="site-form-item-icon" />} 
            placeholder="Last name" 
            size="large"
            onChange={(e)=>setFormData({...formData,lastName : e.target.value})}
            />
        </Form.Item>
        <Form.Item
            name="Email"
            rules={[
            {
                required: true,
                message: 'Please input your Email!',
            },
            ]}
        >
            <Input 
            prefix={<MailOutlined  className="site-form-item-icon" />} 
            placeholder="Email" 
            size="large"
            onChange={(e)=>setFormData({...formData,email : e.target.value})}
            />
        </Form.Item>
        <Form.Item
            name="Mobile"
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}
        >
            <Input
            prefix={<MobileOutlined className="site-form-item-icon" />}
            type="number"
            placeholder="Mobile"
            size="large"
            onChange={(e)=>setFormData({...formData,mobile : e.target.value})}
            />
        </Form.Item>
        </Form>
        <div className='border border-red-600 min-h-12 bg-red-100 flex p-2 rounded-lg'> 
            <WarningOutlined style={{ color: 'red', fontSize: '20px' }}/>
            <div className='mx-2 text-gray-500'>After successful payment, you'll receive an email containing your login credentials for accessing the course library.</div>
        </div>
      </Modal>
    </>
  );
};
export default App;