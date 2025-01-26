
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import Link from "next/link"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"
import About1 from "@/components/sections/About1"
import About3 from "@/components/sections/About3"
import Cta2 from "@/components/sections/Cta2"
import Testimonial1 from "@/components/sections/Testimonial1"
import Getinto from "@/components/sections/Getinto"
import News1 from "@/components/sections/News1"




export default function About() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    <About1 />
                    <About3 />
                    <Cta2 />
                    {/* Project Section Start */}
                    {/* <section className="project-section-2 section-padding fix">
                        <div className="left-shape">
                            <img loading="lazy" src="/assets/img/project/left-shape.png" alt="shape-img" />
                        </div>
                        <div className="right-shape">
                            <img loading="lazy" src="/assets/img/project/right-shape.png" alt="shape-img" />
                        </div>
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title">
                                    <span className="wow fadeInUp">PROJECTS</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Our Latest Incredible <br /> Client's Projects
                                    </h2>
                                </div>
                                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                    <button className="array-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                    <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                </div>
                            </div>
                            <div className="project-wrapper">
                                <ProjectSlider2 showDots />
                            </div>
                        </div>
                    </section> */}
                    {/*<< Marque Section Start >>*/}
                    {/* <div className="marque-section-3 section-padding">
                        <div className="container-fluid">
                            <div className="marquee-wrapper style-2 text-slider">
                                <div className="marquee-inner to-left">
                                    <ul className="marqee-list d-flex">
                                        <li className="marquee-item style-2">
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Cyber Security</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">IT Solution</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Technology</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Data Security</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Cyber Security</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">IT Solution</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Technology</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Data Security</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Cyber Security</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">IT Solution</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Technology</span>
                                            <span className="text-slider"><img loading="lazy" src="/assets/img/asterisk.svg" alt="img" /></span><span className="text-slider text-style">Data Security</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*<< Team Section Start >>*/}
                    {/* <section className="team-section-3 fix pt-0 section-padding">
                        <div className="container">
                            <div className="section-title-area">
                                <div className="section-title">
                                    <span className="wow fadeInUp">Team Members</span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Our Dedicated Team <br /> Members
                                    </h2>
                                </div>
                                <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    All Member
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img loading="lazy" src="/assets/img/team/04.jpg" alt="team-img" />
                                            <div className="social-profile">
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img loading="lazy" src="/assets/img/team/05.jpg" alt="team-img" />
                                            <div className="social-profile">
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img loading="lazy" src="/assets/img/team/06.jpg" alt="team-img" />
                                            <div className="social-profile">
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                                    <div className="single-team-items">
                                        <div className="team-image">
                                            <img loading="lazy" src="/assets/img/team/07.jpg" alt="team-img" />
                                            <div className="social-profile">
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">Marvin McKinney</Link>
                                            </h3>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* Brand Section Start */}

                    {/* <Testimonial1/> */}
                    <Getinto/>
                {/* <News1/> */}


                    {/* <div className="brand-section fix section-padding pt-0">
                        <div className="container">
                            <div className="brand-wrapper">
                                <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">1k + Brands Trust Us</h6>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div> */}
                </div>

            </Layout>
        </>
    )
}