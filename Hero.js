import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto relative'>
              <div className='flex flex-col justify-center md:items-start w-full px-4 py-1 md:text-left mt-10 '>
                  <p className='text-2xl mb-1'>Unique sequencing & Production</p>
                  <h1 className='text-5xl py-1  md:ml-15 md:text-7xl md:font-bold'>Oslim Cloud Management</h1>
                  <p className='text-2xl'>This is the Tech Brand</p>
                  <button className='buttonBorder py-3 px-3 sm:w-[60%] mt-4 mb-16'>Get Started</button>
              </div>
              <div className='text-center '>
                  <img className='rounded w-[60%] text-center mx-auto' src="images/wrist.png" alt="" />
              </div>
              
              <div className='absolute text-center rounded-xl md:min-w-[760px] bg-zinc-200 md:left-1/2 border border-slate-300 bottom-[-20%] mx-1 shadow-sm trasform md:-translate-x-1/2 px-20 py-3 hover:shadow-xl'>
                <p className='font-bold text-center mb-2'>Data Service</p>
                <div className='flex justify-between flex-wrap px-4'>
                  <p className='text-slate-500'>App Security</p>
                  <p className='text-slate-500'>Dashboard Design</p>
                  <p className='text-slate-500'>Cloud Data</p>
                  <p className='text-slate-500'>Api Service</p>
                </div>
              </div>
      </div>
      
    </div>
  )
}

export default Hero