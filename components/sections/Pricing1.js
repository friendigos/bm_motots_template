
import Link from 'next/link'

export default function Pricing1() {
    return (
        <>
            <section className="pricing-section section-bg fix section-padding">
                <div className="left-shape">
                    <img loading="lazy" src="/assets/img/pricing-left-shape.png" alt="shape-img" />
                </div>
                <div className="right-shape">
                    <img loading="lazy" src="/assets/img/pricing-right-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="pricing-wrapper">
                        <div className="section-title-area">
                            <div className="section-title">
                                <span className="wow fadeInUp">FLEXIBLE PRICING PLAN</span>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    We’ve Offered the best <br /> pricing for you
                                </h2>
                            </div>
                            <ul className="nav" role="tablist">
                                <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                                    <Link href="/#monthly" data-bs-toggle="tab" className="nav-link active" aria-selected="true" role="tab">
                                        Monthly
                                    </Link>
                                </li>
                                <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                                    <Link href="/#yearly" data-bs-toggle="tab" className="nav-link" aria-selected="false" role="tab" tabIndex={-1}>
                                        Yearly
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="monthly" className="tab-pane fade show active" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Basic Plan</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$149</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="pricing-items active">
                                            <div className="tag">
                                                <h6>Most Popular</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$179</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Premium</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$199</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="yearly" className="tab-pane fade" role="tabpanel">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Basic Plan</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$149</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items active">
                                            <div className="tag">
                                                <h6>Most Popular</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$179</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-items">
                                            <div className="tag">
                                                <h6>Premium</h6>
                                            </div>
                                            <div className="pricing-header">
                                                <h2>$199</h2>
                                                <span>Par month</span>
                                                <p>
                                                    Lnteger sapien nec sapien sollicitudin ultrices Cras tempor id lorem et
                                                </p>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Branding and design Identity
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Web site Marketing Solutions
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    Free 15 GB Linux Hosting
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    24/7 system Monitoring
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-check" />
                                                    unlimited Download Data
                                                </li>
                                            </ul>
                                            <div className="pricing-button">
                                                <p>Up to 10 users + 1.99 per user</p>
                                                <Link href="/contact" className="pricing-btn mt-4">
                                                    choose Plan
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                                </Link>
                                            </div>
                                        </div>
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
