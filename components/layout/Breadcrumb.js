import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            
            <section className="page-title centred">
                <div className="bg-layer" style={{ backgroundImage: 'url(https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706789350/hydro-plan/qv0skabtgb9puvldy2es.jpg)' }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        {/* <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul> */}
                    </div>
                </div>
            </section>

        </>
    )
}
