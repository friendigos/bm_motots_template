
import Layout from "@/components/layout/Layout"
// import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"
import Cta2 from "@/components/sections/Cta2"

export default function ProjectCarousel() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="portfolios">
                <div>
                    <section className="project-section section-padding fix">
                        <div className="brand-wrapper">
                            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">Popular Services</h6>
                        </div>
                        <div className="container">
                            <div className="project-wrapper ms-0">
                                <ProjectSlider2 />
                            </div>
                        </div>
                    </section>
                    {/* Brand Section Start */}
                    {/* <div className="brand-section fix section-padding pt-0 mt-5">
                        <div className="container">
                            <div className="brand-wrapper">
                                <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">1k + Brands Trust Us</h6>
                                <BrandSlider1 />
                            </div>
                        </div>
                    </div> */}
                    <Cta2/>
                </div>

            </Layout>
        </>
    )
}