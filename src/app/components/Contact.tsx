
export default function Contact() {
    return (
        <section className="bg-green">
            <div className="grid grid-row-1 grid-cols-2">
                <div className='content-around align-center'>
                    <h2 className="flex justify-left text-black font-semibold text-4xl italic text-center mb-10">Get in Touch!</h2>
                    <h3 className="text-lg">Schedule a free 1:1 introductory session with me to discuss your Cloud Project Management needs.</h3>
                    <button className="flex py-4 justify-self-end hover:text-primary hover:bg-tertiary border-solid border-2 hover:border-white rounded-lg bg-primary text-white border-secondary w-[100%]">
                        <span className="flex text-nowrap font-bold mx-10 lg:text-xs text-sm">Book Consultation
                        </span>
                    </button>
                </div>
                <img src="phone.svg" alt="phone and accessories" width="100%" />
            </div>
        </section>
    )
}
