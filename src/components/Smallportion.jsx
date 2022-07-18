import React from 'react'

const Smallportion = () => {
  return (
    <div className=' h-[320px] md:h-[250px] max-w-[1240px] bg-inherit flex flex-col  md:flex-row text-white justify-between mx-auto items-center md:space-x-4'>
      <div className="flex flex-col m-2 md-m-0 ">
        <h1 className='font-bold text-xl sm:text-3xl md:text-4xl'>
          Want tips and tricks to optimize your flow?
        </h1>
        <p>
          Sign up our newsletter and stay up to date
        </p>
      </div>
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col sm:flex-row md:flex-row md:space-x-4  md:space-y-0 sm:space-y-0 space-y-3 items-center md:mt-0 mt-3">
            <input className='h-[45px] w-[270px] border-none rounded-md pl-5' type="text" placeholder='Enter Email' />
            <button className='bg-green-500 m-5 h-[45px] w-[150px] text-black font-bold rounded-lg'>Notify Me</button>
          </div>
          <div className='md-m-0 m-2'>
          <p>
            We care about the protection of your data. Read our <a href='#' className='text-green-500'>Privacy policy</a>
          </p>
          </div>
          
        </div>
    </div>
  )
}

export default Smallportion