"use client";

import { FormEvent, useContext, useState } from "react";
import Link from "next/link";
import './page.scss';
import { authContext } from "../context/context";



const Login = () => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


    const {userId, setUserId} = useContext(authContext);


    function setUser(e: any): void {
        setUsername(e.target.value);
    }
    function setPass(e: any):void {
        setPassword(e.target.value);
    }

    async function submitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        

       try {
            const resp = await fetch('http://localhost:5000/login',{
                method:"POST",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username, password
                }),
            });
            const id = (await resp.json());

            if(resp.status == 202) {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('userId', id);
                setUserId(username);
                window.location.reload();

            }
        } catch(e) {
            console.log(e);
        }

    

    }


    return (
        <main className="auth-wrapper">
            <form onSubmit={submitFunc} className="auth-form">
                <h1 className="auth-header">Login</h1>
                <input type="text" name="username" onChange={setUser} placeholder="email"/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <button type="submit">Submit</button>
                <p id="link"><Link href="/register">Register</Link></p>
            </form>
            
        </main>
    )
}

export default Login;



