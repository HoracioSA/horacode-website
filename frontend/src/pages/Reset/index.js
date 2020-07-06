import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'

export default function Reset(){
    return(
        <div className="background">
        <div className="container">
        <section className="form">
           <h1>Reset Password</h1>
            <form>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Enter a new password"/>

                <button className="button" type="submit">Submit</button>
                <Link to="/login">
                    <FiArrowLeft size={18} color={'rgb(181, 43, 107)'}/>I do not have an acount yet</Link>

            </form>
        </section>
    </div>
    </div>
    )
}