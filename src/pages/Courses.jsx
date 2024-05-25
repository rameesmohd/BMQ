import React, { useState } from 'react'
import Navbar from '../components/User/Navbar'
import coverpic from '../assets/Screenshot (210).png'
import { Button, Card, Checkbox } from 'antd'
import Meta from 'antd/es/card/Meta'
import Footer from '../components/User/Footer'
import { RightCircleOutlined } from '@ant-design/icons'

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
  

const Courses = () => {
    const [supportCheck,setsupportCheck] = useState(true)
    console.log(supportCheck);
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

      const handleCheckboxChange  = (e) => {
        setsupportCheck(!supportCheck)
      };
      

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
        <section className="grid grid-cols-3 px-10 border">
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
              <div className="text-2xl my-2 font-bold">Ultimate Trading Mastery</div>
              <div className="text-xl font-semibold">Basic to Advanced Level Learning</div>
              <ul className="">
                <li className="my-1 border p-1">Total Hours: 16 Hours</li>
                <li className="my-1 border p-1 flex justify-between">
                  2 Live session (4 Hours)<Checkbox checked={supportCheck} onChange={handleCheckboxChange} />
                </li>
                <li className="my-1 border p-1">Sessions-Pre-Recorded videos (12 Hours)</li>
                <li className="my-1 border p-1">2 Month Access</li>
                <li className="my-1 border p-1 flex justify-between">
                  24 Hours Support <Checkbox checked={supportCheck} onChange={handleCheckboxChange} />
                </li>
              </ul>
              <hr />
              <div className="flex items-center space-x-2">
                <div className="text-red-600 font-bold line-through">{supportCheck ? '$319' : '$199'}</div>
                <div className="text-green-600 font-bold text-2xl">{supportCheck ? '$249' : '$149'}</div>
                <Button icon={<RightCircleOutlined />} className="my-2 border border-green-400">Join now</Button>
              </div>
            </Card>
          </div>
          <div className="col-span-2">
            <section className="px-10 py-10 w-full object-contain">
              <div className="w-full py-3 col-span-3 font-sans animate-fade-right">
                <div className="py-2">
                  <div className="text-3xl mb-2 font-semibold">About the course</div>
                  <p className="text-lg my-2">
                    Mastering Trading Essentials,
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
        className="container grid grid-cols-2 mx-auto p-10"
        style={{ backgroundImage: 'url("https://fundednext.fra1.cdn.digitaloceanspaces.com/cta-btn-bg.webp")', backgroundSize: '100%' }}
      >
        <div>
          <div className="text-3xl font-extrabold text-black my-2">ELITE TRADERS MENTORSHIP PROGRAM</div>
          <div>
            <img
              src="https://www.choruscallaustralia.com.au/wp-content/uploads/2018/11/best-practice-video-call.jpg"
              className="w-full h-full"
              alt="Mentorship Program"
            />
          </div>
        </div>
        <div className="p-10">
          <div className="text-3xl font-bold">
            Beat Market Edu's <br />
            Elite Traders Live Mentorship Program
          </div>
          <br />
          <div className="text-lg">
            Elite Traders Live Mentorship Program is not just another trading course. It is an online program that allows any
            beginner or experienced trader to build a trading system from scratch, learning everything about
            trading in the most simplified manner. This course, offered through our online share market classes,
            covers essential aspects every trader needs to know to succeed in the markets.
          </div>
          <div className="my-2 bg-opacity-20 backdrop-blur-lg bg-white/10 p-6 rounded-md">
            <div className="text-xl px-2">
              <ul className="list-disc font-semibold">
                <li>One to One Sessions</li>
                <li>Basic to Advanced Level</li>
                <li>Weekly Live Sessions</li>
                <li>Access to Premium Community</li>
                <li>Extra 6 Month Assistance</li>
                <li>Sessions-Pre-Recorded Videos</li>
                <li>24 Hours Support</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-red-600 font-bold line-through">$539</div>
              <div className="text-white font-bold text-2xl">$479</div>
            </div>
            <div className="text-xl font-semibold my-2">Limited seats only!!</div>
            <Button icon={<RightCircleOutlined />} className="my-2 border border-green-400">Purchase and Join Now</Button>
          </div>
        </div>
      </section>

      <section className="my-10"></section>
      <Footer />
    </>
  )
}

export default Courses
