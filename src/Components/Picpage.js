import React from 'react';
import k1 from '../assests/kannu/kannu-client-2.jpg';
import k2 from '../assests/kannu/kannu-client-3.jpg';
import k3 from '../assests/kannu/kannu-dining-1.jpg';
import k4 from '../assests/kannu/kannu-kids.jpg';
import k5 from '../assests/kannu/kannu-kitchen-1.jpg';
import k6 from '../assests/kannu/kannu-kitchen-2.jpg';
import k7 from '../assests/kannu/kannu-kitchen-3.jpg';
import k8 from '../assests/kannu/kannu-living.jpg';
import k9 from '../assests/kannu/kannu-master-1.jpg';
import k10 from '../assests/kannu/kannu-master-2.jpg';


const Picpage = () => {
  return (
    <div>

    <div>Picpagekannu</div>
    <img src={k1} alt="kannu" />
    <img src={k2} alt="kannu" />
    <img src={k3} alt="kannu" />
    <img src={k4} alt="kannu" />
    <img src={k5} alt="kannu" />
    <img src={k6} alt="kannu" />
    <img src={k7} alt="kannu" />
    <img src={k8} alt="kannu" />
    <img src={k9} alt="kannu" />
    <img src={k10} alt="kannu" />


    <footer className="text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
      <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
    </footer>
    </div>

    

  )
}

export default Picpage