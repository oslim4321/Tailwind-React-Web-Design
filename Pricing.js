import React from 'react'

function Pricing() {
  return (
    <div className='w-full  my-24'>
        <div className='py-20 w-full h-[800px] bg-black mix-blend-overlay '>
              <div className="text-center">
              <p className=' text-gray-100 text-1xl lg:text-4xl md:text-4xl'>Pricing</p>
              <h1 className='text-white text-2xl lg:text-5xl md:text-4xl font-bold py-5'>The Right Price for Your Research.</h1>
              <p className='text-gray-200 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et atque cupiditate odio illo. Aspernatur!</p>
              </div>
       
          <div className='grid md:grid-cols-2 gap-3'>
              <div className=' mt-[-5px] rounded bg-white text-slate-900 shadow-xl p-8'>
                      <span className='uppercase px-3 py-1 my-5 bg-purple-500 rounded-2xl p-y'>Standard</span>
                  <div className='text-6xl font-bold flex'>
                      <p>$54.6/<span>mo</span></p>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, doloribus?</p>
                  <div>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <p>Lorem, ipsum dolor.</p>
                      <button>Get Started</button>
                  </div>
              </div>
       
        </div>
          </div>
          </div>
  )
}

export default Pricing