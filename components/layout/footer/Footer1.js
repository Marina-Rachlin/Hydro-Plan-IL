import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="rtl main-footer">
        <div className="widget-section">
          <div className="pattern-layer">
            <div
              className="pattern-1"
              style={{
                backgroundImage: "url(assets/images/shape/shape-20.png)",
              }}
            ></div>
            <div
              className="pattern-2"
              style={{
                backgroundImage: "url(assets/images/shape/shape-21.png)",
              }}
            ></div>
          </div>

          <div className="auto-container">
            <div className="row clearfix">

                {/* LOGO SECTION */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column" >
                <div className="logo-widget footer-widget ml_50">
                  <figure className="footer-logo">
                    <Link href="#">
                      <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796685/hydro-plan/dmglpllgebfdju2yzht8.png" alt="" />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      מומחית במידול הידרולוגי במרחב העירוני, תכנון רגיש
                      למים, פתרונות ניהול נגר, הוצאת סקרים וחוו"ד
                      הידרולוגיות.
                    </p>
                  </div>
                </div>
              </div>


              {/* QUICK LINKS */}
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="links-widget footer-widget mr_150">
                  <div className="widget-title">
                    <h3>ניווט באתר</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/#about">אודות</Link>
                      </li>
                      <li>
                        <Link href="/#services">שירותים</Link>
                      </li>
                      <li>
                        <Link href="/#articles">מאמרים</Link>
                      </li>
                      <li>
                        <Link href="/#cta">הצעת מחיר מהירה</Link>
                      </li>
                      <li>
                        <Link href="/contact">צרו קשר</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <div className="rtl col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="contact-widget footer-widget mr_150">
                  <div className="widget-title">
                    <h3>צרו עימנו קשר</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="info-list clearfix">
                      <li>
                        <i className="icon-3"></i>
                        <Link href="mailto:orgadofri@gmail.com">
                          orgadofri@gmail.com
                        </Link>
                      </li>
                      <li style={{ direction: "ltr" }}>
                        <i className="icon-2" style={{fontSize: '18px'}}></i>
                        <Link href="tel:912136660027">053 498 6071</Link>
                      </li>
                      <li>
                    <i className="fab fa-linkedin-in"></i>
                      <Link href="https://www.linkedin.com/in/ofri-orgad-62382b63/">Linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT FOOTER */}
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>
                .Copyright {new Date().getFullYear()} by{" "}
                <Link href="#" style={{color: '#43aee3'}}>Marina Rachlin. </Link> All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
