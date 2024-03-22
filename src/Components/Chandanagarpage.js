import React from 'react'
import c1 from '../assests/chandanagar/chandanagar-crockery.jpeg'
import c2 from '../assests/chandanagar/chandanagar-guestroom.jpeg'
import c3 from '../assests/chandanagar/chandanagar-kidsroom-1.jpeg'
import c4 from '../assests/chandanagar/chandanagar-kidsroom-2.jpeg'
import c5 from '../assests/chandanagar/chandanagar-kidsroom-3.jpeg'
import c6 from '../assests/chandanagar/chandanagar-kitchen-1.jpeg'
import c7 from '../assests/chandanagar/chandanagar-kitchen-2.jpeg'
import c8 from '../assests/chandanagar/chandanagar-livinfroom-1.jpeg'
import c9 from '../assests/chandanagar/chandanagar-livingroom-2.jpeg'
import c10 from '../assests/chandanagar/chandanagar-masterbedroom-1.jpeg'
import c11 from '../assests/chandanagar/chandanagar-masterbedrrom-2.jpeg'
import c12 from '../assests/chandanagar/chandanagar-pooja.jpeg'

const Chandanagarpage = () => {
  return (
    <div>

    <div>Chandanagarpage</div>
    <div className='border rounded-full flex my-9 mx-7'> 
    <img className='w-1/3 mx-0.5' src={c1} alt="chandanagr" />
    <img className='w-1/3 mx-0.5 ' src={c2} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c3} alt="chandanagr" />
    </div>
    <div className='border rounded-full flex my-9 mx-7'> 
    <img className='w-1/3 mx-0.5' src={c4} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c5} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c6} alt="chandanagr" />

    </div>
    <div className='border rounded-full flex my-9 mx-7'> 
    <img className='w-1/3 mx-0.5' src={c7} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c8} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c9} alt="chandanagr" />

    </div>
    
    <div className='border rounded-full flex my-9 mx-7'>

    <img className='w-1/3 mx-0.5' src={c10} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c11} alt="chandanagr" />
    <img className='w-1/3 mx-0.5' src={c12} alt="chandanagr" />
    </div>
    <footer className="text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
      <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
    </footer>
  
    </div>
  )
}

export default Chandanagarpage