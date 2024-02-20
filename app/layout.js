import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/bootstrap.css";
import "public/assets/css/color.css";
import "public/assets/css/font-awesome-all.css";
import "public/assets/css/flaticon.css";
import "public/assets/css/style.css";
import "public/assets/css/rtl.css";
import "swiper/css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { inter, jost } from "@/lib/font";
import Head from "next/head";
import Script from "next/script";


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>"Hydro-Plan IL"</title>
        <meta name="description" content="Hydro-Consulting provides expert hydrological and environmental consulting services. Our team of skilled professionals specializes in water resource management, hydrological modeling, green infrastructure, and sustainable development. From technical reports and hydraulic studies to regulatory compliance and water conservation strategies, we offer comprehensive solutions for projects ranging from urban planning to agricultural development. Trust Hydro-Consulting for innovative and environmentally conscious approaches to water-related challenges." />
        <meta name="keywords"content='hydro-plan, נספח ניקוז ,פרשה טכנית ,ניהול נגר ,בנייה ירוקה  ,תמ׳׳א 62 ,תמ"א 1, פיקוח עליון, טופס 4, דוח הידרולוג, הצהרת הידרולוג, היתר, תב"ע, מנהל התכנון, רשות המים'/>
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
      <body>{children}</body>
    </html>
  );
}
