import React from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

export default function Login(){
    return(
        <div className="container">
        <section className="form">
           <h1>Login</h1>
            <form>
                <h3>Email</h3>
                <input type="email" placeholder="E-mail"/>
                <h3>Password</h3>
                <input placeholder="Password"/>
                <button className="button" type="submit">Submit</button>
                <a href="/register">
                    <FiLogIn size={18} color={'#F775C1'}/>I do not have an acount yet</a>

            </form>
        </section>
    </div>
    )
}