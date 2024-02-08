
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner2() {
    return (
        <>

            <section className="banner-style-two p_relative centred">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: "url(/assets/images/banner1.webp)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>Hydro-Plan IL</h2>
                            <p> ייעוץ הידרולוגי ליזמות נדל׳׳ן</p>
                            <div className="btn-box">
                                <Link href="/#services" className="theme-btn-one" >לגלות יותר פרטים  </Link>
                            </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="image-layer p_absolute" style={{ backgroundImage: "url(/assets/images/banner2.webp)" }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2>Hydro-Plan IL</h2>
                            <p> ייעוץ הידרולוגי ליזמות נדל׳׳ן</p>
                            <div className="btn-box">
                                <Link href="/#services" className="theme-btn-one">לגלות יותר פרטים </Link>
                            </div>
                            </div>  
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-5"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-6"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
