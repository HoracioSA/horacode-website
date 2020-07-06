import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

export default function Login(){
    return(
        <div className="background">
        <div className="container">
        <section className="form">
           <h1>Login</h1>
            <form>
                <input type="email" placeholder="E-mail"/>
                <input placeholder="Password"/>
                <Link to="/forgot">
                    <FiLogIn size={18} color={'rgb(181, 43, 107)'}/>I forgot my password
                </Link>
                <button className="button" type="submit">Submit</button>
                <Link to="/register">
                    <FiLogIn size={18} color={'rgb(181, 43, 107)'}/>I do not have an acount yet
                </Link>

            </form>
        </section>
    </div>
    </div>
    )
}