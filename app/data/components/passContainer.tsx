"use client";

import '../style/page.scss';
import { accountObj } from '@/app/interfaces/interface';
import { useState } from 'react';
import Modal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import checkLog from '@/lib/checkLog';


const PassContainer = ({obj}: {obj: accountObj}) => {

    const [password, setPassword] = useState('');
    const [openPassword, setOpenPassword] = useState(false);
    

    async function getPass() {

        if(!checkLog()){
            window.location.reload();
            return;
        } 

        setOpenPassword(true);

        const userId = localStorage.getItem('userId');
        const accountId = obj._id;
        const token = localStorage.getItem('jwt');

        const resp = await fetch(`/api/getpass`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                userId, accountId
            }),
        });
        setPassword(await resp.json());
    }


    async function deleteAccount() {
        
        if(!checkLog()){
            window.location.reload();
            return;
        } 
        
        handleClose();
        const userId = localStorage.getItem('userId');
        const accountId = obj._id;
        

        
        try {
            const token = localStorage.getItem('jwt');
            const resp = await fetch(`api/delete`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    userId, accountId
                })
            });
    
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
       

        

    }

    //closing the modal
    function handleClose() {
        setOpenPassword(false);
        setPassword('');
    }

    


    return (
        <>
             <Modal open={openPassword}>
                    <div className="module-container">
                        <h2 id="pass-title">Password:</h2>
                        {password === '' ?
                        <FontAwesomeIcon icon={faSpinner} id="pass-spinner"></FontAwesomeIcon> :
                        <p id="password">{password}</p>}
                        <FontAwesomeIcon onClick={handleClose} icon={faX} className='close-btn'></FontAwesomeIcon>
                        <FontAwesomeIcon onClick={deleteAccount} icon={faTrash} id="delete-btn"></FontAwesomeIcon>
                        
                    </div>
                </Modal>
            <div className="pass-container" onClick={getPass}>
                <p className="account-name">{obj.AccountName}</p>
            </div>
        </>
        
    )
}

export default PassContainer;