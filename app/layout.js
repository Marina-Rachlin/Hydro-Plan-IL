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
  title: 'הידרו-פלאן בנייה משמרת נגר. תכנון הידרולוגי עבור בנייה מודרנית. שינויי האקלים כבר כאן ועוצמת אירועי הגשם מתגברת. על מנת למנוע הצפות ונזקים, הידרו-פלאן מתמחה בבנייה משמרת נגר.',
  description: 'הידרו-פלאן, תכנון הידרולוגי עבור בנייה משמרת נגר. משרדנו מספק חוות דעת הידרולוגיות ליזמות נדל"ן, נספחי ניקוז בשלב התב"ע, מסמכי ניהול נגר בשלב ההיתר, חישוב ניקוד בסעיף הידרולוגי בתקן בניה ירוקה, דוחות פיקוח עליון לטופס 4',
  keywords: [
    'עופרי אורגד',
    'ofri orgad',
    'hydro plan',
    'יעוץ הידרולוגי',
    'הידרולוג',
    'בניה משמרת נגר',
    'יזמות נדל"ן',
    'נספח ניקוז',
    'ניקוז',
    'פרשה טכנית',
    'ניהול נגר',
    'בנייה ירוקה',
    'הצהרת הידרולוג',
    'תמ"א 62',
    'תמ"א 1',
    'תיקון 8',
    'פיקוח עליון',
    'טופס 4',
    'דוח הידרולוג',
    'תב"ע',
    'היתר',
    'מנהל התכנון',
    'רשות המים',
    'ניקוד סעיף 3.4 פרק המים תקן בניה ירוקה',
  ],  
  authors: [{ name: 'Ofri Orgad' }, { name: 'עפרי אורגד' }],
  creator: 'Marina Rachlin',
  publisher: ['Ofri Orgad', 'עפרי אורגד'],

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
