import Link from "next/link"


export default function Clients() {
    return (
        <>
            
        <section className="clients-section p_relative bg-color-2">
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796367/hydro-plan/r98jj5frkfszg2hhid4k.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796423/hydro-plan/snpmnwgvhimtxctt90tb.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796475/hydro-plan/xdp9ey8ie5waai8lef7l.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796515/hydro-plan/sg9tpad708guxmqsh1fw.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="clients-logo">
                        <Link href="/index-3">
                            <img src="https://res.cloudinary.com/dmdv8s9mz/image/upload/v1706796565/hydro-plan/cirvohvqx4zyzoboujme.png" alt="" />
                        </Link>
                    </figure>
                </div>
            </div>
        </section>
        
        </>
    )
}
