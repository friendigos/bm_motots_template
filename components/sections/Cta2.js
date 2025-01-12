
import React from 'react'
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"
import Link from 'next/link'


const Cta2 = () => {
    return (
        <>
            <div className="cta-banner-2 pt-5">
                <div className="container mx-auto sm:px-4">
                    <div className="cta-wrapper-2">
                        <div className="author-icon">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={'17px'} width={"17px"}><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            </div>
                            <div className="content">
                                <span>Call Us Or Whatsapp</span>
                                <h4>
                                    <Link href="+91 7874278859"> +91 7874278859  </Link>

                                </h4>
                            </div>
                        </div>
                        <h3>
                        PERFECT SOLUTION FOR < br/>YOUR COMPANY.

                        </h3>

                        <Link href="contact.html" className="theme-btn bg-white">
                            Get Free Quote
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta2