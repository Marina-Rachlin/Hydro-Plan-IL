"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import ModalVideo from "react-modal-video";
import SidebarNav from "@/components/elements/SidebarNav";
import SidebarContact from "@/components/elements/SidebarContact";
import Head from "next/head";
import Script from "next/script";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706786968/hydro-plan/tfdg7wtwl7nh5htzn7nb.mp4";


  return (
    <>
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
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="דו׳׳ח פיקוח עליון"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                   <SidebarNav current={'tofes_4'} />
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
                          poster="https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706786968/hydro-plan/tfdg7wtwl7nh5htzn7nb.jpg"
                          src="https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706786968/hydro-plan/tfdg7wtwl7nh5htzn7nb.mp4"
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
                        <h2> טופס 4 ופיקוח עליון</h2>
                        <p>
                          {" "}
                          בתום הקמת המבנים ופיתוח השטח, על בעל היתר הבנייה להגיש בקשה לרשות המקומית לאשור טופס 4, הוא האישור הסופי בתהליך הרישוי של יזמות הבנייה. 
                        </p>
                        <p>כחלק מקבלת טופס 4 מתקיים הליך בדיקת המבנים, התשתיות והמערכות ההנדסיות שבו, זאת כדי לוודא שהביצוע תואם לתכנון שהוגש בשלב ההיתר ולוודא שהמבנה כשיר, ראוי ובטוח לאכלוס.</p>
                        <p>כחלק מאישור תאימות הביצוע לתכנון על היזם לזמן ביקור באתר וביצוע סיור פיקוח עליון בעת ביצוע העבודות באתר. בטרם ביצוע הסיור על היזם לספק אסמכתאות לגבי החומרים והאביזרים הנדרשים לביצוע כפי שתוארו במסמכי התכנון, וכן שיש בידיו את הציוד המתאים לביצוע התכנון בצורה מיטבית.</p>
                        <p>במידה ולא התבצע פיקוח עליון במהלך העבודות לא ניתן לספק אישור הידרולוג לקבלת טופס 4.</p>
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
