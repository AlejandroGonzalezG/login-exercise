import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Login from "./pages/Login"
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import NotFound from "./pages/NotFound";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Signup} exact path="/register" />
                <Route component={Login} exact path="/login" />
                <Route component={Profile} exact path="/profile" />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default injectContext(Layout);
