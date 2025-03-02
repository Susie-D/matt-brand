export default function Testimonials() {
    return (
        <section className="bg-gradient-to-r from-secondary to-primary/60 p-14">
            <h2 id="testimonials" className="flex justify-center text-white font-semibold text-4xl italic text-center pb-10">
                What Clients Are Saying...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="content-around text-center sm:text-left">
                    <p className="italic mb-3 text-lg  text-white font-bold">
                        “Matt was instrumental in our assessment of thousands of applications in our global portfolio, a key integrator between our business objectives and technology capabilities.”
                    </p>
                    <p className="m-0 text-s">Ayman Nasser, Cargill</p>
                    <div className="m-0 text-s font-bold">Global IT Modernization Lead</div>
                </div>
                <img
                    src="/laptop.svg"
                    alt="Public Folder Image"
                    className="w-full h-auto sm:w-3/4 lg:w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"

                />
                <div className="content-around text-center sm:text-left">
                    <p className="italic mb-3 text-lg text-white font-bold">
                        “We really appreciated the detailed migration planning, which encompassed chattiness between servers at an individual level and tagging to appropriately track our FinOps.”
                    </p>
                    <p className="m-0 text-s">Aaron Murray, Securian Financial Enterprise</p>
                    <div className="m-0 text-s font-bold">Cloud Director</div>
                </div>
                <img
                    src="/street.svg"
                    alt="Public Folder Image"
                    className="w-full h-auto sm:w-3/4 lg:w-full mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
            </div>
        </section>
    );
}
