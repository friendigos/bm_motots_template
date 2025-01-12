
import Link from 'next/link'
import CounterUp from '../elements/CounterUp'

export default function About2() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover" id="about" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")' }}>
                <div className="container">
                    <div className="about-wrapper style-2">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image-items">
                                    <div className="circle-shape">
                                        <img loading="lazy" src="/assets/img/about/circle.png" alt="shape-img" />
                                    </div>
                                    <div className="counter-shape float-bob-y">
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h3><CounterUp count={10 }/>Years</h3>
                                            <p>Of Experience</p>
                                        </div>
                                    </div>
                                    <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/03.png")' }}>
                                        <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                            <img loading="lazy" src="/assets/img/about/04.jpg" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span className="wow fadeInUp">ABOUT COMPANY</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Web Development  <span>Company</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    AIZ INFOTECH Is A Web Development And Designing Company Committed To Providing Unmatched IT Services To Fulfill Clients’ Vision Into Reality. Our Web Development Agency Follows A Result-Oriented Process Focused On Client Satisfaction.Our Expert Website Development Team Is Experienced In Offering Enterprise-Level Solutions That Are Secure And Highly Reliable. We Are Passionate About WordPress And Know Every Detail Of It, When It Comes To Website Development, Irrespective Of Your Requirements, You Can Count On Our Dedicated Custom Website Development Team To Fulfill Them And Deliver The Most Effective Results.
                                    </p>
                                    {/* <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/about/icon-4.svg" alt="icon-img" />
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
                                                <img loading="lazy" src="/assets/img/about/icon-5.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Mission &amp; Vision</h4>
                                                <p>
                                                    Ut vehiculadictumst. Maecenas ante.
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="about-author">
                                        <div className="about-button wow fadeInUp" data-wow-delay=".5s">
                                            <Link href="/about" className="theme-btn">
                                            Discover More
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
