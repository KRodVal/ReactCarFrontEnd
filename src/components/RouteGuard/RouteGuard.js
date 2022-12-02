import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const RouteGuard = () => {

    function hasJWT() {
        let flag = false;

        localStorage.getItem("token") ? flag=true : flag=false

        return flag
    }

    return(
        <Route {...rest}
            render={props => (
                hasJWT() ?
                    <Component {...props} />
                    :
                    <Redirect to={{ pathname: 'login' }}/>
            )}
        />
    );
};

export default RouteGuard;