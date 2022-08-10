import React, { useState } from 'react'
import {List} from './Webdata'

function Navbar() {
    const [state, setstate] = useState(false)
    function setToggle() {
        setstate(!state)
    }
  return (
    <div className='w-screen bg-gray-200 border-b h-16 shadow-lg z-10 fixed'>
          <div className="flex justify-between items-center px-2 w-full">
              <div className='flex items-center'>
                  <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand</h1>
                  {
                      List.map((elem, i) => {
                          return(
                            <ul className='hidden md:flex items-center px-3 font-bold'>
                                <li className=''><a href={elem.url}>{elem.list}</a></li>
                            </ul>
                          )
                      })
                  }
              </div>

              <div className="hidden md:flex py-2 pr-6">
                  <button className='button'>Signin</button>
                  <button className='buttonBorder'>Signup</button>
              </div>
              
              <div onClick={setToggle} className='md:hidden p-3 pt-6 absolute right-3'>
                <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
                <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
                <span className='h-0 w-6 bg-primary py-1 px-5 flex rounded-sm mt-1'></span>
              </div>
        </div>

        <div className={state ? 'md:hidden w-full mt-2 items-center bg-gray-200 shadow-lg' : 'hidden'}>
              {
                      List.map((elem, i) => {
                          return(
                                <ul key={i} className='px-8'>
                                   <li className='py-4 border-b border-red-100 font-bold'><a href={elem.url}>{elem.list}</a></li>
                                </ul>
                          )
                      })
              }
              <div className='flex flex-col my-4 mb-20 mr-6'>
                 <button className='button my-2'>Signin</button>
                  <button className='buttonBorder mb-4'>Signup</button>
              </div>
        </div>
    </div>
  )
}

export default Navbar