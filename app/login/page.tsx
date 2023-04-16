"use client";

import { FormEvent, useState } from "react";


const Login = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    function setUser(e: any): void {
        setEmail(e.target.value);
    }
    function setPass(e: any):void {
        setPassword(e.target.value);
    }

    async function submitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
            const resp = await fetch('http://localhost:5000/login',{
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                }),
            });
        } catch(e) {
            console.log(e);
        }
    }


    return (
        <main id="login-main">
            <h1>Login</h1>
            <form onSubmit={submitFunc}>
                <input type="text" name="username" onChange={setUser}/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <div><button type="submit">Submit</button></div>
            </form>
            
            
        </main>
    )
}

export default Login;


