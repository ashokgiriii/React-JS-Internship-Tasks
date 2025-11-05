"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const navLinks = [
    { name: "Home", href: "/" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" }
]

const Header = () => {
    const pathName = usePathname()
    return (

        <div className="flex justify-between px-10 py-4 bg-white shadow-lg">
            <Link className="text-2xl tracking-wider" href="/">Welcome Home</Link>

            <ul className="flex items-center gap-4">
                <li>
                    <Link href="/article/breaking-news-123?lang=en">Read in English</Link>
                </li>
                <li>
                    <Link href="/article/breaking-news-123?lang=np">Read in Nepali</Link>
                </li>
            </ul>
            <ul className="flex items-center gap-8">
                {
                    navLinks.map((link) => {

                        const isActive = pathName === link.href || (pathName.includes(link.href)) && link.href !== "/";
                        return (
                            <li key={link.name}>
                                <Link className={isActive ? "text-orange font-bold" : "text-black "} href={link.href}>{link.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>

        </div>

    )
}

export default Header