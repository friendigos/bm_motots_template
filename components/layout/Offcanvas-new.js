'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {

    const [isHeaderRightLoaded, setIsHeaderRightLoaded] = useState(false);
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
            <div className="fix-area">
                {isHeaderRightLoaded && (
                    <div className={`fixed top-0 right-0 h-full bg-[#F3F7FB] border-l-2 border-[#384BFF] w-[400px] transform transition-transform transition-opacity duration-450 ease-in-out z-[99999] overflow-y-scroll overscroll-contain scrollbar-none ${isOffCanvas ? 'translate-x-0' : 'translate-x-[calc(100%+80px)]'}`}>
                        <div className="relative h-full p-8">
                            <div className="mb-5 flex justify-between items-center">
                                <div className="w-[150px]">
                                    <Link href="/">
                                        <img loading="lazy" src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="w-[45px] h-[45px] rounded-full bg-[#F3F7FB] flex items-center justify-center cursor-pointer relative z-[9]" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="text-white fas fa-times"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                            <p className="text-[#585858] hidden lg:block">
                            Scrap Smart With BM Motors – Quick, Reliable, And Hassle-Free Vehicle Disposal Solutions!.
                            </p>
                            <div className="block lg:hidden">
                                <MobileMenu />
                            </div>
                            <div className="mt-5">
                                <h4 className="text-lg font-semibold">Contact Info</h4>
                                <ul className="mt-5">
                                    <li className="flex items-center mb-4">
                                        <div className="mr-5 text-[#384BFF]">
                                            <i className="fal fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <Link href="tel:+917874278859" className="text-[#585858] hover:text-[#384bff]">Pune</Link>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="mr-5 text-[#384BFF]">
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div>
                                            <Link href="mailto:info@example.com" className="text-[#585858] hover:text-[#384bff]">info@example.com</Link>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="mr-5 text-[#384BFF]">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div>
                                            <Link href="tel:+917874278859" className="text-[#585858] hover:text-[#384bff]">Mon-Fri, 09am - 05pm</Link>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="mr-5 text-[#384BFF]">
                                            <i className="far fa-phone"></i>
                                        </div>
                                        <div>
                                            <Link href="tel:+917874278859" className="text-[#585858] hover:text-[#384bff]">+917874278859</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="/contact" className="block w-full text-center bg-[#384BFF] text-white py-4 px-10 rounded">
                                        <span>Get A Quote<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="17" width="17"><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></span>
                                    </Link>
                                </div>
                                <div className="mt-8 flex gap-2">
                                    <Link href="https://www.facebook.com/aizinfotech" aria-label="Visit our Facebook page" className="w-12 h-12 flex items-center justify-center text-[#585858] hover:bg-[#384BFF] hover:text-[#384bff] border border-gray-300 rounded-full transition-all duration-400">
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link href="https://x.com/aizinfotechs" aria-label="Visit our Twitter page" className="w-12 h-12 flex items-center justify-center text-[#585858] hover:bg-[#384BFF] hover:text-[#384bff] border border-gray-300 rounded-full transition-all duration-400">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link href="https://www.youtube.com/" aria-label="Visit our YouTube page" className="w-12 h-12 flex items-center justify-center text-[#585858] hover:bg-[#384BFF] hover:text-[#384bff] border border-gray-300 rounded-full transition-all duration-400">
                                        <i className="fab fa-youtube"></i>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/aizinfotechs/" aria-label="Visit our LinkedIn page" className="w-12 h-12 flex items-center justify-center text-[#585858] hover:bg-[#384BFF] hover:text-[#384bff] border border-gray-300 rounded-full transition-all duration-400">
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isHeaderRightLoaded && (
                    <div className={`fixed top-0 right-0 w-full h-full bg-[#151515] z-[900] transition-opacity ${isOffCanvas ? 'opacity-80 visible' : 'opacity-0 invisible'}`} onClick={handleOffCanvas}></div>
                )}
            </div>
        </>
    )
}
