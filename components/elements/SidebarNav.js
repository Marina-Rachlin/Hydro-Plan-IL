import React from 'react'
import Link from 'next/link'

const SidebarNav = ({current}) => {
  return (
    <>
         <div className="sidebar-widget category-widget">
    <h3 style={{ textAlign: "end" }}>כל השירותים</h3>
    <ul className="category-list clearfix">
      <li>
        <Link href="/run_off_consulting" className={`${current === 'run_off_consulting' ? 'current' : ''}`}>
        מסמך ניהול נגר בשלב ההיתר
        </Link>
      </li>
      <li>
        <Link href="/green-construction" className={`${current === 'green-construction' ? 'current' : ''}`}>
          חוות דעת הידרולוגית לתקן בנייה ירוקה
        </Link>
      </li>
      <li>
        <Link href="/tofes_4" className={`${current === 'tofes_4' ? 'current' : ''}`}>דו׳׳ח פיקוח עליון</Link>
      </li>
    </ul>
  </div>
  </>
  )
}

export default SidebarNav