import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../utilities/auth-service';

function PrivateRoute({children, ...rest}){
    return(
        <Route {...rest} render={({location}) => {
            if(Auth.isAuthenticated() && location.pathname !== '/login'){
                return children
            }else if((Auth.isAuthenticated() && location.pathname === '/login') || (Auth.isAuthenticated() && location.pathname === '/register')){
                return <Redirect to={{pathname:"/dashboard", state:{from:location}}}></Redirect>
            }else if((!Auth.isAuthenticated() && location.pathname !== '/login')){
                return <Redirect to={{pathname: "/login", state:{from:location}}}/>
            }else{
                return children
            }
        }}/>
    )
}
export default PrivateRoute;