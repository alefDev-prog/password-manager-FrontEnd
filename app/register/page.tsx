'use client';
import React, { FormEvent } from 'react';
import axios from 'axios';

import { useState } from 'react';
const Register = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function setUser(e: any): void {
        setUsername(e.target.value);
    }
    function setPass(e: any):void {
        setPass(e.target.value);
    }

    async function sumbitFunc(e:any) {
        e.preventDefault();

        const resp = await fetch('http://localhost:5000/register',{
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        });

    };


    return (
        <main id="register-main">
            <h1>Register</h1>
            <form onSubmit={sumbitFunc}>
                <input type="text" name="username" onChange={setUser}/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <div><button type="submit">Submit</button></div>
                
            </form>
            <div><h1>hej</h1></div>
            
        </main>
    )
}

export default Register;