'use client'
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Heading from "../Heading"

export default function Offcanvas({
    isOffCanvas,
    handleOffCanvas,
}) {
    return (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link href="/">
                                        <Heading />
                                    </Link>
                                </div>
                                <div className="offcanvas__close" onClick={handleOffCanvas}>
                                    <button>
                                        <i className="fas fa-times" />
                                        <span>.</span>
                                    </button>
                                </div>
                            </div>
                            <p className="text d-none d-lg-block">
                            Scrap Smart With BM Motors – Quick, Reliable, And Hassle-Free Vehicle Disposal Solutions!.
                            </p>
                            <div className="d-md-block d-lg-none">
                                <MobileMenu />
                            </div>

                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            KURKUMBH PLANT : Gat No. 437,A/P-Malad, Pune Solapur Highway, Tal.-Daund, Dist.-Pune 413801                                        
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                        BRANCH OFFICE : SN-11/914/2B/16, Hindustan Valencia, Nibm Road, Kausarbaugh, Kondhwa, Pune, Maharashtra, 411048                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                        CORPORATE OFFICE : Gat No.1079, A/P- Kadamwakwasti, Pune - Solapur Highway, Tal. -Haveli, Dist.- Pune 412307                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="mailto:info@azent.com"><span className="mailto:info@example.com">bmmotorspvt@gmail.com</span></Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link target="_blank" href="tel:+917874278859">Mod-friday, 09am -05pm</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link href="tel:+9191460 36003">+91 91460 36003</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <Link href="/contact" className="theme-btn text-center">
                                        <span>Contact Us<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></span>
                                    </Link>
                                </div>
                                <div className="but d-flex align-items-center">
                                    <Link href="https://www.facebook.com/profile.php?id=61570457327710" aria-label="Visit our Facebook page"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="https://www.instagram.com/" aria-label="Visit our Instagram page"><i className="fab fa-instagram" /></Link>
                                    <Link href="https://www.youtube.com/channel/UCRinedtawt7JqsD830MucDg" aria-label="Visit our Youtube page"><i className="fab fa-youtube" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isOffCanvas ? "overlay-open" : ""}`} onClick={handleOffCanvas} />
        </>

    )
}
