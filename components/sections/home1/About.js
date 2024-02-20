import Link from "next/link";
import Image from "next/image";

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
                    <p>
                      בוגרת תואר ראשון במדעי כדור הארץ (מיקוד במדעים
                      אטמוספיריים) מטעם האוניברסיטה העברית בירושלים. סיימה
                      בהצטיינות תואר שני בהידרולוגיה ואיכות מים במכונים לחקר
                      המדבר באוניברסיטת בן גוריון. עסקה בניהול משלחות סיוע
                      הומניטרי באזורי אסונות טבע, הנגישה פתרונות לטיהור מי שתייה
                      ופיתוח מקורות מים לאוכלוסיות מנותקות. מייסדת-שותפה
                      באלומור, חברת סטארט-אפ המפתחת טכנולוגיות ניידות וחסכוניות
                      באנרגיה לטיהור מים באזורים מנותקים מרשת.
                    </p>
                  </div>
                  <div className="inner-box">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>יעוץ ממוקד פתרון</h3>
                      <p>
                        להידרו-פלאן ארסנל רחב של פתרונות ניהול נגר עבור מגוון של
                        אילוצים שעשויים להתקיים בענף יזמות הנדל"ן.
                      </p>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="icon-11"></i>
                      </div>
                      <h3>פריסה ארצית</h3>
                      <p>
                        להידרו-פלאן רקורד מוכח בתפרוסת ארצית רחבה כולל אזור
                        יהודה ושומרון.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_two">
                <div className="image-box mr_80">
                  <figure className="image figure ">
                    <img src="/assets/images/ofri.webp" alt="Photo" />
                    <div className="image-content">
                      <h3 style={{ color: "white" }}>
                        מומחיות בתכנון ניהול נגר ליוזמות נדל׳׳ן{" "}
                      </h3>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
