
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"

export default function NewsStandard() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Standard">
                <section className="news-standard fix section-padding">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-12 col-lg-8">
                                <div className="news-standard-wrapper">
                                    <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img loading="lazy" src="/assets/img/news/post-1.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                               2023 <br />
                                                    <span> December </span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">WordPress Development Companies In India: The Complete Guideline</Link>
                                            </h3>
                                            <p>
                                            The Complete Guide To WordPress Development Services In India: Unleashing The Power Of WordPress For Your Business   Are You Looking To Elevate Your Online Presence And Boost Your Business With A Powerful Website? Look No Further Than WordPress Development Services In India. With Its User-Friendly Interface And Extensive Customization Options, WordPress Has Become The […]
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img loading="lazy" src="/assets/img/news/post-2.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                                    19 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">Tackling the Changes of Retail Industry</Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                            </Link>
                                        </div>
                                    </div> */}
                                    {/* <div className="news-standard-items">
                                        <div className="news-thumb">
                                            <img loading="lazy" src="/assets/img/news/post-3.jpg" alt="img" />
                                            <div className="post-date">
                                                <h3>
                                                    28 <br />
                                                    <span>Feb</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="news-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-regular fa-user" />
                                                    By Admin
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-tag" />
                                                    IT Services
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/news-details">What’s the Holding Back the It Solution</Link>
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur..
                                            </p>
                                            <Link href="/news-details" className="theme-btn mt-4">
                                                Read More
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg>
                                            </Link>
                                        </div>
                                    </div> */}
                                    {/* <div className="page-nav-wrap pt-5 text-center">
                                        <ul>
                                            <li><Link className="page-numbers" href="#">01</Link></li>
                                            <li><Link className="page-numbers" href="#">02</Link></li>
                                            <li><Link className="page-numbers" href="#">03</Link></li>
                                            <li><Link className="page-numbers" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={'17px'} width={"17px"} ><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"/></svg></Link></li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar">
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="search-widget">
                                            <form action="#">
                                                <input type="text" placeholder="Search here" />
                                                <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <ul>
                                                <li><Link href="/news-details">Database Security</Link> <span>(08)</span></li>
                                                <li><Link href="/news-details">IT Consultancy</Link> <span>(11)</span></li>
                                                <li className="active"><Link href="/news-details">App Development</Link><span>(12)</span></li>
                                                <li><Link href="/news-details">UI/UX Design</Link> <span>(18)</span></li>
                                                <li><Link href="/news-details">Cyber Security</Link> <span>(07)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Recent Post</h3>
                                        </div>
                                        <div className="recent-post-area">
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img loading="lazy" src="/assets/img/news/pp3.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Keep Your Business Safe &amp; <br />
                                                            Endure High Availability
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img loading="lazy" src="/assets/img/news/pp4.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            Tacking the Changes of <br />
                                                            Retail Industry
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="recent-items">
                                                <div className="recent-thumb">
                                                    <img loading="lazy" src="/assets/img/news/pp5.jpg" alt="img" />
                                                </div>
                                                <div className="recent-content">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-calendar-days" />
                                                            18 Dec, 2024
                                                        </li>
                                                    </ul>
                                                    <h6>
                                                        <Link href="/news-details">
                                                            What’s the Holding Back <br />
                                                            the It Solution
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Tags</h3>
                                        </div>
                                        <div className="news-widget-categories">
                                            <div className="tagcloud">
                                                <Link href="/news-standard">News</Link>
                                                <Link href="/news-details">business</Link>
                                                <Link href="/news-details">marketing</Link>
                                                <Link href="/news-details">solution</Link>
                                                <Link href="/news-details">SMM</Link>
                                                <Link href="/news-details">strategy</Link>
                                                <Link href="/news-details">SEO</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}