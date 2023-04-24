"use client";

import { useContext, createContext, useState } from "react";
import { ContextType } from "@/types";

export const authContext = createContext<any>({});

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [userId, setUserId] = useState("userID");

    

    return (
    <authContext.Provider value={{userId, setUserId}}>
        {children}
    </authContext.Provider>
    )
} 

export default AuthProvider;