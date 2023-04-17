'use client';
import React, { FormEvent} from 'react';


import { useState } from 'react';
const Register = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function setUser(e: any): void {
        setEmail(e.target.value);
    }
    function setPass(e: any):void {
        setPassword(e.target.value);
    }

    async function sumbitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        try {
            const resp = await fetch('http://localhost:5000/register',{
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            alert("You are registered");
        } catch(e) {
            console.log(e);
        }
        

    };


    return (
        <main className="auth-wrapper">
            <form onSubmit={sumbitFunc} className="auth-form">
                <h1 className="auth-header">Register</h1>
                <input type="text" name="username" onChange={setUser} placeholder='email'/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <button type="submit">Submit</button>
            </form>
            
            
        </main>
    )
}

export default Register;