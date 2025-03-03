import {createContext, useState } from "react";

export const OtpContet = createContext({})
export const OtpContetProvider = ({children})=> {
    const [wantOtp, setwantOtp] = useState(false)
    return (
        <OtpContet.Provider value={{wantOtp,setwantOtp}}>
            {children}
        </OtpContet.Provider>
    )
}