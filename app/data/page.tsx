import Data from "./components/data"
import Nav from "./components/nav"
import { Suspense, lazy } from "react"
import dynamic from "next/dynamic"



export default function DataWrapper() {
    return (
        <>
            <Nav />
        
            <Data />
            
        </>
        
    )
}