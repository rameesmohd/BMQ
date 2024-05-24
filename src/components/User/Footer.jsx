import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='w-full container mx-auto grid grid-cols-3'>
            <div className='col-span-1 col-start-3 text-slate-200 py-2'>
                <div className='text-end'>My Courses Login</div>  
                <div className='text-end'>Partners Login</div>
            </div>
        </div>
            <div className='w-full flex justify-center text-slate-200'>
                <div>© 2024 BeatMarketEdu </div>
            </div>
    </div>
  )
}

export default Footer
