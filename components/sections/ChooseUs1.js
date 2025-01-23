import Link from "next/link";


export default function ChooseUs1() {
    return (
        <>
            <section className="choose-us-section fix section-padding">
                <div className="choose-shape">
                    <img loading="lazy" src="/assets/img/choose/shape.png" alt="shape-img" />
                </div>
                <div className="bottom-shape">
                    <img loading="lazy" src="/assets/img/choose/bottom-shape.png" alt="shape-img" />
                </div>
                <div className="arrow-shape-1 bounce-x">
                    <img loading="lazy" src="/assets/img/choose/arrow-shape-1.png" alt="shape-img" />
                </div>
                <div className="circle-shape">
                    <img loading="lazy" src="/assets/img/choose/circle.png" alt="shape-img" />
                </div>
                <div className="line-shape">
                    <img loading="lazy" src="/assets/img/choose/line-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="choose-us-wrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="choose-us-image wow fadeInUp" data-wow-delay=".4s">
                                    <img loading="lazy" src="/assets/img/choose/01.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="choose-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">BEAUTIFUL APPLICATION FOR YOUR BUSINESS</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            App Development
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Application Development Refers To The Process Of Creating Software Applications That Serve Specific Functions Or Provide Solutions For Various Purposes. This Can Include Developing Applications For Desktops, Mobile Devices, Web Platforms, Or Even Embedded Systems
                                    </p>
                                    {/* <div className="choose-list-area">
                                        <ul className="choose-list wow fadeInUp" data-wow-delay=".7s">
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Branding and design Identity
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                Web site Marketing Solutions
                                            </li>
                                        </ul>
                                        <ul className="choose-list wow fadeInUp" data-wow-delay=".9s">
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                24/7 system Monitoring
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check" />
                                                unlimited Download Data
                                            </li>
                                        </ul>
                                    </div> */}
                                    <div className="progress-wrap">
                                        <div className="pro-items wow fadeInUp" data-wow-delay=".5s">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    Android Application
                                                </h6>
                                                <span className="point">
                                                    100%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value" />
                                            </div>
                                        </div>
                                        <div className="pro-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="pro-head">
                                                <h6 className="title">
                                                    IOS Application
                                                </h6>
                                                <span className="point">
                                                    100%
                                                </span>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-value style-two" />
                                            </div>
                                        </div>
                                        <div className="hero-button">
                                            <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                                Visit Government Website for scrapping Vehicles
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                            {/* <VideoPopup style={3} /> */}
                                        </div>
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
