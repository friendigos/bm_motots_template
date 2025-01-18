
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import "/public/assets/css/tailwind.css"
import Offcanvas from "./Offcanvas-new"
import Footer5 from "./footer/Footer5"
import Header1 from "./header/Header5"

export default function Layout({ headerStyle, footerStyle, onePageNav, children }) {
    const [scroll, setScroll] = useState(0)

    const [isOffCanvas, setOffCanvas] = useState(false)
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

            {!headerStyle && <Header2 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} isSearch={isSearch} handleSearch={handleSearch} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} onePageNav={onePageNav} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} /> : null}

            {children}

            {!footerStyle && < Footer1 />}
            {/* {footerStyle == 1 ? < Footer5 /> : null} */}

            <BackToTop />
        </>
    )
}
