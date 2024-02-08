import Link from "next/link"


export default function Cta() {
    return (
        <>            
            <section className="cta-section p_relative">
                <div className="bg-layer parallax-bg" data-parallax={{ y: 100 }} style={{ backgroundImage: 'url(https://res.cloudinary.com/dmdv8s9mz/image/upload/f_auto,q_auto/v1/hydro-plan/jinmlrveyo6mvk7a5cyj' }}></div>
                <div className="auto-container">
                    <div className="inner-box" style={{direction: 'rtl'}}>
                        <h2>לשיחת ייעוץ ראשונית <span>חייגו עכשיו </span> </h2>
                        <h3 style={{direction:'ltr',textAlign: 'end'}}><Link href="tel:912136660027">053 498 6071</Link></h3>
                    </div>
                </div>
            </section> 

        </>
    )
}
