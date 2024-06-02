import React from 'react'
import Navbar from '../../Components/UserNavbar.jsx';
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import imageSection1 from '../../assets/3-Month-Journey-.png'
import Collapse from '../../Components/Common/Collapase.jsx'
import Footer from '../../Components/Users/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import Rating from '../../Components/Common/Rating.jsx'

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
  <div className="w-full h-full my-2 px-10 animate-fade-up">
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

const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div style={{ backgroundImage: 'url("https://bitrader.thetork.com/wp-content/uploads/2023/10/banner_bg.png")' }}>
        <div className="container mx-auto">
          <section className="sm:grid grid-cols-3 gap-1 pt-24">
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
            <div className="col-span-1 p-10 animate-fade-left">
              <h2 className="text-6xl">
                WHAT IF I CAN TEACH YOU <span className="text-green-500">BASICS TO ADVANCED</span> TRADING RIGHT NOW?
              </h2>
              <p className="my-2 text-lg">
                Get access to our Powerful Foundational Course that will change the way you look at the markets forever.
              </p>
            </div>
          </section>
          <section className="sm:grid grid-cols-2 gap-1 bg-slate-200 p-10 ">
            <div className="col-span-1 p-10 animate-fade-right">
              <h2 className="text-6xl ">IT’S TIME TO TAKE TRADING SERIOUSLY WITH THE 8-WEEK TRADING PROGRAM</h2>
              <p className="my-2">
                We will walk you through the steps to make a trade profitable. With each trade being different, you have to understand how the market works to select a performing trade. This is exactly what you will learn with BeatMarketEdu.
              </p>
              <Button onClick={()=>navigate('/courses')}> Get Access Now <RightOutlined /></Button>
            </div>
            <div className="col-span-1 flex justify-center animate-fade-left">
              <img src={imageSection1} className="max-h-96 bg-slate-200" alt="Journey" />
            </div>
          </section>
        </div>
      </div>

      <div className="container mx-auto">
        <section className="w-full py-10">
          <div className="bg-slate-50 w-full h-full px-10 py-2 animate-fade-up">
            <SectionHeader>What is beatmarketedu?</SectionHeader>
            <p>
              Beat Market Edu is an online platform created by Rameex.fx so he can share his knowledge in trading. <br />
              The Beatmarketedu is designed for,Any new trader who wants to start trading the right way. Any experienced trader who hasn't found yet the 
              correct method to turn profitable. Any profitable trader who would like an additional tool to understand how the market works.
              
            </p>
          </div>
          <InfoSection
            
            title="What is BMQ Strategy?"
            content="
            The BMQ Strategy combines the world's best trading strategies to 
            create a successful and comprehensive approach. By analyzing the markets from different 
            perspectives and employing various strategies, we ensure high-probability trade decisions. BMQ incorporates multiple core strategies, 
            including Market Structure (MS), Liquidity Concepts,Market Maker Concepts and various indicators to enhance confirmation and accuracy in trades.
            "
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
          <div className="sm:grid grid-cols-5 p-10 gap-1">
            <div className="bg-green-400 col-span-1 rounded-xl my-2 p-2 ">
              <div className='flex justify-between font-bold'>
                Mohammed Naji
                <Rating rate={4.8}/>
              </div>
              "I finally found a strategy that works for me. The integration of your unique concepts gives me the confidence to trade more effectively."
            </div>
            <div className="bg-green-400 col-span-1 p-4 rounded-xl my-2">
            <div className='flex justify-between font-bold'>
                Deepak.M
                <Rating rate={4.6}/>
              </div>
              "Highly impressed with this course! It's transformed my trading abilities, I wholeheartedly recommend it to anyone serious about trading."
              </div>
            <div className="bg-green-400 col-span-2 p-4 rounded-xl my-2"> 
            <div className='flex justify-between font-bold'>
                Jins Joy
                <Rating rate={4.7}/>
              </div>
                Your course completely transformed my trading approach. The combination of your strategies provides a solid foundation for making smart decisions and taking high probability trades.Thankyou </div>
            <div className="bg-green-400 col-span-1 p-4 rounded-xl my-2">
            <div className='flex justify-between font-bold'>
                Vyshak 
                <Rating rate={4.7}/>
              </div>
              This course exceeded my expectations. Now, I'm confident in my trading abilities. Highly recommended!</div>
          </div>
          <div className="bg-slate-50 p-3 flex justify-center">
            <Button onClick={()=>navigate('/courses')} className="bg-green-400 text-black">Become a Successful Trader</Button>
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
