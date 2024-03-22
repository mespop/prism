import React from "react";
import { Link } from 'react-router-dom';


const NavBar = ()=>{
    return(

        <nav >
      <ul className="flex flex-row items-center justify-center  space-x-4 py-2 my-9 ">
        <li className="text-white hover:text-white hover:underline hover:scale-105 transition-all duration-200 ease-in-out">
           <Link to='/'>Portfolio</Link>
        </li>
        <li className="text-white hover:text-white hover:underline hover:scale-105 transition-all duration-200 ease-in-out">
           <Link to='/ourstory'>our Story</Link>
        </li>
        <li className="text-white hover:text-white hover:underline hover:scale-105 transition-all duration-200 ease-in-out">
           <Link to='/blog'>Blog</Link>
        </li>
        <li className="text-white hover:text-white hover:underline hover:scale-105 transition-all duration-200 ease-in-out">
           <Link to='/featured'>Featured</Link>
        </li>
        <li className="text-white hover:text-white hover:underline hover:scale-105 transition-all duration-200 ease-in-out" >
           <Link to='/contactus'>contact</Link>
        </li>
        
      </ul>
    </nav>
    )
}

export default NavBar;