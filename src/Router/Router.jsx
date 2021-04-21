import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {Header} from "./style.js";

import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

export default function Router() {
    return (
        <BrowserRouter>
            <Header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="btn-pr">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="btn-pr">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="btn-pr">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>

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
            </Header>
        </BrowserRouter>
    );
}
