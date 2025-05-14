import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import VerifyOtp from '../components/VerifyOtp'
import { OtpContet } from '../../contentProvider/Otp.content'
import LoginCom from '../components/LoginCom'


const Login = () => {
    // extracting wantotp variable form content provider 
    const {wantOtp} = useContext(OtpContet)



  return (
    <div className="mx-auto  h-[100vh] w-[100vw] flex items-center justify-center">
<div className="login_left h-full w-[50%] flex items-center justify-center">
<LoginCom/>
</div>
</div>
  )
}

export default Login