import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Features from "@/components/sections/home1/Features";
import News from "@/components/sections/home1/News";
import Expertise from "@/components/sections/home1/Expertise";
import Cta from "@/components/sections/home1/Cta";
import Clients from "@/components/sections/home1/Clients";
import Banner2 from "@/components/sections/home1/Banner2";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M955VS30JE"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-M955VS30JE');
        `}
        </Script>
      </Head>
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
  );
}
