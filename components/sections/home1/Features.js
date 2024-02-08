import Link from "next/link"


export default function Features() {
    return (
        <>
        
            <section className="feature-section bg-color-1 sec-pad centred"  id="services">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-2.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                </div>

                <div className="auto-container">
                    <div className="sec-title mb_50">
                    <span className="sub-title">שירותים</span>
                    <h2>יעוץ הידרולוגי בתחומים הבאים</h2>
                    </div>

                    
                    <div className=" rtl row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box" ><img src="/assets/images/happy-customers.webp" alt="" style={{maxHeight: '200px'}} /></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-9"></i></div>
                            <h3><Link href="/run_off_consulting">מסמך ניהול נגר בשלב ההיתר</Link></h3>
                            <p>שיפור יוזמות נדל"ן באמצעות תיעוד ניהול יעיל של נגר</p>
                            <p style={{visibility: 'hidden'}}>hkjnlkml3</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images/green.webp" alt="" style={{maxHeight: '200px'}}/></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-8"></i></div>
                            <h3><Link href="/">חוות דעת הידרולוגית לתקן בנייה ירוקה</Link></h3>
                            <p>ליווי פרויקטים של בנייה ירוקה ואישורם במכון התקנים, לפי תקן 5281</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box special">
                            <figure className="image-box" ><img src="/assets/images/pikuah.webp" alt=""  style={{maxHeight: '200px'}}/></figure>
                            <div className="lower-content">
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h3><Link  href="/pikuah">דו׳׳ח פיקוח עליון</Link></h3>
                            <p>יצירת דוח פיקוח עליון מעמיק למצוינות מקיפה של תובנה ופיקוח </p>
                            <p style={{visibility: 'hidden'}}>hkjnlkml3</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}
