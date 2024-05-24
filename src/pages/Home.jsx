import React from 'react'
import Navbar from '../components/Common/Navbar'
import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import imageSection1 from '../assets/3-Month-Journey-.png'
import Collapse from '../components/Common/Collapase'
import Footer from '../components/User/Footer'

const Home = () => {
  const whatYouWillLearn = ["Introduction to Trading Fundamentals","Indicators Deep Dive","Liquidity Dynamics","Market Structure Analysis","Insights into Market Makers","ICT Concepts"]
  const SkillsYouWillAchieve = ["Trading in different currency pairs ","Forex analysis","Technical analysis currency pairs","Fundamental analysis","Trading mindset","Trading in different currency pairs","Liquidity analysis"]
 
  return (
    <>
    <Navbar/>
    <div style={{ backgroundImage: 'url("https://bitrader.thetork.com/wp-content/uploads/2023/10/banner_bg.png")' }}>
    <div className='container mx-auto'>
      <section className='grid grid-cols-3 gap-1  pt-24'>
        <div className='col-span-2  p-10 flex justify-center'>
          <iframe width="560" height="315" className='w-full h-full' src="https://www.youtube.com/embed/EPmdI9Gjk5I?si=KyhJaQ5pwAtWrG5p" title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        <div className='col-span-1  p-10'>
          <h2 className='text-6xl'>WHAT IF I CAN TEACH YOU <span className='text-green-500'>BASICS TO ADVANCED</span> TRADING RIGHT NOW?</h2>
          <p className='my-2 text-lg'>Get access to our Powerful Foundational Course that will change the way you look at the markets forever.</p>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-1 bg-slate-200 p-10'>
        <div className='col-span-1  p-10'>
          <h2 className='text-6xl'>Let us help you become a Successful Trader</h2>
          <p className='my-2'>We will walk you through the
              make a trade profitable. With each trade being different, you have to
              understand how the market works
              to select a performing trade. This is exactly what you will learn with BeatMarketEdu.</p>
          <Button > Get Access Now <RightOutlined /></Button>
        </div>
        <div className='col-span-1 flex justify-center'>
              <img src={imageSection1} className='max-h-96 bg-slate-200' alt="" />
        </div>
      </section>
      </div>
    </div>

    <div className='container mx-auto'>

    <section className='w-full py-10'>
        <div className='bg-slate-50 w-full h-full px-10 py-2'>
            <h2 className='text-4xl my-2'>What is beatmarketedu?</h2>
            <p>Urban Forex is an online platform created by Navin Prithyani so he can share his knowledge in trading. <br/>
               Navin created powerful online video programs in which you can learn how to trade using price action (without indicators).</p>
        </div>
        <div className=' w-full h-full my-2 px-10'>
            <h2 className='text-4xl my-2'>What is BMQ Strategy?</h2>
            <p>Any new trader who wants to start trading the right way.
              Any experienced trader who hasn't found yet the correct method to turn profitable.
              Any profitable trader who would like an additional tool to understand how the market works.</p>
        </div>
    </section>
    <hr />
    <section className='px-10 w-full'>
    <div className='w-full py-3  col-span-3 font-sans animate-fade-right'>
      <div className='text-3xl mb-2 font-semibold'> 
          About the course
      </div>
      <p className='text-lg my-2 '>
        Mastering Trading Essentials,
        Unlock the secrets of successful trading with our comprehensive course on indicators, liquidity, market structure, and market maker concepts. 
        Whether you're a beginner or an experienced trader, this course will equip you with the knowledge and strategies to navigate the financial markets confidently.
      </p>
      <div>
      <div className='text-3xl my-3 font-semibold'> 
          What you will learn
      </div>
        <div className='flex flex-wrap w-2/3'>
          {whatYouWillLearn.map((value, index) => (
            <React.Fragment key={index}>
              <div className='border text-base p-2 mx-1 my-1'>
                {value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        <div className='text-3xl my-2 font-semibold'> 
            Skills you will achieve
        </div>
        <div className='flex flex-wrap w-2/3'>
          {
            SkillsYouWillAchieve.map((value,i)=>{
              return (
                <div key={i} className='border text-base p-2 mx-1 my-1 bg-blue-50 '>
                   {value}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </section>

    <section key={'Students reviews'}>
            <div className='w-full text-center text-3xl '>
                BeatMarketEdu Students <br/> Reviews
            </div>
            <div className='grid grid-cols-5 p-10 gap-1'>
                  <div className='bg-green-500 col-span-1 rounded-xl p-10'>
                        sdfsdfd
                  </div>
                  <div className='bg-green-500 col-span-2 p-4 rounded-xl'>
                        sdfsdfd
                  </div>
                  <div className='bg-green-500 col-span-1 rounded-xl '>
                        sdfsdfd
                  </div>
                  <div className='bg-green-500 col-span-1 rounded-xl'>
                        sdfsdfd
                  </div>
            </div>
            <div className='bg-slate-50 p-3 flex justify-center'>
                <Button className='bg-green-400 text-black' type=''>Become a Successful Trader</Button>
            </div>
    </section>
     <section className='py-10 '>
          <div>Commonly Asked Questions</div>
          <Collapse/>
      </section>     
    </div>
    <Footer/>
    </>
  )
}

export default Home
