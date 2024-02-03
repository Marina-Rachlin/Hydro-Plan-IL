import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="rtl about-style-three p_relative" id="about">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box p_relative ml_40">
                  <div className="sec-title mb_25">
                    <span className="sub-title">אודות</span>
                    <h2>עופרי אורגד </h2>
                  </div>
                  <div className="text mb_35">
                    {/* <p>
                      בוגרת תואר ראשון במדעי כדור הארץ, תואר ממוקד במדעים
                      אטמוספיריים, באוניברסיטה העברית בירושלים. B.Sc.
                    </p> */}
                    <p>
                      בוגרת תואר ראשון במדעי כדור הארץ, תואר ממוקד במדעים
                      אטמוספיריים, באוניברסיטה העברית בירושלים. סיימה בהצטיינות
                      תואר שני בהידרולוגיה ואיכות מים במכונים לחקר המדבר
                      באוניברסיטת בן גוריון. בעלת נסיון בחוות דעת הידרולוגיות
                      וסביבתיות במגוון נושאים ובתפרוסת ארצית, כולל אזור יהודה
                      ושומרון. בעלת תודעת שירות גבוהה הבאה לידי ביטוי בחשיבה
                      יצירתית. במקרים בהם יעדי הרגולטור בנושא ההידרולוגי קשים
                      למימוש בגלל אילוצי הבנייה, שואפת תמיד למציאת אלטרנטיבה
                      נוספת שתיהיה לשביעות רצונם הן של היזם והן של גופי
                      הרגולציה.
                    </p>
                  </div>
                  <div className="inner-box">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>ממוקד פתרון</h3>
                      <p>
                        Lorem ipsum dolor sit amet tempus consectetur
                        adipiscing.
                      </p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>הצלחה 99.99%</h3>
                      <p>
                        Lorem ipsum dolor sit amet tempus consectetur
                        adipiscing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
        
              <div className="image_block_two">
                <div className="image-box mr_80">
                  <figure className="image">
                    <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706790011/hydro-plan/xnehafcvj3xzu8n1vnev.jpg" alt="" />
                    <div className="image-content">
                    <h3 style={{color: 'white'}}>מומחיות בתכנון ניהול נגר ליוזמות נדל׳׳ן  </h3>
                  </div>
                  </figure>
                  {/* <div className="image-content">
                    <h3 style={{color: 'white'}}>מומחיות בתכנון ניהול נגר ליוזמות נדל׳׳ן  </h3>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
