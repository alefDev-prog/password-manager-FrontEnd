"use client";

import '../style/layout.scss';

const Nav = () => {


    function clearCookie():void {
        document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    async function logOut () {
        try {
            const token = sessionStorage.getItem('jwt');
            const resp = await fetch(`/api/logout`,{
                method:"GET",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
            });
            if(resp.status == 200) {
                localStorage.clear();
                clearCookie();
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