// import Link from "next/link"


// export default function Cta() {
//     return (
//         <>            
//          <section className="cta-section p_relative">
//                 <div className="bg-layer parallax-bg" data-parallax={{ y: 100 }} style={{ backgroundImage: 'url(/assets/images/cta.webp' }}></div>
//                 <div className="auto-container">
//                     <div className="inner-box" style={{direction: 'rtl'}}>
//                         <h2>לשיחת ייעוץ ראשונית <span>חייגו עכשיו </span> </h2>
//                         <h3 style={{direction:'ltr',textAlign: 'end'}}><Link href="tel:912136660027">053 498 6071</Link></h3>
//                     </div>
//                 </div>
//             </section> 

//         </>
//     )
// }
'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Ensure Link is correctly imported from 'next/link'

export default function Cta() {
    // State to manage whether parallax should be enabled
    const [enableParallax, setEnableParallax] = useState(true);

    useEffect(() => {
        const updateParallax = () => {
            // Check if innerWidth is less than 768px
            if (window.innerWidth < 768) {
                setEnableParallax(false); // Disable parallax for small screens
            } else {
                setEnableParallax(true); // Enable parallax for larger screens
            }
        };

        updateParallax(); // Call it on mount to set initial state
        window.addEventListener('resize', updateParallax); // Add event listener for window resize

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', updateParallax);
    }, []);

    return (
        <>            
            <section className="cta-section p_relative">
                <div className={`bg-layer parallax-bg ${enableParallax ? '' : 'disable-parallax'}`} style={{ backgroundImage: 'url(/assets/images/cta.webp)' }}></div>
                <div className="auto-container">
                    <div className="inner-box" style={{direction: 'rtl'}}>
                        <h2>לשיחת ייעוץ ראשונית <span>חייגו עכשיו </span></h2>
                        <h3 style={{direction:'ltr', textAlign: 'end'}}><Link href="tel:912136660027">053 498 6071</Link></h3>
                    </div>
                </div>
            </section> 
        </>
    );
}

