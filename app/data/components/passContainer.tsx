"use client";

import '../style/page.scss';
import { accountObj } from '@/app/types/interface';
import { useState } from 'react';
import Modal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrash, faX } from '@fortawesome/free-solid-svg-icons';


const PassContainer = ({obj}: {obj: accountObj}) => {

    const [password, setPassword] = useState('');
    const [openPassword, setOpenPassword] = useState(false);
    

    async function getPass() {

        setOpenPassword(true);

        const userId = sessionStorage.getItem('userId');
        const accountId = obj._id;

        const resp = await fetch(`https://password-manager-backend-4mqx.onrender.com/getpass`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                userId, accountId
            }),
        });
        setPassword(await resp.json());
    }


    async function deleteAccount() {
        
        
        handleClose();
        const userId = sessionStorage.getItem('userId');
        const accountId = obj._id;
        

        
        try {
            const resp = await fetch(`api/delete`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    userId, accountId
                }),
                mode: 'no-cors'
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
        console.log(password);
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