import React from "react";
import Logo from "../../assets/icons/logo";
import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa'

const Sidebar = ({ toggle }) => {
    return (
        <nav className="sidebar-container">
            <div className="sidebar-container__mobile-icon" onClick={toggle}>
                {/* <FaBars /> */}
            </div>
            <div className="sidebar-container__link">
                <ul className="sidebar-link__items">
                    <li className="sidebar-link__item">
                        <Link to="home" smooth={true} duration={600} spy={true}>
                            Home
                        </Link>
                    </li>
                    <li className="sidebar-link__item">
                        <Link to="services" smooth={true} duration={600} activeClassName="active" spy={true}>
                            Services
                        </Link>
                    </li>
                    <li className="sidebar-link__item">
                        <Link to="how_we_work" smooth={true} duration={600} activeClassName="active" spy={true}>
                            How We Work
                        </Link>
                    </li>
                    <li className="sidebar-link__item">
                        <Link to="our_team" smooth={true} duration={600} activeClassName="active" spy={true}>
                            Our Team
                        </Link>
                    </li>
                    <li className="sidebar-link__item">
                        <Link to="faq" smooth={true} duration={600} activeClassName="active" spy={true}>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar-container__contactus">
                <Link to="contact" smooth={true} duration={600} className="contact-container" activeClassName="active" spy={true}>Contact us</Link>
            </div>
        </nav>
    );
};

export default Sidebar;
