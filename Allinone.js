import React from 'react'
import {All} from './Webdata'

function Allinone() {
  return (
    <div className='w-full my-32'>
          <div className='max-w-[1240px] mx-auto px-2'>
                  <h1 className='text-5xl font-bold text-center'>All-In-One-Platform</h1>
              <p className='text-2xl py-8 text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facere consequuntur ex dignissimos praesentium fuga amet, explicabo nostrum distinctio blanditiis.</p>
              
              <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 mx-5'>
                  {
                      All.map(elem => {
                          return (
                              <div>
                                  <div className='flex border'>
                                      <span className='mr-4 text-primary text-lg pl -3'>+</span>
                                 
                                      <div>
                                      <h3 className='font-bold'>{elem.title}</h3>
                                      <p className='text-lg py-2'>{elem.notifiy}</p>
                                     </div>
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

export default Allinone