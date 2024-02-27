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

export default function Home() {
  return (
    <>
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
