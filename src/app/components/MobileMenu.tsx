'use client'


import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function MobileMenu() {
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
    const trigger = useRef<HTMLButtonElement>(null)
    const mobileNav = useRef<HTMLDivElement>(null)

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: { keyCode: number }): void => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <div className="md:hidden flex items-center ml-4">
            {/* Hamburger button */}
            <Image width={50} height={50} src="./nav.svg" alt="hamburger menu"
                className={`fixed top-4 pt-5 hamburger ${mobileNavOpen && 'active'}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)} />
            <span className="sr-only">Menu</span>
            {/*Mobile navigation */}
            <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed -z-0 top-6 left-2 w-[95%] h-full px-0 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
                <ul className="[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg  py-2">
                    <XMarkIcon className="h-14 ml-2 mb-6 text-slate-300" />
                    <li>
                        <Link className="flex text-2xl text-slate-300 hover:text-white py-5 px-16 hover:bg-" href="/about">Home</Link>
                    </li>
                    <li>
                        <Link className="flex text-2xl text-slate-300 hover:text-white py-5 px-16" href="/integrations">Case Studies</Link>
                    </li>
                    <li>
                        <Link className="flex text-2xl text-slate-300 hover:text-white py-5 px-16" href="/pricing">Testimonials</Link>
                    </li>
                    <li>
                        <Link className="flex text-2xl text-slate-300 hover:text-white py-5 px-16" href="/customers">About</Link>
                    </li>
                    <li>
                        <Link className="flex text-2xl text-slate-300 hover:text-white py-5 px-16" href="/changelog">Contact</Link>
                    </li>
                </ul>
            </nav >
        </div >
    )
}
