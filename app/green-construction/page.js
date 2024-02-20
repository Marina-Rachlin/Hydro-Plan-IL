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
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
        breadcrumbTitle="חוות דעת הידרולוגית לתקן בנייה ירוקה"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <SidebarNav current={"green-construction"} />
                    <SidebarContact />
                  </div>
                </div>
                <div
                  className="col-lg-8 col-md-12 col-sm-12 content-side"
                  style={{ direction: "rtl" }}
                >
                  <div className="service-details-content">
                    <div className="content-one mb_90">
                      <figure className="image-box">
                        <img
                          src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706786636/hydro-plan/g8mgkxp9ntyyxtjz5vxl.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="text">
                        <h2> חוות דעת הידרולוגית לתקן בנייה ירוקה</h2>
                        <p>
                          {" "}
                          תקן הבניה הירוקה, מטרתו הפחתת השפעת המבנים על סביבתם מבחינת צריכת משאבי טבע ואנרגיה, תוך שימוש בטכנולוגיה ותכנון המכיר בתנאי האקלים והסביבה. הבנייה הירוקה שמה לעצמה למטרה לשמור על רווחתו של האזרח תוך שימוש במשאבי טבע בצורה חכמה ורגישה. 
                        </p>
                        <p>
                        התקן הוא כלי רב סעיפי וכולל התייחסות לניהול מי הנגר, הם מי הגשם היורדים בתחום המגרש. ניהול מי הנגר מיושם באמצעות החדרה, חלחול, ויסות והשהייה של הנגר. היעוץ הידרולוגי מספק חישוב של כמויות הגשם היורד במגרש באירוע נתון, לפי הסתברויות וספיקות תכן. בהתאם לאותן כמויות יומלץ על שימוש באמצעי ניהול נגר קיימים שיעמדו בדרישות התקן, תוך חשיבה סביבתית הוליסטית.
                        </p>
                        <p>עמידה בתנאי התקן מקנה רמות הסמכה לבניה ירוקה. רמות ההסמכה באות לידי ביטוי בנקודות ובתמריצים כלכליים. בפרק ההידרולוגי בתקן הבנייה הירוקה ניתן לקבל עד 3 נקודות, מאחר והביצוע בפועל של אמצעי ניהול הנגר אינו יקר, הרי שיש כאן ניקוד רב ו"זול" ביחס לסעיפים אחרים.</p>
                        <p>תקן הבנייה הירוקה הוא המנגנון היחיד כיום בתעשייה המפקח באופן אמין ומקצועי על עצם היישום המדויק בפועל של מאמצי התכנון. </p>
                      </div>
                    </div>
                    {/* <div className="content-two mb_90">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                    <div className="text-box">
                                    <h3>Overview</h3>
                                    <p>
                                        Dolor felis sapien sit egestas venenatis faucibus non sed
                                        faucibus mauris ultricies. Cras varius proin amet vehicula magna.
                                        Ultricies gravida vel volutpat sed platea sed fames at egestas
                                        amet feugiat laoreet sed potenti integer.
                                    </p>
                                    <ul className="list-style-one clearfix">
                                        <li>Holiday Trash & Recycling</li>
                                        <li>Things To Do In Govarnex</li>
                                        <li>Rent a Picnic Shelter</li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                    <figure className="image-box">
                                    <img src="assets/images/service/service-9.jpg" alt="" />
                                    </figure>
                                </div>
                                </div>
                            </div>
                            <div className="content-three mb_85">
                                <div className="text mb_100">
                                <h3>Our Solutions</h3>
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                                </div>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-8"></i>
                                    </div>
                                    <h3>Tax Strategy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                    <div className="single-item">
                                    <div className="icon-box">
                                        <i className="icon-13"></i>
                                    </div>
                                    <h3>Investment Policy</h3>
                                    <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                                    </div>
                                </div>
                                </div>
                                <div className="text mt_50">
                                <p>
                                    Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                                    venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                                    amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                                    at egestas amet feugiat laoreet sed potenti integer.
                                </p>
                                </div>
                            </div> */}
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
