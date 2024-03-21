import React from 'react'

const Contactus = () => {
  return (
    <div>
        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="cbbdf8d1-fc3b-45b3-afe0-85063cfc0af7" />
            <input type="text"  name="name" placeholder='name' />
            <input type="email"  name="email" placeholder='email' />
            <input type="number"  name="phone" placeholder='xxxxxxxxxx' />
            <button>submit</button>
        </form>


    </div>
    
  )
}

export default Contactus