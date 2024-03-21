import React from 'react';
import { Link } from 'react-router-dom';

const Gireeshpage = () => {

  const images = [
    { id: 1, src: "C:\Users\nikhil\Downloads\gireesh-kids-room-1.jpeg", alt: 'Image 1' },
    { id: 2, src: "C:\Users\nikhil\Downloads\gireesh-kids-room-2.jpeg", alt: 'Image 2' },
    { id: 3, src: "C:\Users\nikhil\Downloads\gireesh-kitchen-1.jpeg", alt: 'Image 3' },
    { id: 4, src: "C:\Users\nikhil\Downloads\gireesh-kitchen-2.jpeg", alt: 'Image 4' }
   
    // Add more images as needed
  ];
  



  return (
    <div>

    <div>gireeshpage</div>
    <div>
      <h1>Home Page</h1>
      
      {images.map(image => (
        <Link key={image.id} to={image.link}>
          <img src={image.src} alt={image.alt} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Gireeshpage