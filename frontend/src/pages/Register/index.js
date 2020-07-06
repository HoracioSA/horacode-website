import React from 'react';
import {Link} from 'react-router-dom'
import '../../global.css'
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'

export default function Register(){
    return(
        <div className="background">
        <div className="container">
        <section className="form">
           <h1>Register</h1>
            <form>
                <input type="Name" placeholder="Name"/>
                <input type="Surname" placeholder="Surname"/>
                <input type="Email" placeholder="E-mail"/>
                <input placeholder="Password"/>
                <button className="button" type="submit">Submit</button>
                <Link to="/login">
                    <FiArrowLeft size={18} color={'rgb(181, 43, 107)'}/>Back to loginpage</Link>

            </form>
        </section>
    </div>
    </div>
    )
}