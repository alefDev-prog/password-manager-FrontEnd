"use client";

import { redirect } from 'next/navigation';
import { FormEvent, useState } from 'react';

import './style/page.scss';

const Data = () => {


    const [showEdit, setShowEdit] = useState(false);

    function addPassword(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("I am here");
    }


    if(sessionStorage.getItem('loggedIn') !== "true") return redirect('/login')
    else return(
        <>
            <section className='data-wrapper'>
                <div className='pass-container' id="add-pass-container">
                    <form onSubmit={addPassword}>
                        <input type='text' placeholder='add site'></input>
                        <input type='text' placeholder='add password'></input>
                        <button type='submit'>Add account</button>
                    </form>
                </div>
                <button onClick={}>TEST</button>
            </section>
            
        </>
    )

    return (
        <h1>h</h1>
    )
    
}

export default Data;