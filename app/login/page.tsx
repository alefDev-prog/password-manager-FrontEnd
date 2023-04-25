"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import Link from "next/link";
import './page.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";




const Login = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [usernameMessage, setUsernameMessage] = useState('Required');
    const [passwordMessage, setPasswordMessage] = useState('Required');


    useEffect(() => {
        if(password == '') setPasswordMessage('Required');
        else setPasswordMessage('');
        if(username == '') setUsernameMessage('Required');
        else setUsernameMessage('');
    }, [password, username])


    


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
            
            if(!resp.ok) {
                setPasswordMessage("Username or password invalid");
            }
            if(resp.ok) {
                const id = (await resp.json());
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
                <h2 className="auth-description">Username</h2>
                <input type="text" name="username" onChange={setUser} placeholder="username"/>
                <p className='auth-message'>{usernameMessage}</p>
                <h2 className="auth-description">Password</h2>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <p className='auth-message'>{passwordMessage}</p>
                <button type="submit">Submit</button>
                <p id="link"><Link href="/register">Register</Link></p>
            </form>
            
        </main>
    )
}

export default Login;



