import React, { useContext } from "react"
import { OtpContet } from "../../contentProvider/Otp.content"
import RegisterCom from "../components/RegisterCom"
import VerifyOtp from "../components/VerifyOtp"

const Register = () => {
      // extracting wantotp variable form content provider 
      const {wantOtp} = useContext(OtpContet)
  

  return (
    <div className="mx-auto  h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="register_left h-full w-[50%] flex items-center justify-center">
      {wantOtp ? (<VerifyOtp/>) : ( <RegisterCom/>)}
      </div>
      <div className="register_right lg:h-full bg-stone-300 w-[50%] flex justify-center items-center">
        <img src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-social-media-people-young-women-png-image_6009381.png" alt="" />
      </div>
    </div>
  )
}

export default Register