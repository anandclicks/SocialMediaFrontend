import React, { useEffect, useState } from 'react'

const VerifyOtp = () => {
    const [timer, setTimer] = useState(60)
    useEffect(()=> {
     const intervel =   setInterval(()=> {
         setTimer((prev)=> {
            if(prev<= 0){
                clearTimeout(intervel)
                return 0;
            }
            else {
               return prev-1
            }
         })
        },1000)
    },[])

    const handleOtpChange = (e, nextInput) => {
        if (e.target.value.length === 1 && nextInput) {
            nextInput.focus()
        }
    }

  return (
    <div>
        <form className='w-[400px]'>
            <h2 className='text-2xl mb-3'>Enter OTP</h2>
           <div className="otpWrapper gap-3 flex ">
           <input type="text" required className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name='otp1' onInput={(e) => handleOtpChange(e, document.getElementsByName('otp2')[0])} />
            <input type="text required" className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name="otp2" onInput={(e) => handleOtpChange(e, document.getElementsByName('otp3')[0])} />
            <input type="text" required className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name='otp3' onInput={(e) => handleOtpChange(e, document.getElementsByName('otp4')[0])} />
            <input type="text" required className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name='otp4' onInput={(e) => handleOtpChange(e, document.getElementsByName('otp5')[0])} />
            <input type="text" required className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name='otp5' onInput={(e) => handleOtpChange(e, document.getElementsByName('otp6')[0])} />
            <input type="text" className='text-sm h-[40px] w-[10%] border-[1px] border-stone-400 outline-0 p-3 rounded-lg mb-4' name="otp6" />
           </div>
           <p className='text-sm mb-4'>OTP Is going to expires in  <span className='text-red-600'>{timer}</span> seconds.</p>
            <input type="submit" className='w-[100px] h-[40px] btnBg rounded-full text-white cursor-pointer' value={'Submit'} />
        </form>
    </div>
  )
}

export default VerifyOtp
