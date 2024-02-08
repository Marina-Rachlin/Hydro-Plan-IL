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


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/dmdv8s9mz/video/upload/v1706786968/hydro-plan/tfdg7wtwl7nh5htzn7nb.mp4";


  return (
    <>
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
                   <SidebarNav current={'pikuah'} />
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
                        <h2> מסמכי ניהול נגר ליוזמות נדל׳׳ן בשלב ההיתר</h2>
                        <p>
                          {" "}
                          ההתפתחות המהירה של ענף הבנייה בישראל, בעיקר באזור גוש
                          דן, השפלה ומישור החוף, הביאה שינוי משמעותי בתכסית
                          הקרקע. שטחים של קרקע טבעית או אדמה חקלאית הוחלפו
                          במגרשי בנייה וכבישים. איטום פני הקרקע מונע ממי גשמים
                          לחדור ולחדש את מאגרי המים התת-קרקעיים, האקוויפרים.
                        </p>
                        {/* <h3 style={{color: '#153b5b'}}>
                          הירידה בהעשרת מי התהום באופן טבעי בישראל מעוררת מספר
                          היבטים מדאיגים:
                        </h3>
                        <ul className="list-style-one clearfix">
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
