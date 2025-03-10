import { createContext, useState } from "react";

export const LoggedInUserContent = createContext({})

export const LoggedInUserContentProvider = ({children})=> {
    const [loggedInUser, setloggedInUser] = useState([])
    
    return (
        <LoggedInUserContent.Provider value={{loggedInUser,setloggedInUser}}>
            {children}
        </LoggedInUserContent.Provider>
    )
}