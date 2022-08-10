import React from 'react'
import { support } from './Webdata'

function Support() {
  return (
      <div className='w-full bg-red relative'>
          <div className='w-full h-[700px] bg-gray-900/90 relative'>
             <img className='w-full h-full object-cover mix-blend-overlay ' src="images/stock-photo-woman-is-using-virtual-reality-headset-neon-light-studio-portrait-1563687376 (1).jpg" alt="" />
       
            
          <div className='absolute top-10 text-white w-full'>
              <div className='px-5 py-12'>
                  <h1 className='text-center text-4xl uppercase text-slate-300'>Support</h1>
                  <h1 className='text-center text-lg lg:text-5xl py-6 font-bold'>Finding the right team</h1>
                  <p className='md:text-1xl text-center font-bold text-slate-300 lg:px-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum sit iusto labore officiis libero commodi nam dolor quisquam saepe. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel corrupti ex itaque quia dicta saepe obcaecati rem a magni tenetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, dolores? Repudiandae possimus architecto pariatur iusto repellat error laudantium ipsum eaque?</p>
              </div>
            </div>
             
              <div className=' mt-10 px-10 w-full sm:pt-20  grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 absolute top-[60%] lg:bottom-[-10px] text-black place-content-center lg:px-40'>
                  {
                      support.map(elem => {
                          return (
                            <div key={elem.id} className='max-w-[1240px] mx-auto bg-white rounded-xl border border-slate-100 shadow-2xl'>
                            <div className='p-8 bg-blue-400 w-10 mt-[-1rem] rounded ml-[1rem] mb-8 absolute'>
                                <img className='object-cover' src={elem.badge} alt="" />
                            </div>
                              <div className='px-5 py-5'>
                                  <h3 className='font-bold py-5 mt-3'>{elem.title}</h3>
                                  <p className='text-gray-700'>{elem.text}</p>
                            </div>
                            <div className='bg-slate-100 py-4 pl-5'>
                              <p className='text-indigo-600'>Contact us ---> </p>
                          </div>
                           </div>
                          )
                      })
                  }          
          </div>
          </div>
    </div>
  )
}

export default Support