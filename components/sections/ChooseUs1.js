import Link from "next/link";


export default function ChooseUs1() {
    return (
        <>
            <section className="choose-us-section">
                <div className="container">
                    <div className="hero-button">
                            <Link href="https://vscrap.parivahan.gov.in/vehiclescrap/vahan/welcome.xhtml" className="theme-btn wow fadeInUp" data-wow-delay=".8s">
                                Visit the Govt website for scrapping vehicles
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" /></svg>
                            </Link>
                        </div>
                    </div>
            </section>
        </>
    )
}
