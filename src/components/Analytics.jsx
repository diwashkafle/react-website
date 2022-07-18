import React from 'react'
import laptop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='w-full h-[667px] md:h-[500px] bg-white'>
      <div className="flex h-[667px] md:h-[500px] max-w-[1240px] flex-col md:flex-row md:items-center md:justify-between md:mx-auto">
          <img src={laptop} alt="laptop" className="md:h-[350px] h-[280px] md:w-auto w-[320px]"/>
           <div className='ml-5 mt-5 md:mt-0' >
               <p className='uppercase font-bold text-green-500'>DATA ANALYTICS DASHBOARD</p>
               <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
               Manage Data Analytics Centrally
               </h1>
               <p className='my-5'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
               </p>
               <button className='border-none w-[200px] h-[50px] bg-black text-green-500 font-bold rounded-full mx-auto ease-in-out duration-500'>
                   Get Started
               </button>
           </div>
      </div>
    </div>
  )
}

export default Analytics