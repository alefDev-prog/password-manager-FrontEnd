"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import './page.scss';
import Cookies from "js-cookie";
import Loading from "../global-components/loading";
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";




const Login = () => {


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

    async function submitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        

       try {
            setLoading(true);
            const resp = await fetch(`/api/login`,{
                method:"POST",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username, password
                }),
                
            });
            
            //test
            if(!resp.ok) {
                setPasswordMessage("Username or password invalid");
                setLoading(false);
            }
            if(resp.ok) {
                const {accesstoken, id} = (await resp.json());
                
                localStorage.setItem('jwt', accesstoken);
                localStorage.setItem('userId', id);
                //expires in 15 mins
                Cookies.set('logged_in', 'true', {expires: 0.01041666666})
                window.location.reload();

                
                
            }
        } catch(e) {
            console.log(e);
           
        }
    }

    if(loading) return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, inital-scale=1, maximum-scale=1" />
            </Head>
            <Loading />
        </>
   
    )


    return (
        <main className="auth-wrapper">
            <form onSubmit={submitFunc} className="auth-form">
                <Link href="/"> <FontAwesomeIcon icon={faHouse} className="house-icon"/> </Link>
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