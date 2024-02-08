import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
            <li><Link href="/">דף הבית</Link></li>
            <li><Link href="/#about">אודות</Link></li>
                <li className="dropdown"><Link href="#">שירותים</Link>
                    <ul>
                        <li><Link href="/runoff-management-at-the-permit-stage">מסמכי ניהול נגר ליוזמות נדל׳׳ן בשלב ההיתור</Link></li>
                        <li><Link href="/green-construction">חוות דעת הידרולוגית לתקן בנייה ירוקה</Link></li>
                        <li><Link href="/pikuah">דו׳׳ח פיקוח עליון</Link></li>
                    </ul>
                </li>
                <li><Link href="/#articles">מאמרים</Link></li>
                <li><Link href="/contact"> צרו קשר</Link></li>
            </ul>
        </>
    )
}
