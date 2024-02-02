'use client'
import React, {useState} from 'react';
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setSubmitStatus("success");
    } else {
      setSubmitStatus("error");
    };
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="צרו קשר">
        <div>
          {/* Feature Section */}
          <section className="feature-style-three p_relative centred">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-31.png)",
              }}
            ></div>
            <div className="auto-container">
              <div className="sec-title mb_100">
                <span className="sub-title">פרטי קשר</span>
                <h2>נשמח לתת שירות</h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shape/shape-32.png)",
                        }}
                      ></div>
                      <div className="icon-box">
                        <i className="icon-48"></i>
                      </div>
                      <h3>כתובת</h3>
                      <p>
                        החרצית 12 <br />
                        גבעת עדה
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-49"></i>
                      </div>
                      <h3>דו׳׳ל</h3>
                      <p>
                        <Link href="mailto:orgadofri@gmail.com">
                          orgadofri@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div
                    className="feature-block-three wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div
                        className="block-shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/shape/shape-33.png)",
                        }}
                      ></div>
                      <div className="icon-box">
                        <i className="icon-50"></i>
                      </div>
                      <h3>טלפון</h3>
                      <p>
                        <Link href="tel:972534986071">053 498 6071</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Feature Section End */}

          {/* Contact Form Section */}
          <section className="contact-style-two sec-pad">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                  <div className="content-box mr_70">
                    <div className="rtl sec-title mb_35">
                      <span className="sub-title">הודעה</span>
                      <h2>לקבלת הצעת מחיר</h2>
                      <p className="mt_20">
                        מעוניינים בייעץ ללא עלות? השאירו פרטים עוד היום
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                  <div className="rtl form-inner">
                    <form
                      method="post"
                      className="default-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12  form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="שם"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="דו׳׳ל"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            required
                            placeholder="טלפון"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="company"
                            required
                            placeholder="חברה"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="הקלד הודעה"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            className="theme-btn theme-btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            לשלוח הודעה{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="submit-result">
                            {submitStatus === 'success' && (
                                <span id="success">ההודעה נשלחה. תודה!</span>
                            )}
                            {submitStatus === 'error' && (
                                <span id="error">Something went wrong. Please try again!</span>
                            )}
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
