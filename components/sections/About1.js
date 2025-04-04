

import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'
import CounterUp from '../elements/CounterUp'

export default function About1() {
    return (
        <>
            <section className="about-section section-padding fix"  id="about">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    {/* <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={160}/>+ <p security={{fontSize:"10px"}}>Get National Award</p></h3>
                                        </div>
                                    </div> */}
                                    <VideoPopup style={2} />
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/NitinGadkari.jpg")' }}>
                                        {/* <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img loading="lazy" src="/assets/img/about/02.jpg" alt="about-img" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">OUR COMPANY</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Vehicle Scrappage <span>Policy</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    The Vehicle Scrappage Policy was notified by MORTH (Ministry of Road, Transport and Highways) in Sept. 2021, aiming to replace old vehicles with modern & new vehicles on Indian roads. According to the new policy, commercial vehicles aged more than 15 years and passenger vehicles aged more than 20 years will have to mandatorily go for fitness test and if it fails, then to be treated as End-of-Life vehicle which will have to be scrapped through a RVSF (Registered Vehicle Scrappage Facility). Further, this policy also draws several incentives and dis-incentives for scrapping or continuingwith the older vehicles.
                                    </p>
                                    {/* <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/about/icon-2.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Problem Solving</h4>
                                                <p>
                                                    Aliquam erat volutpat Nullam imperdiet
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/about/icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Mission &amp; Vision</h4>
                                                <p>
                                                    Aliquam erat volutpat Nullam imperdiet
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="https://morth.nic.in/vehicle-scrapping-policy-overview" className="theme-btn">
                                            Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                            </Link>
                                        </div>
                                        {/* <div className="author-image wow fadeInUp" data-wow-delay=".7s">
                                            <img loading="lazy" src="/assets/img/about/author.png" alt="author-img" />
                                            <div className="content">
                                                <h6>Ronald Richards</h6>
                                                <p>Co, Founder</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
