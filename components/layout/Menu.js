import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation clearfix">
            <li><Link href="/">דף הבית</Link></li>
                <li className="dropdown"><Link href="#">שירותים</Link>
                    <ul>
                        <li><Link href="/run_off_consulting">מסמך ניהול נגר בשלב ההיתר</Link></li>
                        <li><Link href="/green-construction">חוות דעת הידרולוגית לתקן בנייה ירוקה</Link></li>
                        <li><Link href="/tofes_4">דו׳׳ח פיקוח עליון</Link></li>
                    </ul>
                </li>
                <li><Link href="/#about">אודות</Link></li>
                <li><Link href="/#articles">חדשות ומאמרים</Link></li>
                <li><Link href="/#clients">בין לקוחותינו</Link></li>
                <li><Link href="/contact"> צרו קשר</Link></li>
            </ul>
        </>
    )
}
