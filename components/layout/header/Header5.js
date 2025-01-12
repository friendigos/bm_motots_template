import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "../Menu-new";

export default function Header1({
    scroll,
    isOffCanvas,
    handleOffCanvas,
    onePageNav,
}) {
    const [isHeaderRightLoaded, setIsHeaderRightLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const loadHeaderRight = () => {
            if (window.innerWidth <= 992) {
                const timer = setTimeout(() => {
                    setIsHeaderRightLoaded(true);
                }, 5000);

                return () => clearTimeout(timer);
            } else {
                setIsHeaderRightLoaded(true);
            }
        };

        loadHeaderRight();
        window.addEventListener("resize", loadHeaderRight);

        return () => {
            window.removeEventListener("resize", loadHeaderRight);
        };
    }, []);

    return (
        <>
            <header>
                {!isMobile && (
                    <div className="header-top-section bg-header-color py-2 relative z-99 max-lg:hidden">
                        <div className="container-fluid">
                            <div className="flex justify-between">
                                <ul className="flex gap-[20px] items-center text-text-color-2 text-15">
                                    <li className="flex gap-5 items-center">
                                        <i className="far fa-envelope" />
                                        <Link href="mailto:info@example.com" className="text-text-color-2">
                                            info@example.com
                                        </Link>
                                    </li>
                                    <li className="flex gap-5 items-center">
                                        <i className="fa-solid fa-phone-volume" />
                                        <Link href="tel:2086660112" className="text-text-color-2">+208-666-0112</Link>
                                    </li>
                                </ul>
                                <div className="flex gap-7 items-center">
                                    <span className="text-white font-medium">Follow Us:</span>
                                    <Link href="https://www.facebook.com/aizinfotech" aria-label="Visit our Facebook page">
                                        <i className="fab fa-facebook-f text-white" />
                                    </Link>
                                    <Link href="https://x.com/aizinfotechs" aria-label="Visit our Twitter page">
                                        <i className="fab fa-twitter text-white" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/aizinfotechs/" aria-label="Visit our Linkedin page">
                                        <i className="fa-brands fa-linkedin-in text-white" />
                                    </Link>
                                    <Link href="https://www.youtube.com/" aria-label="Visit our Youtube page">
                                        <i className="fa-brands fa-youtube text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    id="header-sticky"
                    className={`header-1 relative bg-white shadow-custom max-md:h-[55px] ${scroll ? "fixed top-0 left-0 w-full z-100" : ""}`}
                >
                    <div className="container-fluid">
                        <div className="flex justify-between items-center py-2">
                            <div className="logo">
                                <Link href="/" className="header-logo">
                                    <img loading="lazy" src="/assets/img/logo/black-logo.svg" alt="logo-img" className="h-[45px] max-md:h-[35px]" />
                                </Link>
                            </div>
                            {isHeaderRightLoaded && (
                                <div className="flex justify-end items-center gap-12 max-lg:gap-6">
                                    {!isMobile && (
                                        <nav id="mobile-menu">
                                            <Menu />
                                        </nav>
                                    )}
                                    {!isMobile && (
                                        <Link href="/contact" className="theme-btn px-8 py-5 text-white text-14 bg-theme-color hover:bg-theme-color-2">
                                            <span className="flex items-center">
                                                Contact Us
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="17px" width="17px" className="ml-2">
                                                    <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    )}
                                    <div className="header__hamburger my-auto max-lg:block hidden">
                                        <div className="sidebar__toggle cursor-pointer text-24 text-white max-lg:text-theme-color" onClick={handleOffCanvas}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24px" width="24px">
                                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
