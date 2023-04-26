"use client";

import React, { FormEvent, useState, useEffect } from 'react';
import { infoUser } from '@/app/types/interface';
import Modal from './modal';
import PassContainer from './passContainer';

import '../style/page.scss';


//font-awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false; 




const Data = () => {

    const [showEdit, setShowEdit] = useState(false);

    //info about the user
    const [info, setInfo] = useState<infoUser>({});

    //add new account
    const [newAccount, setNewAccount] = useState('');
    const [newPass, setNewPass] = useState('');
    
    const [loading, setLoading] = useState(true);
    

    useEffect(()=> {

        const id = sessionStorage.getItem('userId');
        typeof id == "string" && getInfo(id);
    },[])
    

    async function getInfo(id: string) {
        try {
            setLoading(true);
            const resp = await fetch(`${process.env.BACKEND_URL}/data?id=${id}`, {
                method: "GET",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                }
                
            });

            if(resp.status == 200) {
                setLoading(false);
                const info = await resp.json();
                const structuredInfo: infoUser = {
                    username: info.username,
                    account: info.account
                };

                setInfo(structuredInfo);
            }
        } catch(e) {
            setLoading(false);
            console.log(e);
        }
    }


    function handleShow(e:any):void {
        setShowEdit(!showEdit);
    }

   function handleNewUsername(e:any):void {
        setNewAccount(e.target.value);
   }

   function handleNewPass(e: any):void {
        setNewPass(e.target.value);
    }
    

    async function addPassword(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(newAccount === '' || newPass === '') return;

        const userId = sessionStorage.getItem('userId');
        
        try {
            const resp = await fetch(`${process.env.BACKEND_URL}/add`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    newAccount, newPass, userId
                }),
            });
            
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
        
    }


    if(loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
   
    return(
        <>
            <section className='data-wrapper'>
                <Modal open={showEdit}>
                    <div className="module-container">
                        <form onSubmit={addPassword}>
                            <input type='text' placeholder='add site' onChange={handleNewUsername}></input>
                            <input type='text' placeholder='add password' onChange={handleNewPass}></input>
                            
                            <button type='submit' id="add-account">Add account</button>
                        </form>
                        <FontAwesomeIcon onClick={handleShow} icon={faX} className='close-btn'></FontAwesomeIcon>
                        
                    </div>
                </Modal>
                <div id="all-pass-wrapper">
                    <div className="pass-container" onClick={handleShow}>
                    <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    {/* Dynamically render all passwords */}
                    {info.account?.map((obj, index):React.ReactNode => {
                        return (
                            <PassContainer obj={obj} key={index} />
                        )
                    })}
                </div>
            </section>
            
        </>
    )
}

export default Data;