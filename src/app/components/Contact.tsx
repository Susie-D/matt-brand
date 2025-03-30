import Link from "next/link";

export default function Contact() {
    return (
        <section className="bg-green">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="flex flex-col p-12 w-full">
                    <h2 className="font-semibold text-4xl italic mb-6">Get in Touch!</h2>
                    <p className="md:text-2xl text-lg mb-6">
                        Schedule a free 1:1 introductory session with me to discuss your Cloud Project Management needs.
                    </p>
                    <Link
                        href="https://calendly.com/smartpropertymanagement/cloud-pm-intro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 px-10 text-lg font-bold text-white bg-primary border-2 border-secondary rounded-lg hover:bg-tertiary hover:text-primary hover:border-white w-full max-w-xs text-center"
                    >
                        Book Consultation
                    </Link>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img src="phone.svg" alt="phone and accessories" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

