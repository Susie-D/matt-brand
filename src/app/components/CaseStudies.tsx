import Link from "next/link";

const CaseStudies = () => {
    return (
        <>
            <section className="bg-primary p-14 md:p-10 xl:p-14">
                <h2 id="case-studies" className="flex justify-center text-white font-semibold text-2xl sm:text-3xl lg:text-4xl italic text-center pb-6 sm:pb-10">
                    Case Studies
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 xl:gap-28">
                    <div className="bg-tertiary text-black p-5 rounded-lg self-center aspect-w-1 aspect-h-1 sm:h-auto">
                        <h3 className="text-xl sm:text-2xl font-semibold text-center my-2 leading-tight">
                            Securian Financial Cloud Transformation
                        </h3>
                        <p className="text-left my-4 text-base sm:text-lg leading-relaxed">
                            While a consultant at Slalom, Securian Financial implemented a $10M initiative to move all data center infrastructure to the Public Cloud. This transformation encompassed all aspects of transformation, including technology, financial, training, governance, and security.
                        </p>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg aspect-w-1 aspect-h-1 sm:h-auto">
                        <h3 className="text-xl sm:text-2xl font-semibold text-center my-2 leading-tight">
                            Deluxe Data Lake Build in AWS
                        </h3>
                        <p className="text-left my-4 text-base sm:text-lg leading-relaxed">
                            New product build in AWS utilizing serverless technologies and cutting edge ETL solutions that enabled monetization of mortgage data for marketing purposes. Worked closely with the Product Owner and Enterprise Architecture practice to boost business capabilities.
                        </p>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg aspect-w-1 aspect-h-1 sm:h-auto">
                        <h3 className="text-xl sm:text-2xl font-semibold text-center my-2 leading-tight">
                            3M Cloud Migration
                        </h3>
                        <p className="text-left my-4 text-base sm:text-lg leading-relaxed">
                            Considered one of the largest organizations in the World, the Minnesota Mining and Manufacturing Company in Maplewood made the strategic decision to move multiple data centers into the Cloud.
                        </p>
                        <Link legacyBehavior href="https://www.youtube.com/watch?v=NGixN9rCQy4&t" passHref={true}>
                            <a className="flex underline font-semibold justify-end mt-2">Watch the AWS re:Invent Video</a>
                        </Link>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg aspect-w-1 aspect-h-1 sm:h-auto">
                        <h3 className="text-xl sm:text-2xl font-semibold text-center my-2 leading-tight">
                            PayPal Cloud Business Case
                        </h3>
                        <p className="text-left my-4 text-base sm:text-lg leading-relaxed">
                            As part of merger with eBay in 2022, PayPal began evaluating options for payment processing in the cloud. Considered a new technology at the time, PayPal wanted to understand the technical feasibility and financial implications for staying on-prem vs two separate cloud providers.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CaseStudies;
