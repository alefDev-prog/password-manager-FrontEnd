"use client";

import { useContext, createContext, useState } from "react";

export const authContext = createContext("hello");

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [id, setId] = useState("hello");

    

    return (
    <authContext.Provider value="test">
        {children}
    </authContext.Provider>
    )
} 

export default AuthProvider;