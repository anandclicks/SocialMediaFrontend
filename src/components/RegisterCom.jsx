import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { OtpContet } from '../../contentProvider/Otp.content'
import axios from 'axios'
import { LoggedInUserContent } from '../../contentProvider/LoggedinUser.content'


const RegisterCom = () => {
    const {setwantOtp} = useContext(OtpContet)
    const [redirect, setredirect] = useState(false)
    const {loggedInUser} = useContext(LoggedInUserContent)
    
    // handling input and storing data in local
    const [formData, setformData] = useState({
      name : '',
      email : '',
      username : '',
      number : '',
      password : ''
    })
    const handleInput = (event)=> {
      setformData(prev=>({...prev, [event.target.name] : event.target.value}))
    }

    // api call for register 
    const registerUser = async(evt)=> {
      evt.preventDefault()
      const response = await axios.post("/v1/users/register", {formData}, {withCredentials : true})
      if(response.data.status == 200){
        loggedInUser(response.data.user)
        setredirect(true)
      }
    }

    // redirection handling 
    const navigate = useNavigate()
    useEffect(()=> {
      if(redirect){
        navigate('/login')
      }
    },[redirect])

  return (
    <form onSubmit={registerUser()} className=" w-[55%]">
    <h2 className="text-4xl mb-1 signUpTitle">Sign up</h2>
    <p className=" leading-6 mb-4">Create Your Account in Just a Few Steps!</p>
    <input onChange={(evt)=> handleInput(evt)} value={formData.name} placeholder="Enter Name" name="name" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />
    <input onChange={(evt)=> handleInput(evt)} value={formData.email} placeholder="Enter Email" name="email" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="email" />
    <input onChange={(evt)=> handleInput(evt)} value={formData.username} placeholder="Enter Username" name="username" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />
    <input onChange={(evt)=> handleInput(evt)} value={formData.number} placeholder="Enter Number" name="number" className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="number" />
    <input onChange={(evt)=> handleInput(evt)} value={formData.password} placeholder="Enter Password" name="password" required className="text-sm h-[40px] w-[100%] border-[1px] border-stone-400 outline-0 p-3 rounded-full mb-4" type="text" />

    {/* submit btn  */}
    <div className="flex justify-between items-center">
    <input className="rounded-full h-[40px] w-[130px] btnBg text-white cursor-pointer" type="submit" value={'Sign up'} />
    <p className="text-sm">Go For <Link to={'/login'} className="text-sky-900">Login</Link></p>
    </div>
  </form>
  )
}

export default RegisterCom