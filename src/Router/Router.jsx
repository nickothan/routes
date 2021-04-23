import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "../components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
