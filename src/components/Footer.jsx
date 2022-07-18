import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {FaGithubSquare} from 'react-icons/fa'
import {FaSnapchatSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='h-[550px] md:h-[400px] w-full bg-#000300'>
        <div className="max-w-[1260px] h-[550px] md:h-[400px] flex flex-col md:flex-row  mx-auto md:items-center ">
            <div className=" md:w-[30%] text-white ml-5 mt-10 md:-mt-[90px] space-y-8">
                <h1 className='text-3xl text-green-500 font-bold'>
                    REACT.
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, iusto ad error recusandae facere fugiat. Alias est, asperiores sed minus perferendis quae ad ipsa maxime necessitatibus hic possimus architecto veritatis!
                </p>
                <div className='flex md:space-x-8 md:justify-start justify-between'>
                    <AiFillFacebook color="white" size={40}/> 
                    <AiOutlineInstagram color="white" size={40}/>                
                    <AiFillTwitterSquare color="white" size={40}/>                
                    <FaGithubSquare color="white" size={40}/>                
                    <FaSnapchatSquare color="white" size={40}/>                              
                </div>
            </div>
            <div className="flex md:w-[60%] space-x-3 justify-between my-10 mx-auto text-[15px]">
                <div className="flex flex-col text-white space-y-4">
                    <h1 className='text-base font-bold text-[#a2a2a2]'>Solutions</h1>
                    <p>Analytics</p>
                    <p>Marketing</p>
                    <p>Commerce</p>
                    <p>Insights</p>
                </div>
                <div className="flex flex-col text-white space-y-4">
                    <h1 className='text-base font-bold text-[#a2a2a2]'>Support</h1>
                    <p>Pricing</p>
                    <p>Documentation</p>
                    <p>Guides</p>
                    <p>API Status</p>
                </div>
                <div className="flex flex-col text-white space-y-4">
                    <h1 className='text-base font-bold text-[#a2a2a2]'>Company</h1>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Jobs</p>
                    <p>Career</p>
                </div>
                <div className="flex flex-col text-white space-y-4">
                    <h1 className='text-base font-bold text-[#a2a2a2]'>Legal</h1>
                    <p>Claim</p>
                    <p>Copyright</p>
                    <p>Terms</p>
                    <p>Policy</p>
                </div>
                

            </div>

        </div>
    </div>
  )
}

export default Footer