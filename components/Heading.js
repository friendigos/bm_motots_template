import Link from "next/link";
export default function Heading() {
	return (
        <div className="header-left footer-logo">
            <div className="logo">
                <Link href="/" className="header-logo">
                    <img loading="lazy" src="/assets/img/logo/main.png" alt="logo-img" />
                </Link>
                <div className="main-logo-heading">
                    <h3>B M Motors PVT LTD</h3>
                </div>
            </div>
        </div>
    )
}
