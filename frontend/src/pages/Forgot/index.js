import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import {FiArrowLeft} from 'react-icons/fi'

export default function Forgot(){
    return(
        <div className="background">
        <div className="container">
        <section className="form">
           <h1>Forgot</h1>
            <form>
                <input type="email" placeholder="E-mail"/>
                <button className="button" type="submit">Submit</button>
                <Link to="/register">
                    <FiArrowLeft size={18} color={'rgb(181, 43, 107)'}/>Turn back to login psge</Link>

            </form>
        </section>
    </div>
    </div>
    )
}