import React from 'react'
import Navbar from '../components/User/Navbar'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import imageSection1 from '../assets/3-Month-Journey-.png'
import Collapse from '../components/Common/Collapase'
import Footer from '../components/User/Footer'

const Home = () => {
  const whatYouWillLearn = [
    "Introduction to Trading Fundamentals",
    "Indicators Deep Dive",
    "Liquidity Dynamics",
    "Market Structure Analysis",
    "Insights into Market Makers",
    "ICT Concepts"
  ];
  const skillsYouWillAchieve = [
    "Trading in different currency pairs",
    "Forex analysis",
    "Technical analysis currency pairs",
    "Fundamental analysis",
    "Trading mindset",
    "Liquidity analysis"
  ];
  
  const SectionHeader = ({ children }) => (
    <h2 className="text-4xl my-2">{children}</h2>
  );

  
const InfoSection = ({ title, content }) => (
  <div className="w-full h-full my-2 px-10">
    <SectionHeader>{title}</SectionHeader>
    <p>{content}</p>
  </div>
);


const ListSection = ({ title, items }) => (
  <div>
    <div className="text-3xl my-3 font-semibold">{title}</div>
    <div className="flex flex-wrap w-2/3">
      {items.map((item, index) => (
        <div key={index} className="border text-base p-2 mx-1 my-1">
          {item}
        </div>
      ))}
    </div>
  </div>
);


  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: 'url("https://bitrader.thetork.com/wp-content/uploads/2023/10/banner_bg.png")' }}>
        <div className="container mx-auto">
          <section className="grid grid-cols-3 gap-1 pt-24">
            <div className="col-span-2 p-10 flex justify-center">
              <iframe
                width="560"
                height="315"
                className="w-full h-full"
                src="https://www.youtube.com/embed/EPmdI9Gjk5I?si=KyhJaQ5pwAtWrG5p"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-span-1 p-10">
              <h2 className="text-6xl">
                WHAT IF I CAN TEACH YOU <span className="text-green-500">BASICS TO ADVANCED</span> TRADING RIGHT NOW?
              </h2>
              <p className="my-2 text-lg">
                Get access to our Powerful Foundational Course that will change the way you look at the markets forever.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-2 gap-1 bg-slate-200 p-10">
            <div className="col-span-1 p-10">
              <h2 className="text-6xl">IT’S TIME TO TAKE TRADING SERIOUSLY WITH THE 8-WEEK TRADING PROGRAM</h2>
              <p className="my-2">
                We will walk you through the steps to make a trade profitable. With each trade being different, you have to understand how the market works to select a performing trade. This is exactly what you will learn with BeatMarketEdu.
              </p>
              <Button> Get Access Now <RightOutlined /></Button>
            </div>
            <div className="col-span-1 flex justify-center">
              <img src={imageSection1} className="max-h-96 bg-slate-200" alt="Journey" />
            </div>
          </section>
        </div>
      </div>

      <div className="container mx-auto">
        <section className="w-full py-10">
          <div className="bg-slate-50 w-full h-full px-10 py-2">
            <SectionHeader>What is beatmarketedu?</SectionHeader>
            <p>
              Urban Forex is an online platform created by Navin Prithyani so he can share his knowledge in trading. <br />
              Navin created powerful online video programs in which you can learn how to trade using price action (without indicators).
            </p>
          </div>
          <InfoSection
            title="What is BMQ Strategy?"
            content="Any new trader who wants to start trading the right way. Any experienced trader who hasn't found yet the correct method to turn profitable. Any profitable trader who would like an additional tool to understand how the market works."
          />
        </section>
        <hr />
        <section className="px-10 py-10 w-full object-contain" style={{ backgroundSize : '100%', backgroundImage : 'url("https://fundednext.fra1.cdn.digitaloceanspaces.com/home_hero_bg.svg")'}}>
          <div className="w-full py-3 col-span-3 font-sans animate-fade-right">
            <div className='py-2'>
            <div className="text-3xl mb-2 font-semibold">About the course</div>
            <p className="text-lg my-2">
              Mastering Trading Essentials, Unlock the secrets of successful trading with our comprehensive course on indicators, liquidity, market structure, and market maker concepts. Whether you're a beginner or an experienced trader, this course will equip you with the knowledge and strategies to navigate the financial markets confidently.
            </p>
            </div>
            <div className='grid grid-cols-2'>
            <ListSection title="What you will learn" items={whatYouWillLearn} />
            <ListSection title="Skills you will achieve" items={skillsYouWillAchieve} />
            </div>
          </div>
        </section>
        <section>
          <div className="w-full text-center text-3xl mt-6">BeatMarketEdu Students Reviews</div>
          <div className="grid grid-cols-5 p-10 gap-1">
            <div className="bg-green-500 col-span-1 rounded-xl p-10">sdfsdfd</div>
            <div className="bg-green-500 col-span-2 p-4 rounded-xl">sdfsdfd</div>
            <div className="bg-green-500 col-span-1 rounded-xl">sdfsdfd</div>
            <div className="bg-green-500 col-span-1 rounded-xl">sdfsdfd</div>
          </div>
          <div className="bg-slate-50 p-3 flex justify-center">
            <Button className="bg-green-400 text-black">Become a Successful Trader</Button>
          </div>
        </section>
        <section className="py-10">
          <div>Commonly Asked Questions</div>
          <Collapse />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
