"use client";

import { useContext, createContext, useState } from "react";

const authContext = createContext("hello");

export const useAuthContext = () => useContext(authContext)

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [id, setId] = useState("hello");

    

    return (
    <authContext.Provider value={{id, setId}}>
        {children}
    </authContext.Provider>
    )
} 

export default AuthProvider;