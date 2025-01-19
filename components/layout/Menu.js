import Link from "next/link"
import { Router } from "next/router";
import { Route, Routes } from "react-router-dom";
import Blank from "../elements/Blank";

export default function Menu() {
    const handleNavigation = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>

            <ul>
                {/* <li className="active menu-thumb">
                    <Link href="/">
                        Get Best Price
                    </Link>
                </li> */}
                {/* <li>
                    <Link href="/about">About Us</Link>
                </li> */}
                {/* <li>
                    <Link href="/news">
                        Services
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/service">Services</Link></li>
                        <li><Link href="/service-carousel">Service Carousel</Link></li>
                        <li><Link href="/service-details">Service Details</Link></li>
                    </ul>
                </li> */}
                {/* <li>
                    <Link href="/project-carousel">Contact Us</Link>
                </li> */}
                {/* <li className="has-dropdown">
                    <Link href="/news">
                        Pages
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                            <Link href="/project">
                                Projects
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/project">Project</Link></li>
                                <li><Link href="/project-carousel">Project Carousel</Link></li>
                                <li><Link href="/project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-carousel">Team Carousel</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/error">404 Page</Link></li>
                    </ul>
                </li> */}


                {/* <li>
                    <Link href="/news-standard">Blog</Link>
                </li> */}
                {/* <li>
                    <Link href="/news">
                        Blog
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/news">Blog Grid</Link></li>
                        <li><Link href="/news-standard">Blog Standard</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul>
                </li> */}


                {/* <li>
                    <Link href="/contact">Get Best Price</Link>
                </li>
                <li>
                    <Link href="/contact">Sell</Link>
                </li>
                <li>
                    <Link href="/contact">Become Our Franchise</Link>
                </li> */}

                {/* <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="#faqs">Faqs</Link>
                </li>
                <li>
                    <Link href="/contact">Think</Link>
                </li> */}

                <li onClick={() => handleNavigation('about')} style={{ cursor: 'pointer' }}>
                    <Link href="/about">About</Link>
                </li>
                <li onClick={() => handleNavigation('blank')} style={{ cursor: 'pointer' }}>
                    <Link href="#blank">FAQs</Link>
                </li>
                <li>
                    <Link href="/contact">Think</Link>
                </li>
            </ul>
        </>
    )
}
