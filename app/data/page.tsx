"use client";

import { redirect } from 'next/navigation';

const Data = () => {


    if(sessionStorage.getItem('loggedIn') !== "true") return redirect('/login')
    else return(
        <>
            <section className='data-wrapper'>
                <div className='pass-Container' id="add-pass-container">
                    <form>
                        <input type='text' placeholder='add site'></input>
                        <input type='text' placeholder='add password'></input>
                        <button type='submit'>Add account</button>
                    </form>
                </div>
            </section>
            
        </>
    )

    return (
        <h1>h</h1>
    )
    
}

export default Data;