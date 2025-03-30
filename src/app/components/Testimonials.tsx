import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="bg-gradient-to-r from-secondary to-primary/80 p-14">
            <h2 id="testimonials" className="flex justify-center text-white font-semibold text-3xl sm:text-4xl italic text-center pb-6 sm:pb-8">
                What Clients Are Saying...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Testimonial 1 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <blockquote className="italic mb-4 text-xl sm:text-2xl text-white font-bold">
                        “Matt played a critical role in assessing thousands of applications across our global portfolio, bridging the gap between business needs and technological solutions.”
                    </blockquote>
                    <p className="m-0 text-lg sm:text-xl">Ayman Nasser, Cargill</p>
                    <div className="m-0 text-lg sm:text-xl font-bold">Global IT Modernization Lead</div>
                </div>

                {/* Image 1 */}
                <figure className="flex justify-center sm:justify-end">
                    <Image
                        src="/laptop.svg"
                        alt="Illustration of a laptop, representing technology and digital solutions"
                        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                        width={200}
                        height={200}
                    />
                    <figcaption className="sr-only">Illustration of a laptop, representing technology and digital solutions</figcaption>
                </figure>

                {/* Testimonial 2 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <blockquote className="italic mb-4 text-xl sm:text-2xl text-white font-bold">
                        “We greatly appreciated the in-depth migration planning, which included detailed communication between servers and accurate tagging for our financial operations tracking (FinOps).”
                    </blockquote>
                    <p className="m-0 text-lg sm:text-xl">Aaron Murray, Securian Financial Enterprise</p>
                    <div className="m-0 text-lg sm:text-xl font-bold">Cloud Director</div>
                </div>

                {/* Image 2 */}
                <figure className="flex justify-center sm:justify-end">
                    <Image
                        src="/street.svg"
                        alt="Illustration of a street, symbolizing direction and strategic planning"
                        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                        width={200}
                        height={200}
                    />
                    <figcaption className="sr-only">Illustration of a street, symbolizing direction and strategic planning</figcaption>
                </figure>
            </div>
        </section>
    );
}
