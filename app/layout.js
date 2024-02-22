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

export const metadata = {
  title: 'Hydro-Plan IL - יועץ הידרולוגי, ייעוץ והכנת נספח הידרולוגי וליווי מלא להיתר וטופס 4, עופרי אורגד',
  description: 'Hydro-Plan IL - יועץ הידרולוגי, ייעוץ והכנת נספח הידרולוגי וליווי מלא להיתר וטופס 4, עופרי אורגד',
  keywords: 'hydro-plan, עופרי אורגד, נספח ניקוז, פרשה טכנית עופרי, ניהול נגר, בנייה ירוקה, תמ׳׳א 62, תמ"א 1, פיקוח עליון, טופס 4, דוח הידרולוג, הצהרת הידרולוג, היתר, תב"ע, מנהל התכנון, רשות המים',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jost.variable}`}>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
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
      <body>{children}</body>
    </html>
  );
}
