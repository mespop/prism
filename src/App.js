import Contactus from './Components/Contactus';
import Featured from './Components/Featured';
import Ourstory from './Components/Ourstory';
import Blog from './Components/Blog';
import Portfolio from './Components/Portfolio';
import Gireeshpage from './Components/Gireeshpage';
import Noname from './Components/Noname';
import Picpage from './Components/Picpage';
import Alekyapage from './Components/Alekyapage';
import Biswapage from './Components/Biswapage';
import Chandanagarpage from './Components/Chandanagarpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import prism from './assests/logo.jpg';



function App() {
  return (
    <div className='bg-black'>

    
    <BrowserRouter>
    <div>
    <div >
      <img className=' border-t border-gray-900  mx-auto  ' src={prism} alt="prism" />
    </div>
    <div className='space-x-4 mr-7 flex flex-row items-center justify-center my-9'>
    <FaFacebookSquare className="text-white hover:text-white hover:underline hover:scale-125 transition-all duration-400 ease-in-out" size={30} style={{ marginRight: '10px' }} />
    <FaInstagram className="text-white hover:text-white hover:underline hover:scale-125 transition-all duration-400 ease-in-out" size={30} />
    </div>
    <NavBar/>
    
    
    </div>

    <Routes>
      
      <Route path='/' element={<Portfolio/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/featured' element={<Featured/>} />
      <Route path='/contactus' element={<Contactus/>} />
      <Route path='/ourstory' element={<Ourstory/>} />
      <Route path="/gireeshpage" element={<Gireeshpage />} />
      <Route path="/chandapage" element={<Chandanagarpage />} />
      <Route path="/nonamepage" element={<Noname />} />
      <Route path="/biswapage" element={<Biswapage />} />
      <Route path="/alekyapage" element={<Alekyapage />} />
      <Route path="/picpage" element={<Picpage />} />
    </Routes>
    
    </BrowserRouter>


    

    </div>
    
    
    
    )

  }  

export default App;
