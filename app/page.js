import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Features from "@/components/sections/home1/Features";
import News from "@/components/sections/home1/News";
import Expertise from "@/components/sections/home1/Expertise";
import Cta from "@/components/sections/home1/Cta";
import Clients from "@/components/sections/home1/Clients";
import Banner2 from "@/components/sections/home1/Banner2";
import Head from "next/head";

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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>"Hydro-Plan IL"</title>
        <meta
          name="description"
          content="יעוץ הידרולוגי לתב''ע, נספח ניקוז, ניהול נגר להיתר, ניקוד בנייה ירוקה, פיקוח עליון לטופס 4"
        />
        <meta
          name="keywords"
          content='hydro-plan, נספח ניקוז ,פרשה טכנית ,ניהול נגר ,בנייה ירוקה  ,תמ׳׳א 62 ,תמ"א 1, פיקוח עליון, טופס 4, דוח הידרולוג, הצהרת הידרולוג, היתר, תב"ע, מנהל התכנון, רשות המים'
        />
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
