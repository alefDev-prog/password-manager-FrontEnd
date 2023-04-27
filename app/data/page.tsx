"use client";

import Data from "./components/data"
import Nav from "./components/nav"
import { useRouter } from "next/router"



export default function DataWrapper() {

    const router = useRouter();
   
    return (
        <>
            <Nav />
        
            <Data />
            
        </>
        
    )
}