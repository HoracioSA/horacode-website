import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../src/pages/Login';
import Home from '../src/pages/HomePage'
import Register from '../src/pages/Register'
import Forgot from '../src/pages/Forgot'
import Reset from '../src/pages/Reset'

export default function Routes(){
    return(
        <BrowserRouter>
        
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/forgot' component={Forgot}/>
                <Route path='/reset' component={Reset}/>

            </Switch>
        
        </BrowserRouter>
    )
}
