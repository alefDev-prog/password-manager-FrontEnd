"use client";

import { redirect } from 'next/navigation';
import { FormEvent, useState, useEffect } from 'react';
import { infoUser } from '../types/interface';

import './style/page.scss';


const Data = () => {


    const [showEdit, setShowEdit] = useState(false);

    //info about the user
    const [info, setInfo] = useState<infoUser>({});

    //add new account
    const [newAccount, setNewAccount] = useState('');
    const [newPass, setNewPass] = useState('');
    

    useEffect(()=> {
        const id = sessionStorage.getItem('userId');
        typeof id == "string" && getInfo(id);
    },[])


    async function getInfo(id: string) {
        try {
            const resp = await fetch(`http://localhost:5000/data?id=${id}`, {
                method: "GET",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                }
                
            });

            if(resp.status == 200) {
                const info = await resp.json();
                const structuredInfo: infoUser = {
                    username: info.email,
                    account: info.account
                };

                setInfo(structuredInfo);
            }
        } catch(e) {
            console.log(e);
        }
    }

   function handleNewUsername(e:any):void {
        setNewAccount(e.target.value);
   }

   function handleNewPass(e: any):void {
        setNewPass(e.target.value);
    }
    

    async function addPassword(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const userId = sessionStorage.getItem('userId');
        
        try {
            const resp = await fetch('http://localhost:5000/add', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    newAccount, newPass, userId
                }),
            });
            console.log(await resp.json());

        } catch(err) {
            console.log(err);
        }
        
    }

    
    if(sessionStorage.getItem('loggedIn') !== "true") return redirect('/login')
    else return(
        <>
            <section className='data-wrapper'>
                <div className='pass-container' id="add-pass-container">
                    <form onSubmit={addPassword}>
                        <input type='text' placeholder='add site' onChange={handleNewUsername}></input>
                        <input type='text' placeholder='add password' onChange={handleNewPass}></input>
                        <button type='submit'>Add account</button>
                    </form>
                </div>
                <button>{info.username}</button>
            </section>
            
        </>
    )
}

export default Data;