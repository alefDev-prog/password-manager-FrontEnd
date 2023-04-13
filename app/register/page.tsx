'use client';
import React from 'react';

import { useState } from 'react';
const Register = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function setUser(e: any): void {
        setUsername(e.target.value);
        console.log(e.target.value);

    }
    function setPass(e: any):void {
        setUsername(e.target.value);
    }


    return (
        <main id="register-main">
            <h1>Register</h1>
            <form action="" method='post'>
                <input type="text" name="username" onChange={setUser}/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <button type="submit" value="submit" />
            </form>
        </main>
    )
}

export default Register;