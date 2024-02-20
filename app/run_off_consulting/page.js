"use client";
import React, { useState } from "react";
import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import SidebarNav from "@/components/elements/SidebarNav";
import SidebarContact from "@/components/elements/SidebarContact";
import "react-modal-video/css/modal-video.css";
import Head from "next/head";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706785714/hydro-plan/zrm7v09vivgu2chgpgzw.mp4";

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
        <meta name="description" content="יעוץ הידרולוגי לתב''ע, נספח ניקוז, ניהול נגר להיתר, ניקוד בנייה ירוקה, פיקוח עליון לטופס 4" />
        <meta name="keywords"content='hydro-plan, נספח ניקוז ,פרשה טכנית ,ניהול נגר ,בנייה ירוקה  ,תמ׳׳א 62 ,תמ"א 1, פיקוח עליון, טופס 4, דוח הידרולוג, הצהרת הידרולוג, היתר, תב"ע, מנהל התכנון, רשות המים'/>
      </Head>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="מסמך ניהול נגר בשלב ההיתר"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <SidebarNav current={"run_off_consulting"} />
                    <SidebarContact />
                  </div>
                </div>

                <div
                  className="col-lg-8 col-md-12 col-sm-12 content-side"
                  style={{ direction: "rtl" }}
                >
                  <div className="service-details-content">
                    <div className="content-one mb_30">
                      <div className="video-box">
                        <video
                          className="image-box"
                          poster="https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706785714/hydro-plan/zrm7v09vivgu2chgpgzw.jpg"
                          src="https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706785714/hydro-plan/zrm7v09vivgu2chgpgzw.mp4"
                        />
                        <div className="video-inner">
                          <div className="video-btn">
                            <a
                              onClick={() => setIsOpen(true)}
                              className="overlay-link lightbox-image video-fancybox ripple"
                            >
                              <span className="icon-10" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <ModalVideo
                        channel="custom"
                        autoplay
                        isOpen={isOpen}
                        url={videoUrl}
                        onClose={() => setIsOpen(false)}
                      />
                      <div className="text">
                        <h2> מסמך ניהול נגר בשלב ההיתר</h2>
                        <p>
                          {" "}
                          ההתפתחות המהירה של ענף הבנייה בישראל, בעיקר באזור גוש
                          דן, השפלה ומישור החוף, הביאה שינוי משמעותי בתכסית
                          הקרקע. שטחים של קרקע טבעית או אדמה חקלאית הוחלפו
                          במגרשי בנייה וכבישים. איטום פני הקרקע מונע ממי גשמים
                          לחדור ולחדש את מאגרי המים התת-קרקעיים, האקוויפרים.
                        </p>
                        <strong style={{ color: "#153b5b" }}>
                          הירידה בהעשרת מי התהום באופן טבעי בישראל מעוררת מספר
                          היבטים מדאיגים:
                        </strong>
                        {/* <ul className="list-style-one clearfix">
                          <ul>
                            <li>
                              <i
                                class="fas fa-exclamation-triangle"
                                style={{ color: "#15b0fe" }}
                              ></i>{" "}
                              שאיבת המים ממאגרי מי התהום הצטמצמה בעשורים
                              האחרונים. משק המים הופך תלוי יותר ויותר במפעלי
                              התפלת מי הים, להם מחירים גבוהים ביהבטים כלכליים,
                              סביבתיים ובריאותיים.
                            </li>
                            <li>
                              <i
                                class="fas fa-exclamation-triangle"
                                style={{ color: "#15b0fe" }}
                              ></i>
                              תהליך איטום הקרקע מגביר.
                            </li>
                            <li>
                              <i
                                class="fas fa-exclamation-triangle"
                                style={{ color: "#15b0fe" }}
                              ></i>{" "}
                              הידלדלות מאגרי מי התהום גורמים לירידה באיכות מי
                              התהום כתוצאה מעלייה בריכוז המזהמים והמלחים
                              באקוויפרים.
                            </li>
                          </ul>
                        </ul> */}

                        <ul
                          className="list-style-one"
                          style={{ marginTop: "20px" }}
                        >
                          <li>
                            שאיבת המים ממאגרי מי התהום הצטמצמה בעשורים האחרונים.
                            משק המים הופך תלוי יותר ויותר במפעלי התפלת מי הים,
                            להם מחירים גבוהים ביהבטים כלכליים, סביבתיים
                            ובריאותיים.
                          </li>
                          <li>תהליך איטום הקרקע מגביר.</li>
                          <li>
                            הידלדלות מאגרי מי התהום גורמים לירידה באיכות מי
                            התהום כתוצאה מעלייה בריכוז המזהמים והמלחים
                            באקוויפרים.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="content-three mb_85">
                      <div className="text mb_100">
                        <p>
                          בנוסף עלייה משמעותית בנפחי הנגר העיליים, היינו כמות
                          הגשם הנותרת על גבי המשפחים באזורים האורבניים מציבה
                          אתגרים עבור מערכות הניקוז העירוניות, שתוכננו לפני
                          למעלה מ- 60 שנה. ההצפות הרבות והקשות בערי השפלה והחוף
                          בשנים האחרונות הן תוצאה ישירה של איטום הקרקעות מצד
                          מפעלי הבנייה ושל אירועי גשם קיצוניים המאפיינים את
                          שינויי האקלים באזורינו.
                        </p>
                        <p>
                          הידלדלות המאגרים התת-קרקעיים והעלייה בתדירות אסונות
                          ההצפות גרמו ליישום תקני טיפול מחמירים במי גשמים בכל
                          פרויקטי הבנייה החדשים. תקנים אלה חלים על סוגים שונים
                          של פרויקטים, לרבות פיתוחים למגורים, תעשייה, מסחר
                          ופיתוחים בקנה מידה גדול כמו גורדי שחקים, המשתרעים על
                          פני שטחים נרחבים.
                        </p>
                        <p>
                          כיום, ברוב הרשויות בישראל, רכישת היתר בנייה מחייבת
                          הגשת תוכנית ניהול מי גשמים יסודית ומומחית. תכנון
                          הידרולוגי כרוך בפיתוח פתרון מיטבי המתחשב בגורמים כמו
                          כמויות הגשם הצפויות ותנאי השטח. פתרון זה עשוי לכלול
                          אלמנטים כמו בורות חדירה, אזורי אצירה, מאגרי ויסות
                          ואחזקה, תיבות חלחול וגגות ירוקים/כחולים. בחירת מיקום
                          אופטימלי בהתבסס על תנאי שטח ותיאום מאמצים הנדסיים בין
                          כל היועצים ומתכנני הפרויקט חיוניים לביצוע מוצלח.
                        </p>
                        <p>
                          תכנית זו עוברת בדיקה קפדנית של המהנדסים המועסקים ברשות
                          הרלוונטית. רק לאחר בדיקתם ואישורם ניתן היתר הבנייה.
                        </p>
                        <p>
                          Hydro-Plan הינו משרד ליעוץ הידרולוגי ליזמות
                          נדל&quot;ן, המתמחה בטיפול בדרישות ברשויות השונות
                          בישראל. המשרד סיפק חוות דעת הידרולוגיות לעשרות
                          פרויקטים בקנה מידה משתנה ובתפרוסת ארצית. המשרד נמצא
                          בקשר ישיר עם רשויות מקומיות רבות ואף נתן יעוץ רגולטורי
                          עבור רשויות בזמן הטמעת ההנחיות לניהול הנגר.
                        </p>
                        <p>
                          הייעוץ ניתן תוך הקפדה על לוחות הזמנים ובחירת פתרון
                          מתוך ארסנל עשיר של אמצעים לניהול הנגר. המטרה היא ליצור
                          פתרונות עבור היזם ולאפשר את אישור בקשת ההיתר, גם במקרה
                          של אילוצים רבים הנכפים מתוך האתגרים הנפוצים בענף
                          הבנייה.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
