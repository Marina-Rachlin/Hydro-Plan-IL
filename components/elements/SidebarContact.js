import React from "react";
import Link from "next/link";

const SidebarContact = () => {
  return (
    <>
      <div className="sidebar-widget contact-widget centred">
        <div className="widget-content">
          <div
            className="bg-layer"
            style={{
              backgroundImage: "url(https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706797081/hydro-plan/xubd8qdw3qe3vfggrtxw.png)",
            }}
          ></div>
          <h3 style={{ letterSpacing: "1.5px", fontSize: "35px" }}>
            לשיחת ייעוץ <br />
            <span>חייגו </span>
            עכשיו
          </h3>
          <div className="icon-box">
            <i className="icon-29"></i>
          </div>
          <div className="inner-box">
            <p>
              <Link href="mailto:orgadofri@gmail.com">orgadofri@gmail.com</Link>
            </p>
            <h3>
              <Link href="tel:913336660021">053 498 6071</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContact;
