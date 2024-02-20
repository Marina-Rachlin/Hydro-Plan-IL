"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import SidebarContact from "@/components/elements/SidebarContact";
import SidebarArticles from "@/components/elements/SidebarArticles";
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
        breadcrumbTitle="עקרונות הנחיות ניהול נגר רשות המים 2021"
      >
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <SidebarArticles current={"green_buildings"} />
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
                          src="/assets/images/article3.webp"
                          alt=""
                          style={{ maxHeight: "424px" }}
                        />
                      </figure>
                      <div className="text">
                        <h2>בנייה בת קיימא. פרק הידרולוגי 3.4</h2>
                      </div>
                    </div>
                    <div className="content-four">
                      <h3>הורד מאמר</h3>
                      <ul className="download-list clearfix">
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>בנייה בת קיימא. פרק הידרולוגי 3.4</h5>
                          <span>Pdf</span>
                          <a
                            href="/assets/images/article3.pdf"
                            download="green_buildings.Hydrology.pdf"
                          >
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
