import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="flex space-x-10 p-2 items-center relative z-10">
                <li className="relative active">
                    <Link href="/" className="text-gray-900 font-semibold px-4 py-2 hover:text-blue-500">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-gray-900 font-semibold px-4 py-2 hover:text-blue-500">About</Link>
                </li>
                <li className="relative group">
                    <Link href="/news" className="text-gray-900 font-semibold px-4 py-2 flex items-center hover:text-blue-500">
                        Services
                        <i className="fas fa-angle-down ml-1" />
                    </Link>
                    <ul className="absolute top-full left-0 mt-2 w-60 bg-white text-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                        <li><Link href="/service" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Services</Link></li>
                        <li><Link href="/service-carousel" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Service Carousel</Link></li>
                        <li><Link href="/service-details" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Service Details</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/news" className="text-gray-900 font-semibold px-4 py-2 flex items-center hover:text-blue-500">
                        Pages
                        <i className="fas fa-angle-down ml-1" />
                    </Link>
                    <ul className="absolute top-full left-0 mt-2 w-60 bg-white text-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                        <li className="relative group">
                            <Link href="/project" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100 flex items-center">
                                Projects
                                <i className="fas fa-angle-down ml-1" />
                            </Link>
                            <ul className="absolute top-0 left-full mt-2 w-60 bg-white text-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                <li><Link href="/project" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Project</Link></li>
                                <li><Link href="/project-carousel" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Project Carousel</Link></li>
                                <li><Link href="/project-details" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <Link href="/team" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100 flex items-center">
                                Team
                                <i className="fas fa-angle-down ml-1" />
                            </Link>
                            <ul className="absolute top-0 left-full mt-2 w-60 bg-white text-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                                <li><Link href="/team" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Our Team</Link></li>
                                <li><Link href="/team-carousel" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Team Carousel</Link></li>
                                <li><Link href="/team-details" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Pricing</Link></li>
                        <li><Link href="/faq" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Faq's</Link></li>
                        <li><Link href="/error" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">404 Page</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link href="/news" className="text-gray-900 font-semibold px-4 py-2 flex items-center hover:text-blue-500">
                        Blog
                        <i className="fas fa-angle-down ml-1" />
                    </Link>
                    <ul className="absolute top-full left-0 mt-2 w-60 bg-white text-gray-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                        <li><Link href="/news" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Blog Grid</Link></li>
                        <li><Link href="/news-standard" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Blog Standard</Link></li>
                        <li><Link href="/news-details" className="block px-6 py-2 border-b border-gray-200 hover:bg-gray-100">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-900 font-semibold px-4 py-2 hover:text-blue-500">Contact</Link>
                </li>
            </ul>
        </>
    )
}
