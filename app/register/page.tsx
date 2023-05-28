'use client';
import React, { FormEvent, use, useReducer} from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Loading from '../global-components/loading';
import { reducer, initialValues, ActionKinds } from './components/reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const Register = () => {

    const [values, dispatch] = useReducer(reducer, initialValues)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [loading, setLoading] = useState(false);
    


    useEffect(() => {
        console.log(values);
        if(password == '') dispatch({type: ActionKinds.SET_PASSWORD_MESSAGE , payload: 'Required'});
        else dispatch({type: ActionKinds.SET_PASSWORD_MESSAGE , payload: ''});
        if(username == '') dispatch({type: ActionKinds.SET_USERNAME_MESSAGE , payload: 'Required'});
        else dispatch({type: ActionKinds.SET_USERNAME_MESSAGE , payload: ''});
        if(checkPassword == '') dispatch({type: ActionKinds.SET_CHECK_PASSWORD_MESSAGE , payload: 'Required'});
        else dispatch({type: ActionKinds.SET_CHECK_PASSWORD_MESSAGE , payload: ''});
    }, [password, username, checkPassword])


    function setUser(e: any): void {
        setUsername(e.target.value);
    }
    function setPass(e: any):void {
        setPassword(e.target.value);
    }
    function setCheckPass(e: any):void {
        setCheckPassword(e.target.value);
    }

    async function sumbitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(username === null || username == '') return;
        if(checkPassword !== password) {
            dispatch({type: ActionKinds.SET_CHECK_PASSWORD_MESSAGE , payload: 'Passwords are not matching'})
            return;
        }
        
        
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

            if(!resp.ok){
                setLoading(false);

                if(resp.status == 409) {
                    dispatch({type: ActionKinds.SET_USERNAME_MESSAGE , payload: 'Username already taken'});
                   
                }
                else {
                    dispatch({type: ActionKinds.SET_USERNAME_MESSAGE , payload: 'Server error'});
                   
                }
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
        

    };

    if (loading) return (
        <Loading />
    )

    return (
        <main className="auth-wrapper">
            <form onSubmit={sumbitFunc} className="auth-form">
                <Link href="/"> <FontAwesomeIcon icon={faHouse} className="house-icon"/> </Link>
                <h1 className="auth-header">Register</h1>
                <h2 className="auth-description">Username</h2>
                <input type="text" name="username" onChange={setUser} placeholder='username' maxLength={15}/>
                {values && <p className='auth-message'>{values.usernameMessage}</p>}
                <h2 className="auth-description">Password</h2>
                <input type="password" name="password" placeholder="password" onChange={setPass} maxLength={20}/>
                {values && <p className='auth-message'>{values.passwordMessage}</p>}
                <h2 className="auth-description">Check password</h2>
                <input type="password" name="password" placeholder="check password" onChange={setCheckPass} maxLength={20}/>
                {values && <p className='auth-message'>{values.checkPasswordMessage}</p>}
                <button type="submit">Submit</button>
                <p id="link"><Link href="/login">Login</Link></p>
            </form>
            
            
        </main>
    )
}

export default Register;