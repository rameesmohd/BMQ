import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import { Button, Divider, Popconfirm, Table } from 'antd';
import Dropdownbtn from '../../Components/Common/Dropdownbtn'
import SearchInput from '../../Components/Common/SearchInput'
import toast from "react-hot-toast";
import adminAxios from '../../Axios/Adminaxios'
import { CheckOutlined, UserOutlined ,CloseOutlined} from '@ant-design/icons';
import { TfiReload } from "react-icons/tfi";

const Users = () => {
  const axiosInstance = adminAxios()
  const [userList,setUserList] = useState([])
  const [loading,setloading] = useState(false)
  const [reloaded,setReloaded] = useState(false)
  const [searchInput,setSearchInput]=useState('') 
  const [filter,setFilter]= useState('')
  const [spin,setSpin] = useState({
    reload : false,
    filter : false,
    blocktoggler : false
  })

  const fetchUserData=async()=>{
    try {
      setloading(true)
      const response = await axiosInstance.get(`/users?search=${searchInput}&${filter}`)
      const userData = response.data.result
      console.log(userData);
      const formattedData = userData.map(item => ({
        key: item._id,
        _id : item._id,
        name: `${item.firstName+" "+item.lastName}`,
        email: item.email,
        date: item.join_date,
        mobile: item.mobile,
        purchased: item.is_purchased ?<CheckOutlined className='text-green-400 font-semibold'/> : <CloseOutlined className='text-red-600 font-semibold'/>,
        is_blocked : item.is_blocked,
        action: ''
      }));
      setUserList(formattedData)
    } catch (error) {
      toast.error(error.message)
      console.log(error);
    } finally {
      setloading(false)
      setSpin((spin) => ({ ...spin, filter: false ,reload: false }));
    }
  }

  const blockToggler= async(id,currStatus)=>{
      try {
        await axiosInstance.patch('/users',{id,currStatus}) 
        fetchUserData()
      } catch (error) {
        toast.error(error.message)
        console.log(error);
      }
  }

  const search=(input)=>{
    setSearchInput(input)
  }

  const reload =async()=>{
    setFilter('')
    setSpin((spin) => ({ ...spin, reload: true }));
    setTimeout(()=>{
      fetchUserData()
      setReloaded(true)
    },2000)
    setTimeout(()=>{
      setReloaded(false)
    },10000)
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name'},
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { 
      title: 'Date', 
      dataIndex: 'date', 
      key: 'date',
      render: (date) => {
      const dateTime = new Date(date);
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      };
      return dateTime.toLocaleString('en-IN', options);
      },
    },
    { title: 'Purchased', dataIndex: 'purchased', key: 'purchased' },
    { 
      title: 'Action', 
      dataIndex: 'action', 
      key: 'action',
      render : (text,record)=>
      <Popconfirm
                title="Approve Order"
                description="Are you sure to Approve?"
                onConfirm={()=>blockToggler(record._id,record.is_blocked)}
                onCancel={'cancel'}
                okButtonProps={{ style: { backgroundColor: 'blue', color: 'white' } }}
                okText={'Yes'}
                style={{backgroundColor :'red'}}
                cancelText="No"
			>
        <Button className={`${!record.is_blocked ? 'bg-green-200' : 'bg-red-200'}`}>{record.is_blocked?'Resume':'Suspend'}</Button>
      </Popconfirm>
      
    },
  ];

  const options = [
    {
      label: 'Purchased',
      key: '1',
      icon: <CheckOutlined style={{ color: '#52c41a' }} />,
    },
    {
      label: 'Non Purchased',
      key: '2',
      icon: <UserOutlined style={{ color: '#f5222d' }} />,
    },
    {
      label: 'Completed',
      key: '3',
      icon: <UserOutlined style={{ color: '#1890ff' }} />,
      primary: true,
    }
  ];

  const handleFilter =(key)=>{
        setSpin((spin) => ({ ...spin, filter: true }));
        if(key==1){
          setFilter('is_purchased=true')
        }else if(key==2){
          setFilter('is_purchased=false')
        }else if(key==3){
          setFilter('is_completed=true')
        }
  }

  useEffect(()=>{
    fetchUserData()
  },[searchInput,filter])

  return (
    <div>
      <Sidebar/>
      <div className='pl-16 md:pl-40'>
        <div className=' py-8 px-2 sm:px-8'>
        <Divider orientation="left" style={{fontSize : '30px'}}>Our Users</Divider>
          <div className='my-5 w-full flex justify-end animate-fade-left'>
            <Dropdownbtn items={options} loading={spin.filter} handleSelect={handleFilter}/>
            <SearchInput search={search}/>
            <Button className='mx-2' disabled={reloaded} onClick={()=>reload()}><TfiReload  className={`${spin.reload ? 'animate-spin' : ''}`}/></Button>
          </div>
          {
            <Table className='animate-fade-up border-b shadow-md' 
            columns={columns.map((col) => ({
              ...col,
              onHeaderCell: (column) => ({
              style: { background: '	#383838', color: 'white' },
              })}))} dataSource={userList} pagination={true} loading={loading} scroll={{ x: true }}/>
          }
        </div>
      </div>
    </div>
  )
  }

export default Users