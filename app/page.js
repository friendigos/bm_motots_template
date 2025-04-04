import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
// import Achievement4 from "@/components/sections/Achievement4"
import Brand1 from "@/components/sections/Brand1"
import Cta2 from "@/components/sections/Cta2"
// import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
// import Marque1 from "@/components/sections/Marque1"
// import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
// import Pricing1 from "@/components/sections/Pricing1"
// import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
// import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/main.css"
import { Chokokutai } from "next/font/google"
import ChooseUs1 from "@/components/sections/ChooseUs1"
import Getinto from "@/components/sections/Getinto"
import Works from "@/app/bm-works/Works"
import FrequentlyAskedQ from "./faq/FrequentlyAskedQ"
import WhyChooseReValue from "./why-choose/WhyChooseRevalue"
import Blank from "@/components/elements/Blank"
import VehicleScrappingRisks from "@/components/sections/risk"
import RiskCard from "@/components/sections/risk"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                {/* <Marque1 /> */}
                <About2 />
                <Works/>
                <WhyChooseReValue/>
                <Brand1 />
                {/* <Service1 /> */}
                {/* <Achievement4 /> */}
                <ChooseUs1/>
                <RiskCard/> 
                {/* <Project1 /> */}

                {/* <Marque2 /> */}
                {/* <Testimonial1 /> */}
                {/* <Team1 /> */}
                {/* <Pricing1 /> */}
                {/* <Faq1 /> */}
                <Getinto/>
                {/* <News1 /> */}
                {/* <Blank/>
                <FrequentlyAskedQ/> */}
                <Cta2 />
                
            </Layout>
        </>
    )
}