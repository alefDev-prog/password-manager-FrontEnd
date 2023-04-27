"use client";

import { useContext, createContext, useState } from "react";
import { ContextType } from "@/types";

export const authContext = createContext<any>({});

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [usernameCont, setUsernameCont] = useState("userID");

    

    return (
    <authContext.Provider value={{usernameCont, setUsernameCont}}>
        {children}
    </authContext.Provider>
    )
} 

export default AuthProvider;