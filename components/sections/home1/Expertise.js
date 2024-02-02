'use client'
import React, {useState} from 'react';

export default function Expertise() {

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
      <section
        className="expertise-section alternat-2 p_relative bg-color-1"
        id="cta"
      >
        <div className="pattern-layer">
          <div
            className="pattern-3"
            style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}
          ></div>
        </div>
        <figure className="image-layer">
          <img
            src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706791195/hydro-plan/fgiytwvbjz5xrhx8xmfk.png"
            alt=""
            style={{ width: "1000px", height: "667px" }}
          />
        </figure>
        <div className="auto-container">
          <div className="row clearfix" flex justify-content-center>
            <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 content-column">
              <div className="content_block_four">
                <div className="content-box p_relative ml_30 mt_20 centred">
                  <h3>
                    מחפשים יעוץ הידרולוגי? אשמח להגיש <br />
                    הצעת מחיר
                  </h3>
                  <div className="form-inner">
                    <form
                      action="post"
                      method="post"
                      className="default-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row clearfix">
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
                            name="name"
                            placeholder="שם"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="company"
                            placeholder="חברה"
                            required
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="טלפון"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select className="selectmenu">
                                                            <option value={1}>Tax Management</option>
                                                            <option value={2}>Strategy & Planning</option>
                                                            <option value={3}>Program Manager</option>
                                                            <option value={4}>Investment Policy</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn-one">
                            לקבל הצעת מחיר
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="submit-result">
                            {submitStatus === 'success' && (
                                <span id="success">ההודעה נשלחה</span>
                            )}
                            {submitStatus === 'error' && (
                                <span id="error">Something went wrong. Please try again!</span>
                            )}
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
