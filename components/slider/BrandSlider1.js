
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    // slidesPerView: 5,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function BrandSlider1() {
    return (
        <>
            <div className="swiper brand-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img loading="lazy" src="/assets/img/brand.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
