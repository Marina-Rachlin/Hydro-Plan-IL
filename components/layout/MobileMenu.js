"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="rtl mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li>
                  <Link href="/" onClick={handleMobileMenu}>
                    דף הבית
                  </Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#services" onClick={handleMobileMenu}>
                    שירותים
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        href="/run_off_consulting"
                        onClick={handleMobileMenu}
                      >
                        מסמך ניהול נגר בשלב ההיתר
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/green-construction"
                        onClick={handleMobileMenu}
                      >
                        חוות דעת הידרולוגית לתקן בנייה ירוקה
                      </Link>
                    </li>
                    <li>
                      <Link href="/tofes_4" onClick={handleMobileMenu}>
                        דו׳׳ח פיקוח עליון
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-left" />
                  </div>
                </li>
                <li>
                  <Link href="/#about" onClick={handleMobileMenu}>
                    אודות
                  </Link>
                </li>

                <li>
                  <Link href="/#cta" onClick={handleMobileMenu}>
                    הצעת מחיר מהירה
                  </Link>
                </li>

                <li>
                  <Link href="/#articles" onClick={handleMobileMenu}>
                    חדשות ומאמרים
                  </Link>
                </li>

                <li>
                  <Link href="/#clients" onClick={handleMobileMenu}>
                    בין לקוחותינו
                  </Link>
                </li>

                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    צור קשר
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix" style={{ marginTop: "15px" }}>
              <li>
                <Link
                  href="https://www.linkedin.com/in/ofri-orgad-62382b63/"
                  onClick={handleMobileMenu}
                >
                  <span className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
