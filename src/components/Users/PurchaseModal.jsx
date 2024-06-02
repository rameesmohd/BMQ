import React, { useEffect, useState } from 'react';
import LoginForm from '../Common/LoginForm'
import { Button, Checkbox, Modal,Form, Input, Collapse, Flex } from 'antd';
import { CopyOutlined, LockOutlined, MailOutlined, MobileOutlined, SmileOutlined, UserOutlined, WarningOutlined } from '@ant-design/icons';
import {toast} from 'react-hot-toast';
import { Radio, Space,message,notification } from 'antd';
import Uploadfile from '../Common/Uploadfile'

const RadioCom = ({setFormData}) => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const Options = ['Phonepe','Local bank','USDT']

    useEffect(()=>{
      const method = value==1 ? 'phonepe' : value==2 ? 'localbank' : value==3 ? 'usdt' : ''
      console.log(method);
      setFormData((val=>({...val ,payment_method : method})))
    },[value])

    return (
      <Radio.Group className='w-full' onChange={onChange} value={value}>
        <Space className='w-full ' direction="vertical">
            {
              Options.map((val,index)=> <Radio disabled={val==='Phonepe'} 
              className={`w-full border p-4 ${value==index+1 && 'bg-slate-300'} `}  value={index+1}><div className='flex justify-between'>
                  {val}
              </div>
              </Radio>)
            }
        </Space>
      </Radio.Group> 
      );
    };

const App = ({isModalOpen,setIsModalOpen,formData,setFormData,submitPurchase}) => {
  const [loading,setLoading] = useState(false)
  const [uploadedfile,setUploadedFile] = useState([])
  const [next,setNext]=useState(false)
  const [api, contextHolder] = notification.useNotification();
    
  const openNotification = () => {
    api.open({
      message: 'Success' ,
      duration: 0,
      description: 'Please check the trasanction history for the status.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

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
      if(next){
        setLoading(true)
        submitPurchase()
        setLoading(false)
      }else{
        setNext(true)
      }
  };

  const handleCancel = () => {
    setNext(false)
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    message.success('Address copied to clipboard');
  };


  useEffect(()=>{
    setFormData({...formData,uploadedFile : uploadedfile.originFileObj})
    return ()=>
    setFormData({
    email: '', 
    mobile : '', 
    amount : 0, 
    course : '', 
    support : 'true',
    firstName : '',
    lastName : '',
    payment_method : '',
    })
  },[uploadedfile])
  
  return (
    <>
      <Modal title={<span style={{ fontSize: '20px' }}>Lets Learn and Earn</span>} 
      open={isModalOpen} 
      onOk={handleOk} 
      okText={!next ? 'Next' : "Submit"} 
      onCancel={handleCancel}
      okButtonProps={{ loading: loading }}
      >
      {!next && 
        <>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
            remember: true,
        }}
        >
        <Form.Item
            name="firstname"
            rules={[
            {
                required: true,
                message: 'Please input your first name!',
            },
            ]} >
          <Input 
            value={formData.firstName}
            prefix={<UserOutlined   className="site-form-item-icon" />} 
            placeholder={"First name" }
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
            value={formData.lastName}
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
         <div>Choose a payment method:</div>   
        <div className='w-full bg-slate-50 p-2'>
                <RadioCom setFormData={setFormData}/>
        </div>
        <div className='border border-green-600 min-h-12 bg-green-100 flex p-2 '> 
            <WarningOutlined style={{ color: 'green', fontSize: '20px' }}/>
            <div className='mx-2 text-gray-500'>After successful payment, you'll receive an email containing your login credentials for accessing the course library.</div>
        </div>
        </>
        }

        {/* //------------Local bank------------------- */}

        { next && formData.payment_method === 'localbank' && 
        <>
        {/* <div onClick={()=>setNext(false)} className='underline cursor-pointer text-lg'>Back</div> */}
        <div className='font-poppins'>We accept</div>
        <div className='px-12'>
          <img src="https://tourapna.com/wp-content/uploads/2020/09/payment-method-upi-imps-rtgs-neft.jpg" alt="" />
        </div>
        <p className='flex items-center text-lg'>Total : ${formData.amount}<span className='text-sm mx-2'>(Including GST)</span></p>
        <div className='my-2 flex'> 
          <div className='w-full bg-red-100 border border-red-400 rounded p-4'>
                <p>
                  <WarningOutlined className='text-red-600 mx-1'/>
                  Please remit the exact amount to our 
                  designated bank account and proceed to 
                  upload the corresponding transaction screenshot. 
                  Upon successful verification,
                  you will gain access to our exclusive course content.
                </p>
          </div>
        </div>
        <Collapse
          size="large"
          items={[
            {
              key: '1',
              label: 'Account Details',
              children: 
              <>
                <div className='bg-slate-50 border p-1 px-2'>
                    <Flex justify='space-between'>
                      <div>Bank name</div>
                      <div>ICIC Bank</div>
                    </Flex>
                    <Flex justify='space-between'>
                      <div>Account no.</div>
                      <div>626405021557</div>
                    </Flex>
                    <Flex justify='space-between'>
                      <div>IFSC</div>
                      <div>ICIC0006264</div>
                    </Flex>
                    <Flex justify='space-between'>
                      <div>Branch</div>
                      <div>EDAPPALLY</div>
                    </Flex>
                </div>
                <div className='mt-4'>
                <Uploadfile setUploadedFile={setUploadedFile}/> 
                </div>
              </>,
            },
            
          ]}
          className='my-4'
        />
        </>}
          {next && formData.payment_method === 'usdt' && 
            <>
            <Flex align='center' justify='center' className='max-w-72 mx-auto' >
              <img className='text-center' src="https://res.cloudinary.com/dj5inosqh/image/upload/v1707447503/WhatsApp_Image_2024-02-07_at_17.30.54_fc078d82_ps2hcl.jpg" alt="" />
            </Flex>
            <Flex align='center' justify='space-between' className='my-8'>
              <p className=''>Amount:</p>
              <p className='font-bold'>${formData.amount}</p>
            </Flex>
            <Flex align='center' justify='space-between' className='my-8'>
              <p className=''>Network:</p>
              <p style={{ border: 'none', boxShadow: 'none' ,fontWeight : 'bold'}}>TRC 20</p>
            </Flex>
            <Flex align='center'>
              <p className=''>Address:</p>
              <Input readOnly className='rounded-lg mx-2' value={'address'}  style={{ border: 'none', boxShadow: 'none' ,fontWeight : 'bold'}}/>
              <Button icon={<CopyOutlined />} onClick={copyToClipboard}/>
            </Flex>
            <div className='w-full bg-red-100 border border-red-400 rounded p-4 my-2'>
                    <p>
                      <WarningOutlined className='text-red-600 mx-1'/>
                      Please remit the exact amount to our 
                      designated USDT Address and proceed to 
                      upload the corresponding transaction screenshot. 
                      Upon successful verification,
                      you will gain access to our exclusive course content.
                    </p>
                    <div className='my-2'>
                        <Uploadfile danger={true} setUploadedFile={setUploadedFile}/> 
                    </div>
              </div>
          </>
        }
      </Modal>
    </>
  );
};
export default App;