'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'; 

export default function Cta() {
    const [enableParallax, setEnableParallax] = useState(true);

    useEffect(() => {
        const updateParallax = () => {
            if (window.innerWidth < 768) {
                setEnableParallax(false); // Disable parallax for small screens
            } else {
                setEnableParallax(true); // Enable parallax for larger screens
            }
        };

        updateParallax(); 
        window.addEventListener('resize', updateParallax); 

        return () => window.removeEventListener('resize', updateParallax);
    }, []);

    return (
        <>            
            <section className="cta-section p_relative">
                <div className={`bg-layer parallax-bg ${enableParallax ? '' : 'disable-parallax'}`} style={{ backgroundImage: 'url(/assets/images/cta.webp)' }}></div>
                <div className="auto-container">
                    <div className="inner-box" style={{direction: 'rtl'}}>
                        <h2>לשיחת ייעוץ ראשונית <span>חייגו עכשיו </span></h2>
                        <h3 style={{direction:'ltr', textAlign: 'end'}}><Link href="tel:912136660027">+972-53-4986071</Link></h3>
                    </div>
                </div>
            </section> 
        </>
    );
}

