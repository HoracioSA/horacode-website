import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/CodeZone.svg'
// import reading from '../../assets/Reading.svg'


export default function Home(){
    return (
        <div className="home-container">
            <div className="topbar-container">
                <section className="button-container">
                <img src={logo} alt="logo"/>
                <div className="nav-button">
                    <p><Link>Blog</Link></p>
                    <p><Link to='/login'>Sign In</Link></p>
                    <p><Link to='/register'>Sign Up</Link></p>
                    <p><Link>Support</Link></p>
                </div>    
                </section>
            </div>
            <div className="contents">
            <section>
                <div className="box-area">
                    <div className="text-area">
                    <h2>You’re never paying full price for software again.</h2>
                    <h3>We’ll send you the hottest deals straight to your inbox so you’re always in on the best-kept software secrets.</h3>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Email Adress"/>
                        <button type="submit">Send</button>
                    </div>
                    <div className="image-container">
                    {/* <img src={reading} alt="Home"/> */}
                    </div>
                </div>
                    
                
            </section>
            <section>
        
                    <div className="sub-content">
                    <section>
                    <div className="content-info">
                    <h2>We partner with the hottest tech companies.</h2> 
                    <h3>We're talking Evernote, MailChimp, Depositphotos... just to name a few.</h3> 
                    </div>
                    </section>  
                    </div> 
                    <div className="sub-content">
                    <section>
                    <div className="content-info">
                    <h2>We partner with the hottest tech companies.</h2> 
                    <h3>We're talking Evernote, MailChimp, Depositphotos... just to name a few.</h3> 
                    </div>  
                    </section>
                    </div>  
                    <div className="sub-content">
                    <section>
                    <div className="content-info">
                    <h2>We partner with the hottest tech companies.</h2> 
                    <h3>We're talking Evernote, MailChimp, Depositphotos... just to name a few.</h3>   
                    </div>
                    </section>
                    </div>               
                    
            </section>
            </div>
            
        </div>
    )
}