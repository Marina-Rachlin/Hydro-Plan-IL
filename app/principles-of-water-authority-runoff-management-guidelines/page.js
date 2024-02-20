"use client";
import React, { useState } from "react";
// import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
// import AuditSlider1 from "@/components/slider/AuditSlider1";
// import ServiceSlider1 from "@/components/slider/ServiceSlider1";
// import Link from "next/link";
// import ModalVideo from "react-modal-video";
// import SidebarNav from "@/components/elements/SidebarNav";
import SidebarContact from "@/components/elements/SidebarContact";
import SidebarArticles from "@/components/elements/SidebarArticles";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

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
        breadcrumbTitle="עקרונות הנחיות ניהול נגר רשות המים 2021"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <SidebarArticles current={"principles-of-water-authority-runoff-management-guidelines"} />
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
                          src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706794956/hydro-plan/m3zrfaalvkid1baas6pj.jpg"
                          alt=""
                          style={{ maxHeight: "424px" }}
                        />
                      </figure>
                      <div className="text">
                        <h2> עקרונות הנחיות ניהול נגר רשות המים 2021</h2>
                        {/* <p>
                          {" "}
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p> */}
                      </div>
                    </div>
                    <div className="content-four">
                      <h3>הורד מאמר</h3>
                      <ul className="download-list clearfix">
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>מסמך מדיניות מנהל התכנון</h5>
                          <span>Pdf</span>
                          <a href="/assets/article2.pdf" download="עקרונות הנחיות ניהול נגר רשות המים 2021.pdf">
                            <button type="button">Download</button>
                          </a>
                        </li>
                      </ul>
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
