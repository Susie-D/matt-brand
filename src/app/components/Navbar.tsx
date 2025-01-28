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
                <div className={`${navbarBackground} fixed top-0 z-40 w-full py-6 lg:px-10 px-6`}>
                    <div className="flex justify-evenly">
                        <div className="flex lg:w-full md:gap-16 sm:gap-8 justify-between items-center max-auto w-5/6">
                            <div className="flex items-center gap-6">
                                {/* <Image width={45} height={45} src="./nav.svg" alt="hamburger menu" /> */}
                                <Link href="/" target="_self">
                                    <h1 className="text-white xs:text-base sm:text-2xl font-semibold border-solid border-secondary">{content.navHeader}</h1>
                                </Link>
                            </div>
                            <div className="flex gap-4">
                                <Image width={45} height={45} src="./linkedin.svg" alt="linkedin logo" />
                                <Link href="/contact">
                                    <button className="lg:px-8 px-4 py-2 text-white border-solid border-2 border-white rounded-lg hover:bg-white hover:text-primary hover:border-primary">
                                        <span className="text-nowrap font-bold lg:text-base text-sm">{content.callToActionsCollection.items[0].label}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileMenu />
        </header>

    )
}