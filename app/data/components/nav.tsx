"use client";

import '../style/layout.scss';

const Nav = () => {

    async function logOut () {
        try {
            const token = sessionStorage.getItem('jwt');
            const resp = await fetch(`https://password-manager-backend-4mqx.onrender.com/logout`,{
                method:"GET",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            });
            if(resp.status == 200) {
                localStorage.clear();
                window.location.reload();
            }

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <nav className="nav-bar">
            <h1 id="data-title">Welcome to the accounts page</h1>
           <div id="logout" onClick={logOut}>Log out</div>
        </nav>
    )
}

export default Nav;