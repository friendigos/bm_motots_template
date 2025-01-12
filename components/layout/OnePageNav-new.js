import Link from "next/link"
import "/public/assets/css/tailwind.css"

export default function OnePageNav() {
    return (
        <>
            <ul className="flex space-x-6 p-2 text-white">
                <li className="relative active">
                    <Link href="/" className="text-gray-300 hover:text-white py-2 px-4 block">Home</Link>
                </li>
                <li className="relative">
                    <Link href="#about" className="text-gray-300 hover:text-white py-2 px-4 block">About</Link>
                </li>
                <li className="relative">
                    <Link href="#service" className="text-gray-300 hover:text-white py-2 px-4 block">Services</Link>
                </li>
                <li className="relative">
                    <Link href="#project" className="text-gray-300 hover:text-white py-2 px-4 block">Projects</Link>
                </li>
                <li className="relative">
                    <Link href="#team" className="text-gray-300 hover:text-white py-2 px-4 block">Team</Link>
                </li>
                <li className="relative">
                    <Link href="#blog" className="text-gray-300 hover:text-white py-2 px-4 block">Blog</Link>
                </li>
            </ul>
        </>
    )
}
