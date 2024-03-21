import React from "react";
import { Link } from 'react-router-dom';


const NavBar = ()=>{
    return(

        <nav>
      <ul>
        <li >
           <Link to='/'>Portfolio</Link>
        </li>
        <li >
           <Link to='/ourstory'>our Story</Link>
        </li>
        <li >
           <Link to='/blog'>Blog</Link>
        </li>
        <li >
           <Link to='/featured'>Featured</Link>
        </li>
        <li >
           <Link to='/contactus'>contact</Link>
        </li>
        
      </ul>
    </nav>
    )
}

export default NavBar;