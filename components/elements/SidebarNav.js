import React from 'react'
import Link from 'next/link'

const SidebarNav = ({current}) => {
  return (
    <>
         <div className="sidebar-widget category-widget">
    <h3 style={{ textAlign: "end" }}>כל השירותים</h3>
    <ul className="category-list clearfix">
      <li>
        <Link href="/niul-nagar" className={`${current === 'niul-nagar' ? 'current' : ''}`}>
          מסמכי ניהול נגר ליוזמות נדל׳׳ן בשלב ההיתור
        </Link>
      </li>
      <li>
        <Link href="/green-construction" className={`${current === 'green-construction' ? 'current' : ''}`}>
          חוות דעת הידרולוגית לתקן בנייה ירוקה
        </Link>
      </li>
      <li>
        <Link href="/pikuah" className={`${current === 'pikuah' ? 'current' : ''}`}>דו׳׳ח פיקוח עליון</Link>
      </li>
    </ul>
  </div>
  </>
  )
}

export default SidebarNav