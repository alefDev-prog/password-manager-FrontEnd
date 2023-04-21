"use client";

import '../style/layout.scss';

const Nav = () => {

    async function logOut () {
        try {
            const resp = await fetch('http://localhost:5000/logout',{
                method:"GET",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
            });
            if(resp.status == 200) {
                sessionStorage.clear();
                window.location.reload();
            }

        } catch(e) {
            console.log(e);
        }
    }

    return (
        <nav className="nav-bar">
           <div id="logout" onClick={logOut}>Log out</div>
        </nav>
    )
}

export default Nav;