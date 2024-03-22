import React from 'react'
import c1 from '../assests/chitra/chitra-crockery.jpeg';
import c2 from '../assests/chitra/chitra-drawing-1.jpeg';
import c3 from '../assests/chitra/chitra-drawing-2.jpeg';
import c4 from '../assests/chitra/chitra-guest-1.jpeg';
import c5 from '../assests/chitra/chitra-guest-2.jpg';
import c6 from '../assests/chitra/chitra-kidsroom-2.jpeg';
import c7 from '../assests/chitra/chitra-kidsroom-3.jpeg';
import c8 from '../assests/chitra/chitra-kidsrrom-1.jpeg';
import c9 from '../assests/chitra/chitra-livingroom.jpeg';
import c10 from '../assests/chitra/chitra-master-1.jpeg';
import c11 from '../assests/chitra/chitra-master-2.jpeg';


const Noname = () => {
  return (
    <div className='items-center justify-center '>
      
      <div className=' flex justify-center   container relative  space-x-2 space-y-2 '>
    <img className='w-1/3 mx-0.2 mt-2 ' src={c1} alt="" />
    <img className='w-1/3 mx-0.2' src={c2} alt="" />
    <img className='w-1/3 mx-0.2' src={c3} alt="" />

      </div>
      <div className='flex justify-center   container relative  space-x-2 space-y-2'>
    <img className='w-1/3 mx-0.2 mt-2' src={c7} alt="" />
    <img className='w-1/3 mx-0.2' src={c8} alt="" />
    <img className='w-1/3 mx-0.2' src={c9} alt="" />

      </div>
      <div className='flex justify-center   container relative  space-x-2 space-y-2 '>
    <img className='w-1/3 mx-0.2 mt-2 ' src={c4} alt="" />
    <img className='w-1/3 mx-0.2' src={c5} alt="" />
    <img className='w-1/3 mx-0.2' src={c6} alt="" />

      </div>
      <div className='flex justify-center   container relative  space-x-2  space-y-2 '>
    <img className='w-1/3 mx-0.2 mt-2' src={c10} alt="" />
    <img className='w-1/3 mx-0.2' src={c11} alt="" />

      </div>
      <footer className=" mt-2 text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
      <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
    </footer>
      

    </div>
  )
}

export default Noname