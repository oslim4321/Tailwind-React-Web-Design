import React from 'react'

function About() {
  return (
    <div className='w-full my-32'>
        <div className='mx-auto '>
              <div className='text-center md:px-40'>
                <h2 className='text-5xl font-bold'>Trusted By Developers</h2>
                <p className='text-center mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos possimus dolores reiciendis voluptatem illo exercitationem aliquam laborum accusamus molestiae minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate.</p>
              </div>
          </div>
          
          <div className='grid md:grid-cols-3 gap-1 text-center my-5 mx-5 md:px-40'>
              <div className='border rounded py-8 shadow-xl'>
                  <h1 className='text-5xl text-blue-600'>100%</h1>
                  <p>conpletion</p>
              </div>
              <div className='border rounded py-8 shadow-xl'>
                  <h1 className='text-5xl text-blue-600'>24/7</h1>
                  <p>Delevery</p>
              </div>
              <div className='border rounded py-8 shadow-xl'>
                  <h1 className='text-5xl text-blue-600'>100k</h1>
                  <p>Transaction</p>
              </div>
          </div>
        
    </div>
  )
}

export default About