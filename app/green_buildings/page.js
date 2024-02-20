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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
