'use client'
import Layout from "@/components/layout/Layout-new"
import { useEffect, useState } from 'react';
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "/public/assets/css/tailwind.css"
import "/public/assets/css/service-details.css"
import Tabs from "@/components/sections/Tabs"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
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

export default function ServiceDetails() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const expertiseItems = [
        {
            img: '/assets/img/section-3-icon-1.png',
            title: 'PHP E-Commerce Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-2.png',
            title: 'PHP Application Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-3.png',
            title: 'PHP Application Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-4.png',
            title: 'PHP Migration Services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-5.png',
            title: 'PHP Database Integration',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
        {
            img: '/assets/img/section-3-icon-6.png',
            title: 'Full Stack PHP Development',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
        },
    ];
    const [activeItem, setActiveItem] = useState(1)

    const handleClick = (index) => {
        setActiveItem(index)
    }

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <section class="service-detail-wrapper bg-cover bg-center bg-no-repeat relative overflow-hidden py-24 h-[682px] max-md:h-auto max-md:py-[20px] max-md:bg-none">
                    <div class="bg-1 absolute left-6 top-0 z-10">
                        <h2 class="text-[#543D9A] text-[360px] font-extrabold leading-none opacity-40 max-md:text-[110px]">PHP</h2>
                    </div>
                    <div class="bg-4 absolute left-[710px] top-[460px] max-md:left-2.5 max-md:top-[460px]">
                        <img loading="lazy" src="/assets/img/aiz-logo.png" alt="image" class="max-h-[100px]" />
                    </div>
                    <div class="container mx-auto px-4 h-full">
                        <div class="service-detail-wrapper-main flex items-center justify-between relative z-10 gap-24 max-md:flex-wrap max-md:gap-7.5 h-full">
                            <div class="service-detail-wrapper-contant w-1/2 max-xl:w-full max-md:w-full">
                                <h1 class="text-white text-[30px] font-semibold leading-7 mb-6 max-md:text-[24px] max-md:mb-2.5">PHP Development</h1>
                                <p class="text-white text-[16px] font-normal leading-7 max-md:text-[14px] max-md:leading-[23px] w-[650px] max-xl:w-full max-md:w-full">AIZ Infotechs Provides Expert PHP Development Services That Help You Leverage The Optimum Benefit Of PHP Web Development In Achieving Enterprise-Level Goals. We Come Second To None When It Comes To Delivering Highly Functional PHP Solutions Like PHP Application Development, PHP CMS Development, And More. PHP Is Not A New Technology; It Has Many Versions And Has Seen A Lot Of Changes Since Its Introduction. We Have A Team Of Experienced PHP Developers Who Are Enthusiastic About PHP And Have In-Depth Knowledge Of All Its Versions. Our Team Members Have Extensive Work Experience And Have Been Satisfying Clients By Creating Unique PHP Solutions Addressing Their Requirements.</p>
                            </div>
                            <div class="service-detail-wrapper-form block p-6 rounded-[20px] bg-[rgba(80,59,164,0.20)] shadow-[0_4px_4px_rgba(9,16,81,0.25)] w-1/2 max-xl:w-full max-md:w-full max-md:p-4">
                                <h2 class="mb-3 text-white text-[30px] font-normal leading-none">Let’s <span class="font-semibold">Connect</span> With Us</h2>
                                <form action="#" class="flex flex-wrap gap-3">
                                    <input type="text" placeholder="Full Name" class="cst-input w-full p-4 rounded-[10px] bg-white text-black shadow-[0_5px_14px_rgba(8,15,52,0.04)] border-transparent max-md:p-1.5" />
                                    <input type="email" placeholder="Email" class="cst-input w-full p-4 rounded-[10px] bg-white text-black shadow-[0_5px_14px_rgba(8,15,52,0.04)] border-transparent max-md:p-1.5" />
                                    <input type="text" placeholder="Services" class="cst-input w-full p-4 rounded-[10px] bg-white text-black shadow-[0_5px_14px_rgba(8,15,52,0.04)] border-transparent max-md:p-1.5" />
                                    <textarea placeholder="Description" class="cst-input w-full p-4 rounded-[10px] bg-white text-black shadow-[0_5px_14px_rgba(8,15,52,0.04)] border-transparent max-md:p-1.5"></textarea>
                                    <a href="#" class="block bg-[#543D9A] text-white text-[16px] font-medium leading-none p-[15px] rounded-[15px] text-center w-1/3 transition duration-700 hover:bg-[#1100ff]">Submit</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="expertise-section">
                    <div className="container mx-auto sm:px-4">
                        <h2 className="text-center">We Have Expertise In</h2>
                        {isMobile ? (
                            <div>
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    navigation={{ nextEl: ".array-next", prevEl: ".array-prev" }}
                                    modules={[Navigation]}
                                >
                                    {expertiseItems.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="expertise-div active">
                                                <div className="expertise-icon-div">
                                                    <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                                                </div>
                                                <div>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="block lg:hidden mt-4">
                                    <div className="array-button justify-center">
                                        <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                        <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-wrap ">
                                {expertiseItems.map((item, index) => (
                                    <div className="xl:w-1/3 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4" key={index}>
                                        <div className="expertise-div active">
                                            <div className="expertise-icon-div">
                                                <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                <section className="choose-us-section fix section-padding">
                    {!isMobile && (
                        <div className="choose-shape ">
                            <img loading="lazy" src="/assets/img/choose/shape-2.png" alt="shape-img" />
                        </div>
                    )}
                    {!isMobile && (
                        <div className="bottom-shape ">
                            <img loading="lazy" src="/assets/img/choose/bottom-shape.png" alt="shape-img" />
                        </div>
                    )}
                    {!isMobile && (
                        <div className="arrow-shape-1 bounce-x">
                            <img loading="lazy" src="/assets/img/choose/arrow-shape-1.png" alt="shape-img" />
                        </div>
                    )}
                    {!isMobile && (
                        <div className="line-shape ">
                            <img loading="lazy" src="/assets/img/choose/line-shape.png" alt="shape-img" />
                        </div>
                    )}
                    <div className="container mx-auto sm:px-4">
                        <div className="choose-us-wrapper">
                            <div className="flex flex-wrap ">
                                {!isMobile && (
                                    <div className="lg:w-1/2 pr-4 pl-4">
                                        <div className="choose-us-image wow fadeInUp" data-wow-delay=".4s">
                                            <img loading="lazy" src="/assets/img/choose/01.png" alt="img" />
                                        </div>
                                    </div>
                                )}
                                <div className="xl:w-1/2 pr-4 pl-4 mt-4 lg:mt-0">
                                    <div className="choose-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp text-center text-xl-start block">WHY CHOOSE US</span>
                                            <h2 className="wow fadeInUp text-center text-xl-start" data-wow-delay=".3s">
                                                We Prominent Truly Trusted <br />
                                                IT Business Solutions
                                            </h2>
                                        </div>
                                        <p className="mt-3 md:mt-0 wow fadeInUp" data-wow-delay=".5s">
                                            AIZ Infotechs Is One Of The Leading PHP Development Company India That Provides Myriad
                                            PHP Development Services, From Simple PHP Web Development To Complex PHP Database
                                            Integration. We Have A Dedicated PHP Development Team That Continuously Sharpens Its PHP
                                            Development Skills And Learns New Technologies To Help Organisations Take Optimum
                                            Benefit Of Customised PHP Solutions Specially Curated For Their Businesses.

                                            Our Adept PHP Development Team Doesn’t Settle For Anything Less Than A Robust PHP
                                            Solution That Strengthens Your Organisation And Helps In Achieving Enterprise-Level
                                            Goals.

                                            There Are Many Instances Where Clients Feel Abandoned By The PHP Development Company
                                            India Partner After The Final Development. They Don’t Take Any Guarantee Or Provide
                                            Maintenance-Related Services, Whereas Our Company’s Policy Is Reciprocal To It, We Offer
                                            On-Demand Support To Our Clients, Irrespective Of Their Project’s Size, Whether Small Or
                                            Big.

                                            You Will Find Our PHP Solution Department Friendly, Supportive, And Available For You
                                            Whenever You Are In Need.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-section fix section-padding bg-cover" id="service">
                    <div className="container mx-auto sm:px-4">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">Hiring Models</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Solve IT Problems <br /> With Technology
                                </h2>
                            </div>
                            {!isMobile && (
                                <div className="array-button">
                                    <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                    <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                </div>
                            )}
                        </div>
                        <div className="service-wrapper mb-[100px] max-md:mb-[50px]">
                            <div className="swiper service-slider">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Database Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>

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
                                                        IT Consultancy
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-box-items">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>
                                                    <Link href="/service-details">
                                                        Cyber Security
                                                    </Link>
                                                </h4>
                                                <p>
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="service-box-items">
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
                                                    Mauris ultrices ligula eget volutpat aliquet nullam
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="cta-banner-2 pt-5">
                        <div className="container mx-auto sm:px-4">
                            <div className="cta-wrapper-2">
                                <div className="author-icon">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={'17px'} width={"17px"}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                    </div>
                                    <div className="content">
                                        <span>Call Us Now</span>
                                        <h4>
                                            <Link href="tel:+2085550112">+208-555-0112</Link>
                                        </h4>
                                    </div>
                                </div>
                                <h3>
                                    Stay Connected With <br /> Cutting Edge IT
                                </h3>
                                <Link href="contact.html" className="theme-btn bg-white">
                                    get A Quote
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {!isMobile && (
                    <section className="work-process-section fix section-padding pt-0">
                        <div className="container mx-auto sm:px-4">
                            <div className="section-title text-center">
                                <span>How IT work</span>
                                <h2>Standard Work Process</h2>
                            </div>
                            <div className="process-work-wrapper">
                                <div className="line-shape">
                                    <img loading="lazy" src="/assets/img/process/linepng.png" alt="image" />
                                </div>
                                <div className="flex flex-wrap ">
                                    <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                        <div className="work-process-items text-center">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/process/01.svg" alt="img" />
                                                <h3 className="number">
                                                    1
                                                </h3>
                                            </div>
                                            <div className="content">
                                                <h4>Choose A Service</h4>
                                                <p>
                                                    In a free hour, when our power of choice is untrammeled and
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                        <div className="work-process-items text-center">
                                            <div className="content style-2">
                                                <h4>Define Requirements</h4>
                                                <p>
                                                    In a free hour, when our power of choice is untrammeled and
                                                </p>
                                            </div>
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/process/02.svg" alt="img" />
                                                <h5 className="number">
                                                    2
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                        <div className="work-process-items text-center">
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/process/03.svg" alt="img" />
                                                <h3 className="number">
                                                    3
                                                </h3>
                                            </div>
                                            <div className="content">
                                                <h4>Request A Meeting</h4>
                                                <p>
                                                    In a free hour, when our power of choice is untrammeled and
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                                        <div className="work-process-items text-center">
                                            <div className="content style-2">
                                                <h4>Finial Solutio3</h4>
                                                <p>
                                                    In a free hour, when our power of choice is untrammeled and
                                                </p>
                                            </div>
                                            <div className="icon">
                                                <img loading="lazy" src="/assets/img/process/04.svg" alt="img" />
                                                <h5 className="number">
                                                    4
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <section className="team-section-3 fix section-padding section-bg">
                    {!isMobile && (
                        <div className="line-shape">
                            <img loading="lazy" src="/assets/img/team/line-shape.png" alt="shape-img" />
                        </div>
                    )}
                    <div className="mask-shape">
                        <img loading="lazy" src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container mx-auto sm:px-4">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">What We Do</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We Solve IT Problems <br /> With Technology
                                </h2>
                            </div>
                            {!isMobile && (
                                <Link href="service.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    See all Services
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                </Link>
                            )}
                        </div>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </section>

                <section className="technology-section">
                    <h2>Technology Stack</h2>
                    <Tabs />
                </section>

                <section className="project-section fix section-padding pt-0 mt-4">
                    <div className="container mx-auto sm:px-4">
                        <div className="section-title text-center">
                            <span className="wow fadeInUp"> Our Projects</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Latest showcase and solutions <br /> to our customers
                            </h2>
                        </div>
                    </div>

                    <div className="swiper project-slider pt-5">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/01.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">Platform Integration</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/02.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Security</p>
                                            <h4>
                                                <Link href="/project-details">Network Security</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/03.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Solution</p>
                                            <h4>
                                                <Link href="/project-details">Web Development</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/04.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">IT Management</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/03.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Solution</p>
                                            <h4>
                                                <Link href="/project-details">Web Development</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-items">
                                    <div className="project-image">
                                        <img loading="lazy" src="/assets/img/project/04.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <Link href="/project-details">IT Management</Link>
                                            </h4>
                                            <Link href="/project-details" className="icon">
                                                <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </section>

                <section className="testimonial-section-4 fix section-padding bg-cover">
                    <div className="container mx-auto sm:px-4">
                        <div className="testimonial-wrapper-2">
                            <div className="flex flex-wrap ">
                                <div className="lg:w-2/5 pr-4 pl-4 wow fadeInUp lg:block hidden" data-wow-delay=".4s">
                                    <div className="tesimonial-image">
                                        <img loading="lazy" src="/assets/img/testimonial/04.jpg" alt="img" />
                                    </div>
                                </div>
                                <div className="lg:w-1/2 pr-4 pl-4 mt-4 lg:mt-0">
                                    <div className="tesimonial-area">
                                        <div className="section-title">
                                            <span className="wow fadeInUp" data-wow-delay=".3s">Testimonials</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                                We Prominent Truly Trusted <br />
                                                IT Business Solutions
                                            </h2>
                                        </div>
                                        <div className="swiper testimonial-slider-3">
                                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tesimonial-card-items">
                                                        <div className="icon">
                                                            <img loading="lazy" src="/assets/img/testimonial/quote.svg" alt="img" />
                                                        </div>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <p>
                                                            when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                        </p>
                                                        <div className="client-info-items">
                                                            <div className="thumb">
                                                                <img loading="lazy" src="/assets/img/testimonial/05.jpg" alt="img" />
                                                            </div>
                                                            <div className="content">
                                                                <h4>Shikhon Haque</h4>
                                                                <p>Web Designer</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tesimonial-card-items">
                                                        <div className="icon">
                                                            <img loading="lazy" src="/assets/img/testimonial/quote.svg" alt="img" />
                                                        </div>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <p>
                                                            when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                        </p>
                                                        <div className="client-info-items">
                                                            <div className="thumb">
                                                                <img loading="lazy" src="/assets/img/testimonial/06.jpg" alt="img" />
                                                            </div>
                                                            <div className="content">
                                                                <h4>Esther Howard</h4>
                                                                <p>President of Sales</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tesimonial-card-items">
                                                        <div className="icon">
                                                            <img loading="lazy" src="/assets/img/testimonial/quote.svg" alt="img" />
                                                        </div>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <p>
                                                            when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                        </p>
                                                        <div className="client-info-items">
                                                            <div className="thumb">
                                                                <img loading="lazy" src="/assets/img/testimonial/07.jpg" alt="img" />
                                                            </div>
                                                            <div className="content">
                                                                <h4>Brooklyn Simmons</h4>
                                                                <p>Nursing</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tesimonial-card-items">
                                                        <div className="icon">
                                                            <img loading="lazy" src="/assets/img/testimonial/quote.svg" alt="img" />
                                                        </div>
                                                        <div className="star">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </div>
                                                        <p>
                                                            when an unknown printer took away galley of type aawer awtnd there are scrambled it to make a type many  but also the leap into
                                                        </p>
                                                        <div className="client-info-items">
                                                            <div className="thumb">
                                                                <img loading="lazy" src="/assets/img/testimonial/07.jpg" alt="img" />
                                                            </div>
                                                            <div className="content">
                                                                <h4>Brooklyn Simmons</h4>
                                                                <p>Nursing</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="news-section-3 fix section-padding" id="blog">
                    <div className="container mx-auto sm:px-4">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">Latest Blog</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Checkout Our Latest <br /> News &amp; Articles
                                </h2>
                            </div>
                            {!isMobile && (
                                <div className="array-button">
                                    <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                    <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                </div>
                            )}
                        </div>
                        <div className="swiper news-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="news-card-items style-2">
                                        <div className="news-image">
                                            <img loading="lazy" src="/assets/img/news/04.jpg" alt="news-img" />
                                            <div className="post-date">
                                                <h3>
                                                    17 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <h3>
                                                <Link href="/news-details" aria-label="click to view about Simplify Streamline Succeed  IT Solution">Simplify Streamline Succeed  IT Solutions</Link>
                                            </h3>
                                            <Link href="/news-details" aria-label="Read more about Simplify Streamline Succeed  IT Solution" className="theme-btn-2 mt-3">
                                                read More <span> Simplify Streamline Succeed  IT Solution </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="news-card-items style-2">
                                        <div className="news-image">
                                            <img loading="lazy" src="/assets/img/news/07.jpg" alt="news-img" />
                                            <div className="post-date">
                                                <h3>
                                                    20 <br />
                                                    <span>May</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <h3>
                                                <Link href="/news-details" aria-label="click to view about Unlocking Potential Through Technology">Unlocking Potential Through Technology</Link>
                                            </h3>
                                            <Link href="/news-details" aria-label="Read more about Unlocking Potential Through Technology" className="theme-btn-2 mt-3">
                                                read More <span> Unlocking Potential Through Technology </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="news-card-items style-2">
                                        <div className="news-image">
                                            <img loading="lazy" src="/assets/img/news/08.jpg" alt="news-img" />
                                            <div className="post-date">
                                                <h3>
                                                    10 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <h3>
                                                <Link href="/news-details" aria-label="click to view about Supervisor Disapproved of Latest Work">Supervisor Disapproved of Latest Work.</Link>
                                            </h3>
                                            <Link href="/news-details" aria-label="Read more about Supervisor Disapproved of Latest Work" className="theme-btn-2 mt-3">
                                                read More <span> Supervisor Disapproved of Latest Work </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="news-card-items style-2">
                                        <div className="news-image">
                                            <img loading="lazy" src="/assets/img/news/08.jpg" alt="news-img" />
                                            <div className="post-date">
                                                <h3>
                                                    10 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <h3>
                                                <Link href="/news-details" aria-label="click to view about Supervisor Disapproved of Latest Work">Supervisor Disapproved of Latest Work.</Link>
                                            </h3>
                                            <Link href="/news-details" aria-label="Read more about Supervisor Disapproved of Latest Work" className="theme-btn-2 mt-3">
                                                read More <span> Supervisor Disapproved of Latest Work </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        {!isMobile && (
                            <div className="block lg:hidden mt-4">
                                <div className="array-button justify-center">
                                    <button className="array-prev"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"}><path d="M18.2 273l-17-17 17-17L171.8 85.4l17-17 33.9 33.9-17 17L93.1 232 424 232l24 0 0 48-24 0L93.1 280 205.8 392.6l17 17-33.9 33.9-17-17L18.2 273z" /></svg></button>
                                    <button className="array-next"><span>.</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg></button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="faq-section fix section-padding">
                    <div className="right-shape">
                        <img loading="lazy" src="/assets/img/faq/right-shape.png" alt="shape-img" />
                    </div>
                    <div className="faq-shape-box">
                        <div className="faq-shape">
                            <img loading="lazy" src="/assets/img/faq/shape.png" alt="shape-img" />
                        </div>
                    </div>
                    <div className="container mx-auto sm:px-4">
                        <div className="faq-wrapper">
                            <div className="flex flex-wrap  g-4">
                                {!isMobile && (
                                    <div className="lg:w-1/2 pr-4 pl-4 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="faq-image">
                                            <img loading="lazy" src="/assets/img/faq/faq.png" alt="faq-img" />
                                        </div>
                                    </div>
                                )}
                                <div className="lg:w-1/2 pr-4 pl-4">
                                    <div className="faq-content">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">See Our Faqs</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                Keep Your Business Safe &amp; <br /> Ensure High Availability
                                            </h2>
                                        </div>
                                        <div className="faq-accordion mt-4 md:mt-0">
                                            <div className="accordion" id="accordion">
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                                                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                                                        <button className={activeItem == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                            How long should a business plan be?
                                                        </button>
                                                    </h5>
                                                    <div id="faq1" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                                                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                                                        <button className={activeItem == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                            What is included in your services?
                                                        </button>
                                                    </h5>
                                                    <div id="faq2" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                                                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                                                        <button className={activeItem == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                            What type of company is measured?
                                                        </button>
                                                    </h5>
                                                    <div id="faq3" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {!isMobile && (
                    <section className="contact-us-section">
                        <div className="container mx-auto sm:px-4">
                            <div className="form-div-main flex flex-wrap  m-0">
                                {!isMobile && (
                                    <div className="form-div-icon lg:w-2/5 pr-4 pl-4 xl:w-1/3 pr-4 pl-4">
                                        <ul>
                                            <li><Link href="instagram.com/aizinfotechs"><img loading="lazy" src="/assets/img/instagram-icon.png" alt="image" /></Link>
                                                <Link href="instagram.com/aizinfotechs">instagram.com/aizinfotechs</Link>
                                            </li>
                                            <li><Link href="https://www.facebook.com/aizinfotech"><img loading="lazy" src="/assets/img/Facebook-icon.png" alt="image" /></Link>
                                                <Link href="https://www.facebook.com/aizinfotech">https://www.facebook.com/aizinfotech</Link>
                                            </li>
                                            <li><Link href="https://x.com/aizinfotechs"><img loading="lazy" src="/assets/img/Twitter-icon.png" alt="image" /></Link>
                                                <Link href="https://x.com/aizinfotechs">https://x.com/aizinfotechs</Link>
                                            </li>
                                            <li><Link href="https://api.whatsapp.com/send?phone=917874278859"><img loading="lazy" src="/assets/img/WhatsApp-icon.png" alt="image" /></Link>
                                                <Link href="https://api.whatsapp.com/send?phone=917874278859">WhatsApp</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {!isMobile && (
                                    <div className="vr">
                                    </div>
                                )}
                                <div className="Connect-div relative flex-grow max-w-full flex-1 px-4">
                                    <h3>Let’s <span>Connect</span> With Us</h3>
                                    <form action="#">
                                        <input type="text" placeholder="Full Name" />
                                        <input type="email" placeholder="Email" />
                                        <input type="text" placeholder="Services" />
                                        <textarea rows="1" cols="50" placeholder="Description"></textarea>
                                    </form>
                                    <Link href="">Submit</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Layout>
        </>
    )
}