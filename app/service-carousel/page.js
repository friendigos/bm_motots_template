'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dot-2",
        clickable: true,
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
export default function ServiceCarousel() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Services">
                <div>
                    <section className="service-section-3 fix section-padding">
                        <div className="container">
                            <div className="swiper service-slider-2">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image">
                                                <img loading="lazy" src="/assets/img/service/02.jpg" alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="/service-details">Database Security</Link>
                                                </h4>
                                                <p>
                                                    accumsan. Pellentesque in magna tincidunt, this is.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image">
                                                <img loading="lazy" src="/assets/img/service/03.jpg" alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-2.svg" alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="/service-details">IT Consultancy</Link>
                                                </h4>
                                                <p>
                                                    accumsan. Pellentesque in magna tincidunt, this is.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image">
                                                <img loading="lazy" src="/assets/img/service/04.jpg" alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-4.svg" alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-5.svg" alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="/service-details">App Development</Link>
                                                </h4>
                                                <p>
                                                    accumsan. Pellentesque in magna tincidunt, this is.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image">
                                                <img loading="lazy" src="/assets/img/service/05.jpg" alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="/service-details">Database Security</Link>
                                                </h4>
                                                <p>
                                                    accumsan. Pellentesque in magna tincidunt, this is.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-card-items mt-0">
                                            <div className="service-image">
                                                <img loading="lazy" src="/assets/img/service/02.jpg" alt="service-img" />
                                            </div>
                                            <div className="icon-2">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                            </div>
                                            <div className="service-content">
                                                <div className="icon">
                                                    <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                                </div>
                                                <h4>
                                                    <Link href="/service-details">Database Security</Link>
                                                </h4>
                                                <p>
                                                    accumsan. Pellentesque in magna tincidunt, this is.
                                                </p>
                                                <Link href="/service-details" className="theme-btn-2 mt-3">
                                                    read More
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-dot-2">
                                    <div className="dot-2" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Brand Section Start */}
                    <div className="brand-section fix section-padding pt-0 mt-5">
                        <div className="container">
                            <div className="brand-wrapper">
                                <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">1k + Brands Trust Us</h6>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}