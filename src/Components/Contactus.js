import React from 'react'

const Contactus = () => {
  return (
    <div>

<div className='flex justify-center items-center min-h-screen'>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 h-full" action="https://api.web3forms.com/submit" method="POST">
        <input className="mb-4 w-full rounded-lg border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="hidden" name="access_key" value="cbbdf8d1-fc3b-45b3-afe0-85063cfc0af7" />
        <input className="mb-4 w-full rounded-lg border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Name" />
        <input className="mb-4 w-full rounded-lg border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" placeholder="Email" />
        <input className="mb-4 w-full rounded-lg border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="number" name="phone" placeholder="Phone" />
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </form>
    </div>
      <div>
    <footer className=" mt-2 text-center underline font-poppins text-xs leading-4 tracking-widest uppercase">
    <p className="text-gray-50 ">COPYRIGHT 2024. ALL RIGHTS RESERVED.</p>
  </footer>

      </div>
    
    </div>
  )
}

export default Contactus