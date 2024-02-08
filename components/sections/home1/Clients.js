import Link from "next/link"


export default function Clients() {
    return (
        <>
            
        <section className="clients-section p_relative bg-color-2" id="clients">
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client1.webp" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client2.webp" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client3.webp" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client4.webp" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="/assets/images/client5.webp" alt="" />
                        </Link>
                    </figure>
                </div>
            </div>
        </section>
        
        </>
    )
}
