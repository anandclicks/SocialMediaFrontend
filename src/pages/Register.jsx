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
       <RegisterCom/>
      </div>
     
    </div>
  )
}

export default Register