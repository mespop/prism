import gireesh from '../assests/gireesh.png';
import alekhya from '../assests/alekya.jpeg';
import bishwath from '../assests/bishwajith.jpeg';
import chandanagar from '../assests/chandananagar.jpeg';
import pic from '../assests/pic-0.jpeg';
import noname from '../assests/000.jpeg';
import React from 'react';


import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();
    const handleImageClick = (page) => {
        // Redirect to another page
        console.log("Clicked on image");
        navigate(page);
       
      };
    
  return (

  
<div>

    
    
    <p className="text-center  mx-auto max-w-3xl text-white">Hi. We are PRISM, formerly U and I Designs. Ipsa means ambition, and we are always driven with an ardent desire to keep learning and creating. We create spaces that are personal and allows you to express yourself.

You will find customised assistance that will help create spaces that truly represent your personality</p>
    <p  className="text-center mt-5 text-white h-30" > Welcome to PRISM!</p>
    
    
    <div className='flex flex-row mx-1 my-4 space-x-4    '>
    <div className="container relative w-1/3">
      <img className="  image block w-full h-full" src={gireesh} alt="gireesh client"   onClick={()=>handleImageClick("/gireeshpage")}  />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className=" text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @GIREESH
        </div>
      <img className=" opacity-5 image block w-full h-full" src={gireesh} alt="gireesh client"   onClick={()=>handleImageClick("/gireeshpage")}  />
      </div>
    </div>
    <div className="container relative w-1/3">
      <img src={alekhya} alt="alekya" onClick={()=>handleImageClick("/alekyapage")} className="mx-1 image block w-full h-full " />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className="text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @ALEKHYA
        </div>
      <img src={alekhya} alt="alekya" onClick={()=>handleImageClick("/alekyapage")} className="opacity-5 mx-1 image block w-full h-full " />
      </div>
    </div>
    <div className="container relative w-1/3">
      <img src={bishwath} alt="bishwa" onClick={()=>handleImageClick("/biswapage")} className="mx-1  image block w-full h-full" />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className="text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @BISWAJITH
        </div>
      <img src={bishwath} alt="bishwa" onClick={()=>handleImageClick("/biswapage")} className="mx-1 opacity-5  image block w-full h-full" />
      </div>
    </div>

    </div>


    <div className='flex flex-row mx-1 my-4 space-x-4'>
    <div className="container relative w-1/3">
      <img src={chandanagar} alt="chanda" onClick={()=>handleImageClick("/chandapage")} className=" image block w-full h-full" />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className="text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @CHANDANAGAR
        </div>
      <img src={chandanagar} alt="chanda" onClick={()=>handleImageClick("/chandapage")} className=" opacity-5 image block w-full h-full" />
      </div>
    </div>
    <div className="container relative w-1/3">
      <img src={pic} alt="pic" onClick={()=>handleImageClick("/picpage")} className="image block w-full h-full" />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className="text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @CHITRA
        </div>
      <img src={pic} alt="pic" onClick={()=>handleImageClick("/picpage")} className="opacity-5 image block w-full h-full" />
      </div>
    </div>
    <div className="container relative w-1/3">
      <img src={noname} alt="noname" onClick={()=>handleImageClick("/nonamepage")} className="image block w-full h-full" />
      <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 transition-opacity duration-500 bg-white hover:opacity-100">
        <div className="text absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold">
          @kANNU
        </div>
      <img src={noname} alt="noname" onClick={()=>handleImageClick("/nonamepage")} className=" opacity-5 image block w-full h-full" />
      </div>
    </div>

    </div>

    <footer className="text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
      <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
    </footer>


</div>
    )
};
  

export default Portfolio;