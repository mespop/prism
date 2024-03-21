
import './App.css';


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







function App() {
  return (
    <div>

    
    <BrowserRouter>
    <div>
    <div className="App">
      <img src="http://studioipsa.com/wp-content/uploads/2023/05/Frame-95.png" alt="prism" />
    </div>
    <div>
    <FaFacebookSquare size={30} style={{ marginRight: '10px' }} />
    <FaInstagram size={30} />
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
