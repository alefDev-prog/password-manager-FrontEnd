"use client";

import { FormEvent, useState } from "react";


const Login = () => {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    function setUser(e: any): void {
        setEmail(e.target.value);
    }
    function setPass(e: any):void {
        setPassword(e.target.value);
    }

    async function submitFunc(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
       try {
            const resp = await fetch('http://localhost:5000/login',{
                method:"POST",
                credentials:"include",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                }),
            });
        } catch(e) {
            console.log(e);
        }

    

    }

        




    async function testAuth() {
       const resp = await fetch("http://localhost:5000/data", {
            method:"GET",
            credentials: "include"
        })


        console.log(resp);
    }

    async function testLogOut() {
        const resp = await fetch("http://localhost:5000/logout", {
            method:"POST",
            credentials: "include"
        })

        console.log(resp);
    }


    return (
        <main className="auth-wrapper">
            <form onSubmit={submitFunc} className="auth-form">
                <h1 className="auth-header">Login</h1>
                <input type="text" name="username" onChange={setUser} placeholder="email"/>
                <input type="password" name="password" placeholder="password" onChange={setPass}/>
                <button type="submit">Submit</button>
            </form>
            <button onClick={testAuth}>TEST</button>
            <button onClick={testLogOut}>LOGOUT</button>
        </main>
    )
}

export default Login;




/*

app.post('/logout', (req, res) => {
    req.session.destroy(err => {if (err) console.log(err)});
    res.clearCookie(`${SESSION_NAME}`);
    res.json("cleared cookie");
})

*/