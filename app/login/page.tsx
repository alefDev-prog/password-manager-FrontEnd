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
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            const id = (await resp.json());

            if(resp.status == 202) {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('userId', id);
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
            </form>
        </main>
    )
}

export default Login;



