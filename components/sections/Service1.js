'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }} id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">WEBSITE DEVELOPMENT SERVICES</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Website Development <br /> Services
                            </h2>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                            <button className="array-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="service-box-items" >
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    E-Commerce Development
                                                </Link>
                                            </h4>
                                            <p>
                                                Our E-Commerce Development Services Help You Develop A Platform To Connect With Customers And Conveniently Sell Products And Services Online.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Web Design
                                                </Link>
                                            </h4>
                                            <p>
                                                A Web Designing Company That Consistently Provides Exceptional Web Designing Services And Turns Imagination Into Reality.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items" >
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Web Development
                                                </Link>
                                            </h4>
                                            <p>
                                                We Have An Experienced And Dedicated Web Development Team That Provides Bespoke Web Development Services That Fit Clients’ Budgets Yet Meet All Their Requirements.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items" >
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    App Development
                                                </Link>
                                            </h4>
                                            <p>
                                                Want To Shape Your Thoughts Into An Ideal Application That Runs Uninterruptedly?Our Dedicated App Development Team Provides Bespoke App Development Services And Excellent Support Services.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items" >
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details" >
                                                    JS Framworks
                                                </Link>
                                            </h4>
                                            <p>
                                                We Develop Practical And Useful Programs Using JS Frameworks That Help Organizations Increase Their Operating Efficiency.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="service-box-items" >
                                        <div className="icon">
                                            <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Digital Marketing
                                                </Link>
                                            </h4>
                                            <p>
                                                A Robust Online Presence Is Vital To Staying Connected With Customers And Promoting A Brand. We Have A Team Of Skilled Digital Marketers That Make Your Brand Visible To Potential Customers And Boost Growth.
                                            </p>
                                            <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        {/* <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                                Need Any Kind Of IT Solution For Your Business.  <Link href="/service">View Services </Link>
                            </h6>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
