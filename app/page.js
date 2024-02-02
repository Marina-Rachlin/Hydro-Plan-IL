import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Features from "@/components/sections/home1/Features"
import News from "@/components/sections/home1/News"
import Expertise from "@/components/sections/home1/Expertise"
import Cta from "@/components/sections/home1/Cta"
import Clients from "@/components/sections/home1/Clients"
import Banner2 from "@/components/sections/home1/Banner2"


export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner2 />
                <Features />
                <About />
                <Cta />
                <News />
                <Clients />
                <Expertise />
            </Layout>
        </>
    )
}