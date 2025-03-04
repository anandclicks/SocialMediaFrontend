import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { OtpContet } from '../../contentProvider/Otp.content'

const RegisterCom = () => {
    const {setwantOtp} = useContext(OtpContet)
  return (
    <form className=" w-[55%]">
    <h2 className="text-4xl mb-1 signUpTitle">Sign up</h2>
    <p className=" leading-6 mb-4">Create Your Account in Just a Few Steps!</p>
    <input placeholder="Enter Name" name="name" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />
    <input placeholder="Enter Email" name="email" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="email" />
    <input placeholder="Enter Username" name="username" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />
    <input placeholder="Enter Number" name="number" className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="number" />
    <input placeholder="Enter Password" name="password" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />

    {/* submit btn  */}
    <div className="flex justify-between items-center">
    <input className="rounded-full h-[40px] w-[130px] btnBg text-white cursor-pointer" type="submit" value={'Sign up'} />
    <p className="text-sm">Go For <Link to={'/login'} className="text-sky-900">Login</Link></p>
    </div>
  </form>
  )
}

export default RegisterCom