import React, { useState } from 'react'
import Navbar from '../../Components/UserNavbar.jsx'
import { Button, Card, Checkbox ,notification,message} from 'antd'
import Footer from '../../Components/Users/Footer.jsx'
import { RightCircleOutlined, SmileOutlined } from '@ant-design/icons'
import userAxios from '../../Axios/Useraxios'
import toast from 'react-hot-toast'
import Modal from '../../Components/Users/PurchaseModal.jsx'
import { setUser } from '../../Redux/UserSlice'
 
const ListSection = ({ title, items }) => (
    <div>
      <div className="text-3xl my-3 font-semibold">{title}</div>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="border text-base p-2 mx-1 my-1">
            {item}
          </div>
        ))}
      </div>
    </div>
);

const whatYouWillLearn = [
  "Introduction to Trading Fundamentals",
  "Indicators Deep Dive",
  "Liquidity Dynamics",
  "Market Structure Analysis",
  "Insights into Market Makers",
  "ICT Concepts",
  "Market Maker Methods"
];

const skillsYouWillAchieve = [
  "Trading in different currency pairs",
  "Forex analysis",
  "Technical analysis currency pairs",
  "Fundamental analysis",
  "Trading mindset",
  "Liquidity analysis"
];

const Courses = () => {
    const [isModalOpen,setIsModalOpen]= useState(false)
    const [loading,setLoading] = useState({one : false,two: false})
    const axiosInstance = userAxios()
    const [formData,setFormData]= useState({
      email: '', 
      mobile : '', 
      amount : 0, 
      course : '', 
      support : 'true',
      firstName : '',
      lastName : '',
      payment_method : '',
      uploadedFile : []
    })
    
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
      api.open({
        message: 'Success' ,
        duration: 0,
        description: 'Please check your mail for the status.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };
    
    const handleCheckboxChange  = (e) => {
      setFormData({...formData , support : !formData.support})
    };

    const submitPurchase=async()=>{
        await axiosInstance.post('/purchase',formData, 
        { headers: { 'Content-Type':'multipart/form-data' }}
        ).then((res)=>{
          toast.success('Purchase completed')
          openNotification()
          setIsModalOpen(false)
        }
        ).catch((error)=> {toast.error(error.message)
        console.error('API Error:', error)})        
      }

    const handleSubmit=async({course,amount})=>{
      if(course === 'live-mentorship'){
          setLoading({...loading,two : true})
          setFormData((prevFormData) => ({
            ...prevFormData,
            support: 'true',
            course,
            amount
          }));
        }else {
          setLoading({...loading,one : true})
          setFormData({ ...formData, amount,course});
          setFormData((prevFormData) => ({
            ...prevFormData,
            course,
            amount
          }));
        }
        setTimeout(()=>{
          setLoading({one : false,two : false})
          setIsModalOpen(!isModalOpen)
        },1000)
      }

  return (
    <>
      <Navbar />
      <div
        className="container mx-auto pt-28 pb-1"
        style={{
          backgroundImage: 'url("https://fundednext.fra1.cdn.digitaloceanspaces.com/feature-bg.svg")',
          backgroundSize: '100%'
        }}
      >
        <div className="text-4xl text-center py-6">Our Courses</div>
        <hr />
        <section className="sm:grid grid-cols-3 px-10 border animate-fade-up">
          <div className="p-10">
            <Card
              hoverable
              style={{ width: '100%', height: '100%' }}
              cover={
                <img
                  src="https://www.investopedia.com/thmb/Zg2OmXzEbZKUTbhpuJayjIYxET4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Primary-Image-best-online-forex-trading-classes-5094837-fb9606c6f9c2445292d9b80c0f1f6c57.jpg"
                  alt="Course Cover"
                />
              }
            >
              <div className="text-2xl my-2 font-bold">Ultimate Trading Masterclass</div>
              <div className="text-xl font-semibold">Learning from beginner to professional level.</div>
              <ul className="">
              <li className="my-1 border p-2">Basic to Advanced Technical Analysis</li>
                <li className="my-1 border p-2">Sessions-Pre-Recorded videos (12 Hours)</li>
                <li className="my-1 border p-2">3 Month Access</li>
                <li className="my-1 border p-2 ">Total Hours: 16 Hours</li>
                <li className="my-1 border p-2">34 Lessons with 2 Core strategies</li>
                <li className="my-1 border p-2">Daily Analysis Broadcast</li>
                <li className="my-1 border p-2">Daily tasks with guidance</li>
                {/* <li className="my-1 border p-2 flex justify-between">
                  2 Live session (4 Hours)<Checkbox checked={formData.support} onChange={handleCheckboxChange} />
                </li> */}
                <li className="my-1 border p-2 flex justify-between">
                  24 Hours Support <Checkbox checked={formData.support} onChange={handleCheckboxChange} />
                </li>
              </ul>
              <hr />
              <div className="flex items-center space-x-2">
                <div className="text-red-600 font-bold line-through">${formData.support ? 319 : 199}</div>
                <div className="text-green-600 font-bold text-2xl">${formData.support ? 249 : 149}</div>
                <Button loading={loading.one} onClick={()=>handleSubmit({course: 'pre-recorded',amount : formData.support ? 249 : 149})} icon={<RightCircleOutlined />} className="my-2 border border-green-400">Join now</Button>
                {/* {formData.support ? 
                <Button onClick={()=>window.location.href = 'https://rzp.io/l/GDdf1l9R'}>Join now</Button> :
                <Button onClick={()=>window.location.href = 'https://rzp.io/l/v13RlVhmVX'}>Join now</Button>
                } */}
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <section className="px-10 py-10 w-full object-contain">
              <div className="w-full py-3 col-span-3 font-sans animate-fade-right">
                <div className="py-2">
                  <div className="text-3xl mb-2 font-semibold">About the course</div>
                  <p className="text-lg my-2">
                    Unlock the secrets of successful trading with our comprehensive course on indicators, liquidity, market structure,
                    and market maker concepts. Whether you're a beginner or an experienced trader, this course will equip you with the knowledge
                    and strategies to navigate the financial markets confidently.
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <ListSection title="What you will learn" items={whatYouWillLearn} />
                  <ListSection title="Skills you will achieve" items={skillsYouWillAchieve} />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <section
        className="container sm:grid grid-cols-2 mx-auto p-10 bg-green-100 border"
      >
        <div className='animate-fade-right'>
          <div>
            <img
              src="https://www.choruscallaustralia.com.au/wp-content/uploads/2018/11/best-practice-video-call.jpg"
              className="w-full h-full"
              alt="Mentorship Program"
            />
          </div>
        </div>
        <div className="p-10 animate-fade-left">
          <div className="text-3xl font-bold">
            Beat Market Edu's <br/>
            Elite Traders Mentorship Program
          </div>
          <br />
          <div className="text-lg">
            {/* Elite Traders Live Mentorship Program is not just another trading course. It is an online program that allows any
            beginner or experienced trader to build a trading system from scratch, learning everything about
            trading in the most simplified manner. This course, offered through our online share market classes,
            covers essential aspects every trader needs to know to succeed in the markets. */}
          </div>
            <div className="flex items-center space-x-2">
              <div className="text-red-600 font-bold line-through">$539</div>
              <div className="font-bold text-2xl">$479</div>
            </div>
          <div className="my-2 bg-opacity-20 backdrop-blur-lg bg-white/10 p-6 rounded-md">
            <div className="text-xl px-2 ">
              <ul className="list-disc font-semibold">
                <li>Basic to Advanced Level</li>
                <li>One to One Sessions</li>
                <li>Weekly Live Sessions</li>
                <li>Access to Premium Community</li>
                <li>2 Month Duration,Extra 3 Month Assistance</li>
                <li>Sessions-Pre-Recorded Videos(Lifetime Access)</li>
                <li>24 Hours Support</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-xl font-semibold my-2 text-red-600">No seats available!!</div>
            <Button loading={loading.two} onClick={()=>handleSubmit({course: 'live-mentorship',amount:479})} icon={<RightCircleOutlined />} className="my-2 border border-green-400">Purchase and Join Now</Button>
          </div>
        </div>
      </section>
      <section className="my-10"></section>
      <Footer/>
      {isModalOpen && <Modal 
      isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} 
      formData={formData} setFormData={setFormData} submitPurchase={submitPurchase}/>}
    </>
  )
}

export default Courses
