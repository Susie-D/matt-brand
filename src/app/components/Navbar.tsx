import { getContentNav } from "@/content/queries";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
    const data = await getContentNav();
    const content = data.navbarCollection.items[0];
    const navbarBackground = "bg-primary drop-shadow";

    return (
        <header className="absolute w-full z-30">
            <nav className="hidden md:flex md:grow items-center justify-between">
                <div className={`${navbarBackground} fixed top-0 z-40 w-full py-6 px-2`}>
                    <div className="content-center">
                        <ul className="flex items-center justify-between gap-4 sm:gap-2">
                            <li>
                                <Link href="/" target="_self">
                                    <h1 className="items-center text-white md:text-base mx-4 text-nowrap font-semibold border-solid border-secondary ">{content.navHeader}</h1>
                                </Link>
                            </li>
                            <li>
                                <Link className="lg:text-sm md:text-xs text-slate-300 hover:text-primary hover:bg-white text-nowrap p-4 rounded-md font-semibold" href="#home">Home</Link>
                            </li>
                            <li>
                                <Link className="lg:text-sm md:text-xs text-slate-300 hover:text-primary hover:bg-white text-nowrap p-4 rounded-md font-semibold" href="#case-studies">Case Studies</Link>
                            </li>
                            <li>
                                <Link className="lg:text-sm md:text-xs text-slate-300 hover:text-primary hover:bg-white p-4 rounded-md font-semibold" href="#testimonials">Testimonials</Link>
                            </li>
                            <li>
                                <Link className="lg:text-sm md:text-xs text-slate-300 hover:text-primary hover:bg-white p-4 rounded-md font-semibold" href="#about">About</Link>
                            </li>
                            <li>
                                <Link className="lg:text-sm md:text-xs text-slate-300 hover:text-primary hover:bg-white p-4 rounded-md font-semibold" href="#contact">Contact</Link>
                            </li>
                            <li className="flex gap-4">
                                <Image width={35} height={35} src="./linkedin.svg" alt="linkedin logo" />
                                <Link href="/contact">
                                    <button className="lg:px-4 py-2 text-white border-solid border-2 border-white rounded-lg hover:bg-white hover:text-primary hover:border-primary">
                                        <span className="text-nowrap font-bold lg:text-sm text-sm">{content.callToActionsCollection.items[0].label}
                                        </span>
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <MobileMenu />
        </header>

    )
}