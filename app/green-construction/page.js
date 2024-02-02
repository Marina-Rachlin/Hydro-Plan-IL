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

  return (
    <>
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
                        <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706786636/hydro-plan/g8mgkxp9ntyyxtjz5vxl.jpg" alt="" />
                      </figure>
                      <div className="text">
                        <h2> חוות דעת הידרולוגית לתקן בנייה ירוקה</h2>
                        <p>
                          {" "}
                          תקן הבנייה הירוקה ת&quot;י 5281 נוצר עבור שיפור
                          ההיבטים הסביבתיים בתכנון מבנים למען שיפור איכות החיים
                          של המתגוררים בו ועבור סביבתו. לצורך עמידה בתקן יש
                          לצבור מספיק נקודות כדי לקבל מינימום כוכב אחד. חלק
                          מהסעיפים הם סעיפי חובה ובסך הכל ניתן להגיע גם עד 5
                          כוכבים. בין שירותינו מסמך תכנון הידרולוגי המחשב את
                          הניקוד בסעיף ההידרולוגיה  3.4 בתקן.
                        </p>
                        {/* <p>
                          טופס 4 או בשמו המלא “טופס אישור אכלוס” הוא אחד
                          האישורים הסופיים בתהליך הרישוי של פרויקט בנייה כלשהו.
                          בתום הקמת המבנים ופיתוח השטח, על בעל היתר הבנייה להגיש
                          בקשה לרשות המקומית לקבלת טופס המאשר את אכלוס הבניין
                          (טופס 4). עם הגשת הטפסים לקבלת טופס 4 מתחיל הליך בדיקת
                          המבנים, התשתיות והמערכות ההנדסיות שבו, על מנת לבדוק
                          שהביצוע תואם להיתר הבניה שהתקבל ולוודא שהמבנה כשיר,
                          ראוי ובטוח לאכלוס. לאחרונה, רשויות מקומיות רבות ומכוני
                          ההתעדה (תקן בניה ירוקה) מחמירות מאוד ומוודאות שביצוע
                          המבנים והפיתוח אכן תואם להיתר הבנייה שהתקבל ולתוכניות
                          אשר אושרו ברשות המקומית. כחלק מתהליך זה, אנו נדרשים,
                          כמו שאר היועצים בפרויקט, להנפיק אישור הידרולוג עבור
                          היזם לקבלת טופס 4 בפרויקטים אשר תוכננו על ידנו. על מנת
                          שנוכל לאשר את תאימות הביצוע לתכנון ואת כשירות המתקנים
                          ההנדסיים שתוכננו על ידינו על היזם לזמן נציג ממשרדינו
                          לביצוע סיור פיקוח עליון בעת ביצוע העבודות באתר (יש
                          להעביר בקשה לפחות 3 ימים מבעוד מועד). בטרם ביצוע סיור
                          פיקוח עליון על היזם ומנהל הפרויקט ליצור קשר עם משרדינו
                          ע”מ לוודא שהקבלן המבצע הזמין את החומרים והאביזרים
                          הנדרשים לביצוע כפי שתוכנן על ידינו, וכן שיש בידיו את
                          הציוד המתאים לביצוע התכנון בצורה מיטבית. במהלך סיור
                          פיקוח עליון נציג ממשרדינו מלווה את הקבלן בביצוע
                          העבודות, מוודא שהחומרים, האביזרים והציוד המכני שבשטח
                          מתאימים לביצוע העבודה; מוודא שהקבלן מכיר את התכנון
                          ההנדסי ואת שיטות העבודה; מוודא שהתנאים באתר תואמים
                          להנחות שנלקחו בשלב התכנון ובמקרה הצורך מעניק ייעוץ
                          מקצועי לביצוע העבודות בצורה הטובה ביותר. במידה ולא
                          הוזמן נציג ממשרדינו לביצוע פיקוח עליון במהלך העבודות
                          לא נוכל להעניק אישור הידרולוג לקבלת טופס 4.
                        </p> */}
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
