"use client";

import '../style/page.scss';
import { accountObj } from '@/app/types/interface';
import { useState } from 'react';


const PassContainer = ({obj}: {obj: accountObj}) => {



    return (
        <div className="pass-container">
            <h2>{obj.AccountName}</h2>
            <div className='pass-protecter'>
                <h2>{obj.AccountPassword}</h2>
            </div>       
            
        </div>
    )
}

export default PassContainer;