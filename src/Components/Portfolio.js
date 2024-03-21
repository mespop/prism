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
        navigate(page);
      };
    
  return (

  
<div>

    
    
    <p>Hi. We are Studio Ipsa, formerly U and I Designs. Ipsa means ambition, and we are always driven with an ardent desire to keep learning and creating. At Ipsa, whatever we do is laced with grit and passion and we are always on a relentless pursuit of happiness - ours and everyone who associates with us. Welcome to Studio Ipsa!</p>
    
    <div >
    
    <img src={gireesh} alt="gireesh client" onClick={()=>handleImageClick("/gireeshpage")} />
    <img src={alekhya} alt="alekya" onClick={()=>handleImageClick("/alekyapage")} />
    <img src={bishwath} alt="bishwa" onClick={()=>handleImageClick("/biswapage")} />
    <img src={chandanagar} alt="chanda" onClick={()=>handleImageClick("/chandapage")} />
    <img src={pic} alt="pic" onClick={()=>handleImageClick("/picpage")} />
    <img src={noname} alt="noname" onClick={()=>handleImageClick("/nonamepage")} />

    </div>
</div>
    )
};
  

export default Portfolio;