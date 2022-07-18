import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

const [nav, setNav] = useState(true);

const tuggleHandler = ()=>{
    setNav(!nav);
};
  return (
    <div className='flex justify-between items-center m-auto h-24 max-w-[1240px] px-4'>
         <h1 className='text-3xl font-bold text-green-500 cursor-pointer'>REACT.</h1>
        
             <ul className='text-white space-x-10 hidden md:flex'>
                 <li className='hover:text-green-500 cursor-pointer'>Home</li>
                 <li className='hover:text-green-500 cursor-pointer'>Company</li>
                 <li className='hover:text-green-500 cursor-pointer'>Resource</li>
                 <li className='hover:text-green-500 cursor-pointer'>About</li>
                 <li className='hover:text-green-500 cursor-pointer'>Contact</li>
             </ul>
        <div className='block md:hidden' onClick={tuggleHandler}>
            {nav ? <AiOutlineMenu color='white' size={20}/> : <AiOutlineClose color='white' size={20} />}
            
        </div>
        <div className={!nav? "absolute -left-5 -top-5 m-5 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500" : " ease-in-out duration-500 fixed left-[-500px]"}>
        <h1 className='p-5 text-3xl font-bold text-green-500 cursor-pointer'>REACT.</h1>
        <ul className='text-white flex flex-col space-y-8 mt-10 '>
                 <li className='hover:text-green-500 cursor-pointer border-b p-5 border-b-gray-500'>Home</li>
                 <li className='hover:text-green-500 cursor-pointer border-b p-5 border-b-gray-500'>Company</li>
                 <li className='hover:text-green-500 cursor-pointer border-b p-5 border-b-gray-500'>Resource</li>
                 <li className='hover:text-green-500 cursor-pointer border-b p-5 border-b-gray-500'>About</li>
                 <li className='hover:text-green-500 cursor-pointer border-b p-5 border-b-gray-500'>Contact</li>
             </ul>
        </div>
    </div>
  )
}

export default Navbar