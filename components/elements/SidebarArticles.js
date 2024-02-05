import React from "react";
import Link from "next/link";

const SidebarArticles = ({ current }) => {
  return (
    <>
      <div className="sidebar-widget category-widget">
        <h3 style={{ textAlign: "end" }}>כל המאמרים</h3>
        <ul className="category-list clearfix">
          <li>
            <Link
              href="/planning-manager-policy-document"
              className={`${
                current === "planning-manager-policy-document" ? "current" : ""
              }`}
            >
              מסמך מדיניות מנהל התכנון
            </Link>
          </li>
          <li>
            <Link
              href="/principles-of-water-authority-runoff-management-guidelines"
              className={`${current === "principles-of-water-authority-runoff-management-guidelines" ? "current" : ""}`}
            >
              עקרונות הנחיות ניהול נגר רשות המים 2021
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarArticles;
