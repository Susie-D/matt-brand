export default function Contact() {
    return (
        <section className="bg-green">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="flex flex-col p-12 w-full">
                    <h2 className="text-black font-semibold text-4xl italic mb-10">Get in Touch!</h2>
                    <h3 className="text-lg mb-10">Schedule a free 1:1 introductory session with me to discuss your Cloud Project Management needs.</h3>
                    <button className="py-4 px-10 hover:text-primary hover:bg-tertiary border-2 hover:border-white rounded-lg bg-primary text-white border-secondary w-full max-w-xs self-end">
                        <span className="font-bold text-lg">Book Consultation</span>
                    </button>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <img src="phone.svg" alt="phone and accessories" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

