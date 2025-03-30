import Image from "next/image"

export default function AboutMe() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        src="/sky.svg"
                        alt="view out of an airplane"
                        className="w-full h-full object-cover"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="p-12 flex flex-col justify-center w-full">
                    <h2 id="about" className="text-black font-semibold text-4xl italic text-center mb-10">
                        My Cloud Journey
                    </h2>
                    <h3 className="text-2xl font-bold mb-3">Beginnings</h3>
                    <p className="lg:text-xl m:text-base mb-10">
                        {`From the start, I knew technology was my path. After earning my engineering degree from the University of Minnesota - Twin Cities, I dove into consulting with Deloitte, traveling coast to coast for four years. The pace was relentless, but it accelerated my growth—what felt like eight years of experience compressed into four.`}
                    </p>

                    <h3 className="text-2xl font-bold mb-3">Local Model</h3>
                    <p className="lg:text-xl m:text-base mb-10">
                        {`After years of constant travel, I found myself craving something different—stability, a deeper connection to home, and the chance to build a family. In 2019, my daughter Adeline, was born into the world—moment changed everything. I knew I wanted to be present, to create a life where I could grow both personally and professionally without sacrificing time with my family.  I pivoted to Slalom Consulting, where I could stay local, shape cloud solutions, and build something lasting—both in my career and at home.`}
                        <br /> <br />
                        {`I aligned with their cloud services practice, seamlessly navigating between technology enablement and delivery services. It was a role that challenged me technically while allowing me to build meaningful relationships—both at work and at home.`}
                    </p>

                    <h3 className="text-2xl font-bold mb-3">Independent Consultant</h3>
                    <p className="lg:text-xl m:text-base mb-10">
                        {`The pandemic prompted deep reflection. Consulting had always been my passion, but going independent gave me the freedom to offer truly unbiased recommendations while maintaining top-tier client standards. It’s been an exciting journey, and I look forward to what’s next—maybe with you!`}
                    </p>
                </div>
            </div>
        </section >
    )
}
