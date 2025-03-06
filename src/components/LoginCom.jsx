import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginCom = () => {
  // handling input and storing data in local
  const [formData, setformData] = useState({
    email : '',
    password : ''
  })
  const handleInput = (event)=> {
    setformData(prev=> ({...prev,[event.target.name] : event.target.value}))
  }



  return (
        <form className=" w-[55%] ">
    <h2 className="text-4xl mb-1 loginTitle">Login</h2>
    <p className=" leading-6 mb-4">Log In to Access Your Account and Enjoy Exclusive Features!</p>
    <input onChange={(evt)=> handleInput(evt)} value={formData.email} placeholder="Enter Email" required name="email" className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="email" />
    <input  onChange={(evt)=> handleInput(evt)} value={formData.password} placeholder="Enter Password" required name="password" className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />

    {/* submit btn  */}
    <div className="flex justify-between items-center ">
    <input name='submit' className="rounded-full h-[40px] w-[130px] btnBg text-white cursor-pointer" type="submit" value={'Login'} />
    <p className="text-sm">Go For <Link to={'/register'} className="text-sky-900">Sign-up</Link></p>
    </div>
  </form>
  )
}

export default LoginCom