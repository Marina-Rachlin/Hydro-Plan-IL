import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
            <li><Link href="/">דף הבית</Link></li>
                <li className="dropdown"><Link href="#">שירותים</Link>
                    <ul>
                        <li><Link href="/runoff-management-at-the-permit-stage">מסמכי ניהול נגר ליוזמות נדל׳׳ן בשלב ההיתור</Link></li>
                        <li><Link href="/green-construction">חוות דעת הידרולוגית לתקן בנייה ירוקה</Link></li>
                        <li><Link href="/pikuah">דו׳׳ח פיקוח עליון</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"> צרו קשר</Link></li>
            </ul>
        </>
    )
}
