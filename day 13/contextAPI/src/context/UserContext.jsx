import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState({
        name: "",
        age:"",
        email:""
    })
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
}