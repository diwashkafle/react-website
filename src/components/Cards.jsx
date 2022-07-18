import React from 'react'
import single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='h-[1550px] bg-white w-full md:h-[650px]'>
        <div className="max-w-[1260px] h-[650px] flex flex-col md:flex-row justify-between mx-auto items-center md:space-x-4">
            <div className="h-[400px] w-full md:w-[340px] bg-[#ffffff] drop-shadow-2xl rounded-lg flex flex-col items-center hover:scale-105 ease-in-out duration-300 md:mt-0  mt-[150px]">
                <img src={single} alt="." className="w-20 -mt-10" />
                <h1 className="text-2xl font-bold p-7">
                    Single User
                </h1>
                <h1 className='text-4xl font-bold pb-7'>
                    $149
                </h1>
                <div className='flex flex-col'>
                    <p className= " py-3 border-b-[1px] border-gray-400">500 GB Storage</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">1 Granted User</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 text-black h-[40px] w-[120px] font-bold m-4 rounded-lg'>
                    Start Trial
                </button>
            </div>
            <div className="h-[400px] w-full md:w-[340px] bg-[#ffffff] drop-shadow-2xl rounded-lg flex flex-col items-center hover:scale-105 ease-in-out duration-300 md:my-0 my-[80px]">
                <img src={Double} alt="." className="w-20 -mt-10" />
                <h1 className="text-2xl font-bold p-7">
                    Double User
                </h1>
                <h1 className='text-4xl font-bold pb-7'>
                    $349
                </h1>
                <div className='flex flex-col'>
                    <p className= " py-3 border-b-[1px] border-gray-400">500 GB Storage</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">1 Granted User</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 text-black h-[40px] w-[120px] font-bold m-4 rounded-lg'>
                    Start Trial
                </button>
            </div>
            <div className="h-[400px] w-full md:w-[340px] bg-[#ffffff] drop-shadow-2xl rounded-lg flex flex-col items-center hover:scale-105 ease-in-out duration-300">
                <img src={Triple} alt="." className="w-20 -mt-10" />
                <h1 className="text-2xl font-bold p-7">
                    Triple User
                </h1>
                <h1 className='text-4xl font-bold pb-7'>
                    $449
                </h1>
                <div className='flex flex-col'>
                    <p className= " py-3 border-b-[1px] border-gray-400">500 GB Storage</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">1 Granted User</p>
                    <p className= " py-3 border-b-[1px] border-gray-400">Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 text-black h-[40px] w-[120px] font-bold m-4 rounded-lg'>
                    Start Trial
                </button>
            </div>
        </div>
    </div>
  )
}

export default Cards