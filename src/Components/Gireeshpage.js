import React from 'react';
import { Link } from 'react-router-dom';
import girish1 from '../assests/gireesh/gireesh-kids-room-1.jpeg';
import girish2 from '../assests/gireesh/gireesh-kids-room-2.jpeg';
import girish3 from '../assests/gireesh/gireesh-kitchen-1.jpeg';
import girish4 from '../assests/gireesh/gireesh-kitchen-2.jpeg'


const Gireeshpage = () => {

  const images = [
    { id: 1, src: girish1, alt: 'Image 1' },
    { id: 2, src: girish2, alt: 'Image 2' },
    { id: 3, src: girish3, alt: 'Image 3' },
    { id: 4, src: girish4, alt: 'Image 4' },

    // { id: 2, src: "C:\Users\nikhil\Downloads\gireesh-kids-room-2.jpeg", alt: 'Image 2' },
    // { id: 3, src: "C:\Users\nikhil\Downloads\gireesh-kitchen-1.jpeg", alt: 'Image 3' },
    // { id: 4, src: "C:\Users\nikhil\Downloads\gireesh-kitchen-2.jpeg", alt: 'Image 4' }
   
    // Add more images as needed
  ];
  



  return (
    <div>

    <div>gireeshpage</div>
    <div className='border rounded-full flex my-9 mx-7'>
      <h1>Home Page</h1>
      
      {images.map(image => (
        <Link key={image.id} to={image.link}>
          <img src={image.src} alt={image.alt} />
        </Link>
      ))}
    </div>
    <footer className="text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
      <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
    </footer>
    </div>
  )
}

export default Gireeshpage