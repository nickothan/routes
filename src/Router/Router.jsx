import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import {Rutas} from "./style.js";

import Home from "../Pages/Home";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

export default function Router() {
    return (
        <BrowserRouter>
            <Rutas>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="btn-pr">
                                Home
                            </Link>
                        </li>
                        <li className="boton">
                            <Link to="/about" className="btn-pr">
                                About
                            </Link>
                        </li>
                        <li className="boton">
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
            </Rutas>
        </BrowserRouter>
    );
}
