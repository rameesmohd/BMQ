import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../../Components/Users/Navbar'
import {Button, Card, Flex} from 'antd'
import userAxios from '../../Axios/Useraxios'
import {toast} from 'react-hot-toast'
import {CheckOutlined, LockOutlined, UnlockOutlined  } from '@ant-design/icons'
import { Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import Classroom from './Classroom'
import { Progress } from 'antd';
import { useNavigate } from 'react-router-dom'
import { setUser ,addCompletedChapter} from '../../Redux/UserSlice'


const Mycourse = () => {
  const [ course,setCourse ]=useState([])
  const [loading,setLoading ] = useState(true)
  const [classroomChapter,setClassroomChapter]=useState({})
  const [chapterIndex,setChapterIndex]=useState('')  
  const [progress,setProgress]=useState(0)
  const axiosInstance = userAxios()
  const dispatch = useDispatch()
  const userId = useSelector((state)=>state.Client.user_id)
  const navigate = useNavigate()

  const completedChapters = useSelector((state)=>state.Client.completed_chapters)  
  const course_data = [
      {
        _id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
        title: "What is trading?",
        lesson: [
          {
            _id: "2q3p4o5n-6m7l-8k9j-0i1h-2g3f4e5d6c7b",
            lessonVideoUrl: "https://player.vimeo.com/video/952645734?h=c489c2b78e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
        title: "Currencies in Forex Trading",
        lesson: [
          {
            _id: "3r4q5p6o-7n8m-9l0k-1j2i-3h4g5f6e7d8c",
            lessonVideoUrl: "https://youtu.be/Dj5TCsA_7aI"
          }
        ]
      },
      {
        _id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
        title: "Pip and Pippets",
        lesson: [
          {
            _id: "4s5r6q7p-8o9n-0m1l-2k3j-4i5h6g7f8e9d",
            lessonVideoUrl: "https://youtu.be/-bQilG5ibqQ"
          }
        ]
      },
      {
        _id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
        title: "Lots",
        lesson: [
          {
            _id: "5t6s7r8q-9p0o-1n2m-3l4k-5j6i7h8g9f0e",
            lessonVideoUrl: "https://youtu.be/W_Pzy2RHZGU"
          }
        ]
      },
      {
        _id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u",
        title: "Leverage",
        lesson: [
          {
            _id: "6u7t8s9r-0q1p-2o3n-4m5l-6k7j8i9h0g1f",
            lessonVideoUrl: "https://youtu.be/HEQlNAApPKs"
          }
        ]
      },
      {
        _id: "7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v",
        title: "Spread",
        lesson: [
          {
            _id: "7v8u9t0s-1r2q-3p4o-5n6m-7l8k9j0i1h2g",
            lessonVideoUrl: "https://youtu.be/qVbGqK6zyos"
          }
        ]
      },
      {
        _id: "8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w",
        title: "Swap",
        lesson: [
          {
            _id: "8w9v0u1t-2s3r-4q5p-6o7n-8m9l0k1j2i3h",
            lessonVideoUrl: "https://youtu.be/1ZANnmMZPv4"
          }
        ]
      },
      {
        _id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x",
        title: "Margin and Equity",
        lesson: [
          {
            _id: "9x0w1v2u-3t4s-5r6q-7p8o-9n0m1l2k3j4i",
            lessonVideoUrl: "https://player.vimeo.com/video/952689560?h=4a894f1340&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "8ffd4c10-f908-49c0-9b8e-4d29940e9956",
        title: "Candlesticks",
        lesson: [
          {
            _id: "af822c5d-8851-4472-80b4-02225de2d067",
            lessonVideoUrl: "https://player.vimeo.com/video/952689738?h=09eb984fd4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "b211683d-eb1d-4faf-9edb-5af8621461e0",
        title: "Limit Orders",
        lesson: [
          {
            _id: "f1721ad2-0b34-46f3-97cb-0adfb1c6e0a6",
            lessonVideoUrl: "https://player.vimeo.com/video/952708556?h=3e860baa35&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "c324896f-07e8-4b1e-92e0-7b5b80e9876a",
        title: "Concepts of Trend",
        lesson: [
          {
            _id: "1p2o3n4m-5l6k-7j8i-9h0g-1f2e3d4c5b6a",
            lessonVideoUrl: "https://player.vimeo.com/video/952689667?h=6924bfbeaa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "d423895f-07e8-4b1e-92e0-8c6b80e9977b",
        title: "Relative Strength Index (RSI)",
        lesson: [
          {
            _id: "2q3r4s5t-6u7v-8w9x-0y1z-2a3b4c5d6e7f",
            lessonVideoUrl: "https://player.vimeo.com/video/952689618?h=9094afa5d7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "e524896f-07e8-4b1e-92e0-9d7b80e9988c",
        title: "Fundamental Analysis",
        lesson: [
          {
            _id: "3r4s5t6u-7v8w-9x0y-1z2a-3b4c5d6e7f8g",
            lessonVideoUrl: "https://player.vimeo.com/video/952689477?h=2ef6d59ca4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "f624896f-07e8-4b1e-92e0-0e8b80e9999d",
        title: "Why 90% fails in trading?",
        lesson: [
          {
            _id: "4s5t6u7v-8w9x-0y1z-2a3b-4c5d6e7f8g9h",
            lessonVideoUrl: "https://player.vimeo.com/video/952689367?h=f62db8308e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "g724896f-07e8-4b1e-92e0-1f9b80e9900e",
        title: "Money Management",
        lesson: [
          {
            _id: "5t6u7v8w-9x0y-1z2a-3b4c-5d6e7f8g9h0i",
            lessonVideoUrl: "https://player.vimeo.com/video/952703274?h=7b594e3b1d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "8ffd4c10-f908-49c0-9b8e-4d29940e9956",
        title: "Orderblocks",
        lesson: [
          {
            _id: "af822c5d-8851-4472-80b4-02225de2d067",
            lessonVideoUrl: "https://player.vimeo.com/video/910364289?h=050531d1bd&badge=0&autopause=0&player_id=0&app_id=58479"
          }
        ]
      },
      {
        _id: "b211683d-eb1d-4faf-9edb-5af8621461e0",
        title: "Breaker Block",
        lesson: [
          {
            _id: "f1721ad2-0b34-46f3-97cb-0adfb1c6e0a6",
            lessonVideoUrl: "https://player.vimeo.com/video/910365429?h=3ace4709c9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "eec919c2-5e84-409e-8e97-d513349c102a",
            lessonVideoUrl: "https://player.vimeo.com/video/910366099?h=f7f41ca270&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "c4dc7835-d09d-4cfc-9efc-349cfede31e4",
        title: "Fair Value Gap (FVG)",
        lesson: [
          {
            _id: "f45a4e63-2154-460b-a8f5-8b0cda5574f8",
            lessonVideoUrl: "https://player.vimeo.com/video/910366666?h=147072e315&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "230a1cb5-08ff-450f-bc4a-825096ebef6c",
        title: "Propulsion Block",
        lesson: [
          {
            _id: "ba6ed8f0-8799-4a19-b73c-6836c5ef655d",
            lessonVideoUrl: "https://player.vimeo.com/video/910368005?h=61f335167e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "e1aea271-5414-4067-9332-4cf2590a277c",
        title: "What is Liquidity?",
        lesson: [
          {
            _id: "f7a2d5c7-41c0-4a45-b18d-446af2d14b6b",
            lessonVideoUrl: "https://player.vimeo.com/video/910368729?h=a915b02eb7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "bc449904-471e-418f-9d0d-eac254b4a809",
        title: "Market Structures",
        lesson: [
          {
            _id: "99a03d5e-2b41-4d27-a50e-f7b9b77a9b5a",
            lessonVideoUrl: "https://player.vimeo.com/video/910369758?h=18ac59886d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "d3249b54-62c1-497c-92f1-b9c351d64077",
        title: "Market Structure with Liquidity",
        lesson: [
          {
            _id: "d7b8b9c4-2d70-48b1-8c7b-1c5bc3e0ff9e",
            lessonVideoUrl: "https://player.vimeo.com/video/910370627?h=56cc14a947&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "763bad4b-09fc-4f2f-bf06-ee212f743eb0",
            lessonVideoUrl: "https://player.vimeo.com/video/910371634?h=1c791b2a15&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "2c06193e-e866-456d-b469-8a318e3b6733",
            lessonVideoUrl: "https://player.vimeo.com/video/910372473?h=58c66bdaa7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "dd5d8076-651b-42f1-944b-61644d04aed5",
            lessonVideoUrl: "https://player.vimeo.com/video/910373094?h=5a034b066a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "6691fede-7846-46e6-9f24-c9a61c0f3fbe",
        title: "Yesterday Low & High Concept",
        lesson: [
          {
            _id: "6f37f8cc-1958-4dcb-bfa3-5eb5d3bc6c48",
            lessonVideoUrl: "https://player.vimeo.com/video/910374094?h=51ae89aa3c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "d2a6e7c2-3d77-4c9e-96bc-703c8e7d45ad",
        title: "Half Batman Pattern",
        lesson: [
          {
            _id: "4f7bb1db-d825-4a18-bd7d-2b6f6b1798e1",
            lessonVideoUrl: "https://player.vimeo.com/video/910374911?h=52805d908a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "ecf17118-6d98-4997-ac6a-7554cd817d77",
        title: "Market Maker Components (MM)",
        lesson: [
          {
            _id: "d43a54b0-f0f7-4f1b-91e5-8e3be4b2fffc",
            lessonVideoUrl: "https://player.vimeo.com/video/910375435?h=7508824087&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "09ca4c68-1dc4-4b24-abfa-16e06ca41f66",
            lessonVideoUrl: "https://player.vimeo.com/video/910375894?h=402e8669de&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "d332512c-0ecb-497b-9e48-5fac6d31ca31",
        title: "Weekly Cycle",
        lesson: [
          {
            _id: "d0c68cf1-8b35-4d89-96de-b0b56904d7a8",
            lessonVideoUrl: "https://player.vimeo.com/video/910376430?h=be810d4711&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "64863710-62ea-427d-90aa-722738cdf0b7",
        title: "Daily Cycle",
        lesson: [
          {
            _id: "703768d0-abe5-46da-b013-ef9f02e3f110",
            lessonVideoUrl: "https://player.vimeo.com/video/910377260?h=3abaee0d81&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "295e3845-2b79-4102-8206-6090a1df6235",
        title: "Our EMAs and TDI",
        lesson: [
          {
            _id: "d0e56f75-9230-4c62-b43e-107a4c1a2f7d",
            lessonVideoUrl: "https://player.vimeo.com/video/910378068?h=cbada64843&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "60df1168-d3f5-4304-bc46-dea0c5684069",
            lessonVideoUrl: "https://player.vimeo.com/video/910378674?h=7ea8a75c8e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "a8899d57-3d8a-4d90-bec2-3727ed1691e7",
        title: "Levels",
        lesson: [
          {
            _id: "f541d2d7-f8d8-48e5-8612-74f19b8f3dc1",
            lessonVideoUrl: "https://player.vimeo.com/video/910379362?h=5d5aaf2e02&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "0b274214-83d6-4e97-905f-4cc26f449830",
            lessonVideoUrl: "https://player.vimeo.com/video/910380104?h=b36b87f4d9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "425a36b2-c36e-453b-8e03-d166577029de",
        title: "Peak",
        lesson: [
          {
            _id: "7a33e4b5-04ed-4b77-a1c6-1c9301db8a02",
            lessonVideoUrl: "https://player.vimeo.com/video/910380577?h=853f2beee9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "69603d6f-8396-414b-a044-ed1c9307814a",
            lessonVideoUrl: "https://player.vimeo.com/video/910381294?h=51ddf0a74b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "509ec08e-5d14-408b-967b-5b199b915684",
        title: "Resets",
        lesson: [
          {
            _id: "7c28c1b8-2b7e-4b9a-89bc-d8b0e4a8f9db",
            lessonVideoUrl: "https://player.vimeo.com/video/910381757?h=af2dce1a73&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "9c8c345b-0c87-40de-aeb2-7c42c9150f7f",
        title: "Intraday setups",
        lesson: [
          {
            _id: "a705c5e1-8088-41e1-b7a4-1dd05a0b1eb3",
            lessonVideoUrl: "https://player.vimeo.com/video/910382356?h=3ad7b54a32&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "476e0a36-ca47-44cc-be42-df9164e57654",
            lessonVideoUrl: "https://player.vimeo.com/video/910383205?h=9357225371&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "f648f1db-9bc5-487e-bf6e-15f40d2a2d2b",
        title: "ID 50 & Safety Trade",
        lesson: [
          {
            _id: "a97a19f6-fba8-42b5-9088-8a9fc9bca004",
            lessonVideoUrl: "https://player.vimeo.com/video/910383755?h=528310e3cf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "a97a19f6-fba8-42b5-9088-8a9fc9bca004",
            lessonVideoUrl: "https://player.vimeo.com/video/910384075?h=0bdfea67d2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "a97a19f6-fba8-42b5-9088-8a9fc9bca004",
            lessonVideoUrl: "https://player.vimeo.com/video/910384394?h=b961bde893&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          },
          {
            _id: "a97a19f6-fba8-42b5-9088-8a9fc9bca004",
            lessonVideoUrl: "https://player.vimeo.com/video/910384601?h=955f0d295f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
      {
        _id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        title: "Conclution",
        lesson: [
          {
            _id: "1p2o3n4m-5l6k-7j8i-9h0g-1f2e3d4c5b6a",
            lessonVideoUrl: "https://player.vimeo.com/video/910385164?h=2830fcf9bf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          }
        ]
      },
  ];
  
  console.log(course_data);

  const handleChapterComplete=async()=>{
      try {
        dispatch(addCompletedChapter([...completedChapters,classroomChapter._id]))
        if(progress<100){
          toast.success('Next chapter unlocked')
        }
        setClassroomChapter({})
      } catch (error) {
        toast.error(error.message)
        console.log(error);
      }
    }

  function calculateProgress(){
    if (completedChapters.length === 0 || course.length === 0) {
      return 0; 
    }
    return Math.floor((completedChapters.length/course.length)*100)
  }
  
  useEffect(()=>{

    console.log('course : ', course);
    setCourse(course_data)
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  },[])

  useEffect(()=>{
    setProgress(calculateProgress())
  },[completedChapters,course])

  return (
    <div className='bg-slate-50'>
    <Navbar/>
     <div className='container mx-auto pt-28 px-4'>
        <div className='font-poppins text-2xl my-2 font-bold'>My Course</div>
        <hr />
        <div className='my-8 animate-fade-right'>
          {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} loading={loading} rows={20} active className='my-8' />
          ))}
        </div>
        { !Object.keys(classroomChapter).length?
         <section className='flex justify-center  my-8'>
          { !loading && course.length ? 
           <>
            <div className='flex w-full min-h-[500px] animate-fade-right'>
                 <div className=' h-full md:w-2/3'>
                 <Card className='bg-slate-300' title={<h3 style={{ fontSize: '20px',color : 'black' }}>Mastering Trading Essentials</h3>}>
                 <Progress percent={progress} />
                  { course.map((chapters,i)=>
                  <div key={chapters._id}>
                    {completedChapters.includes(chapters._id) ? (  
                      <Card key={chapters._id} onClick={()=>{setClassroomChapter(chapters), setChapterIndex(i+1)}} className='font-semibold my-1 hover:bg-slate-100 cursor-pointer'> 
                        <Flex justify={'space-between'} align={'center'}>
                          <div className='text-lg text-black'>
                              {i+1+"."+chapters.title}  
                          </div>
                          <div >
                            {<CheckOutlined className='text-2xl text-white bg-green-500 rounded-full p-1'/> }
                          </div> 
                        </Flex>
                      </Card> ) :
                      ( i>0 && completedChapters.includes(course[i-1]._id) || i==0 ?
                       <Card key={chapters._id} onClick={()=>{setClassroomChapter(chapters), setChapterIndex(i+1)}} className='font-semibold my-1 hover:bg-slate-100 cursor-pointer'> 
                          <Flex justify={'space-between'} align={'center'}>
                          <div className='text-lg text-black'>
                              {i+1+"."+chapters.title}  
                          </div>
                          <div >
                            <UnlockOutlined className='text-2xl border rounded-full p-1'/>
                          </div> 
                        </Flex>
                      </Card> :
                      <Card key={chapters._id} className='font-semibold my-1 hover:bg-slate-100 cursor-pointer'> 
                      <Flex justify={'space-between'} align={'center'}>
                      <div className='text-lg text-black'>
                          {i+1+"."+chapters.title}  
                      </div>
                      <div >
                        <LockOutlined className='text-2xl border rounded-full p-1'/>   
                      </div> 
                    </Flex>
                    </Card>)}
                  </div>
                  )}
                {completedChapters.includes(course[course.length-1]._id) && <Flex className='mt-4' justify='end' align='center'>
                  <div className='mx-2 font-bold text-green-700 text-xl'>
                      Congratulations !!
                  </div>
                    {/* <Congrates/> */}
                </Flex>}
                </Card>
                </div>  
                <div className='hidden md:block w-1/3'>
                      <img src="https://ih1.redbubble.net/image.1207220572.5615/st,small,507x507-pad,600x600,f8f8f8.u1.webp" alt="" />
                </div> 
            </div>
           </>
          : ( !loading && <div className='my-8 sm:h-96 '>
          <img className='h-72 ' src="https://img.freepik.com/free-vector/order-paying-contactless-payment-by-credit-card-order-basket-laptop-bank-card-male-online-customer-with-tablet-cartoon-character_335657-2563.jpg" alt="" />
          <p>My course cart is feeling pretty lonely.</p>
          <div className='flex justify-center mt-4 mb-2'>
            <Button type='primary' onClick={()=>navigate('/checkout')} style={{backgroundColor :'blue'}} className={'animate-pulse border font-poppins'}>
                Purchase our course now
            </Button>
          </div>
        </div>)}
        </section>:
         <Classroom chapter={classroomChapter} chapterIndex={chapterIndex} goBack={()=>setClassroomChapter({})} handleChapterComplete={handleChapterComplete}/> 
         }
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Mycourse
