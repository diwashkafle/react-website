import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="flex flex-col max-w-[800px] w-full h-screen text-center mx-auto justify-center">
        <p className='font-bold uppercase text-green-500'>
        GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl my-5 md:my-15 '>
            Grow with data.
        </h1>
        <p className=' my-5 font-bold text-3xl sm:text-4xl md:text-5xl'>
            Fast,flexible financing for <br/>everyone
        </p>
        <p className=' text-xl font-bold uppercase text-gray-500 '>
            Monitor your data analytics to increase revenue for BTB, BTC, and SASS platforms.
        </p>
        <button className='border-none w-[200px] h-[50px] bg-green-500 text-black font-bold hover:bg- rounded-full mx-auto my-10 ease-in-out duration-500'>
            Get Started
        </button>
        </div>
    </div>
  )
}

export default Hero