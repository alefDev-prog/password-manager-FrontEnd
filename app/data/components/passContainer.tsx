"use client";

import '../style/page.scss';
import { accountObj } from '@/app/types/interface';
import { useState } from 'react';
import Modal from './modal';


const PassContainer = ({obj}: {obj: accountObj}) => {

    const [password, setPassword] = useState('');
    const [openPassword, setOpenPassword] = useState(false);

    async function getPass() {

        setOpenPassword(true);

        const userId = sessionStorage.getItem('userId');
        const accountId = obj._id;

        const resp = await fetch(`http://localhost:5000/getpass`, {
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


    function handleClose() {
        setOpenPassword(false);
        setPassword('');
    }


    return (
        <>
             <Modal open={openPassword}>
                    <div id="add-pass-container">
                        {password}
                        <button onClick={() =>setOpenPassword(false)}>Close</button>
                    </div>
                </Modal>
            <div className="pass-container" onClick={getPass}>
                <p className="account-name">{obj.AccountName}</p>
            </div>
        </>
        
    )
}

export default PassContainer;