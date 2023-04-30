'use client';
import React, { FormEvent, use} from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Loading from '../global-components/loading';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
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

    async function sumbitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(username === null || username == '') return;
        
        
        try {
            setLoading(true);    
            const resp = await fetch(`/api/register`,{
                method:"POST",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username, password
                }),
            });
            
            if(resp.status == 409) {
                setUsernameMessage('Username already taken');
            }
            
            
            if(resp.ok) {
                const {accesstoken, id} = (await resp.json());
                
                localStorage.setItem('jwt', accesstoken);
                localStorage.setItem('userId', id);
                //expires in 15 mins
                Cookies.set('logged_in', 'true', {expires: 0.01041666666})
                window.location.reload();
            }


            setLoading(false);
        } catch(e) {
            setLoading(false);
            console.log(e);
        }
        

    };

    if (loading) return (
        <Loading />
    )

    return (
        <main className="auth-wrapper">
            <form onSubmit={sumbitFunc} className="auth-form">
                <h1 className="auth-header">Register</h1>
                <h2 className="auth-description">Username</h2>
                <input type="text" name="username" onChange={setUser} placeholder='username'/>
                <p className='auth-message'>{usernameMessage}</p>
                <h2 className="auth-description">Password</h2>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <p className='auth-message'>{passwordMessage}</p>
                <button type="submit">Submit</button>
                <p id="link"><Link href="/login">Login</Link></p>
            </form>
            
            
        </main>
    )
}

export default Register;