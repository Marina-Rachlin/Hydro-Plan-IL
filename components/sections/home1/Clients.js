import Link from "next/link"


export default function Clients() {
    return (
        <>
            
        <section className="clients-section p_relative bg-color-2" id="clients">
        <div className="sec-title centred mb_50">
                    <span className="sub-title" style={{color: 'white'}}>בין לקוחותינו  </span>
                    </div>
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client1.webp" alt="client1" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client2.webp" alt="client2" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client3.webp" alt="client3" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client4.webp" alt="client4" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client5.webp" alt="client5" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client7.webp" alt="client6" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client8.webp" alt="client7" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client6.webp" alt="client8" />
                        </Link>
                    </figure>
                </div>
            </div>
        </section>
        
        </>
    )
}
