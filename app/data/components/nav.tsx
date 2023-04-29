"use client";

import '../style/layout.scss';

const Nav = () => {


    function clearCookie():void {
        document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    function logOut () {
        
        localStorage.clear();
        clearCookie();
        window.location.reload();
          
    }

    return (
        <nav className="nav-bar">
            <h1 id="data-title">Welcome to the accounts page</h1>
           <div id="logout" onClick={logOut}>Log out</div>
        </nav>
    )
}

export default Nav;