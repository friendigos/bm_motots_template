import Link from "next/link"
import { useEffect, useState } from 'react';

export default function Footer5() {
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);

    const toggleCollapse1 = () => setIsCollapsed1(!isCollapsed1);
    const toggleCollapse2 = () => setIsCollapsed2(!isCollapsed2);
    const toggleCollapse3 = () => setIsCollapsed3(!isCollapsed3);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img loading="lazy" src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img loading="lazy" src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget cst-mt">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img loading="lazy" src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                            Phasellus ultricies aliquam volutpat
                                            ullamcorper laoreet neque, a lacinia
                                            curabitur lacinia mollis
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="https://www.facebook.com/aizinfotech" aria-label="Visit our Facebook page"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="https://x.com/aizinfotechs" aria-label="Visit our Twitter page"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://api.whatsapp.com/send?phone=917874278859" aria-label="Contact via Whatsapp"><i className="fa-brands fa-whatsapp" /></Link>
                                            <Link href="https://www.youtube.com/" aria-label="Visit our Youtube page"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                {!isMobile ? (
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className="list-area">
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="single-footer-widget">
                                        <div className="widget-head" onClick={toggleCollapse1}>
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className={`list-area ${isCollapsed1 ? 'collapsed' : 'expanded'}`}>
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="col-xl col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                {!isMobile ? (
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className="list-area">
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="single-footer-widget">
                                        <div className="widget-head" onClick={toggleCollapse2}>
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className={`list-area ${isCollapsed2 ? 'collapsed' : 'expanded'}`}>
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="col-xl col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                {!isMobile ? (
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className="list-area">
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="single-footer-widget">
                                        <div className="widget-head" onClick={toggleCollapse3}>
                                            <h3>Quick Links</h3>
                                        </div>
                                        <ul className={`list-area ${isCollapsed3 ? 'collapsed' : 'expanded'}`}>
                                            <li>
                                                <Link href="/about">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Infotech About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/news">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Our Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    FAQ’S
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'18px'} width={"18px"}>
                                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                                                    </svg>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">Infotech</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="" id="scrollUp" className="scroll-icon" aria-label="Scroll to top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={'20px'} width={"20px"}><path d="M209 50.2l-17-17-17 17L21.4 203.8l-17 17 33.9 33.9 17-17L168 125.1V456v24h48V456 125.1L328.6 237.8l17 17 33.9-33.9-17-17L209 50.2z" /></svg>
                    </Link>
                </div>
            </footer>

        </>
    )
}
