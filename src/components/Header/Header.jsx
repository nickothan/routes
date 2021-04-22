import {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import {ContenidoHeader} from "./style.js";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <ContenidoHeader isOpen={isOpen}>
            <div className="menu-movil">
                <h2>Menu</h2>
                <button onClick={handleOpenMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className="btn-pr" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="btn-pr" onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="btn-pr" onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </ContenidoHeader>
    );
}
