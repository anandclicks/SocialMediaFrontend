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
{wantOtp ? (<VerifyOtp/>) : ( <LoginCom/>)}
</div>
{/* <div className="login_right lg:h-full bg-stone-300 w-[50%] flex justify-center items-center btnBg   ">
  <img src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-feed-illustration-download-in-svg-png-gif-file-formats--like-logo-scrolling-pack-people-illustrations-6061611.png?f=webp" alt="" />
</div> */}
</div>
  )
}

export default Login