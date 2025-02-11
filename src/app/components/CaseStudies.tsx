import Link from "next/link";

const CaseStudies = () => {
    return (
        <>
            <section className="bg-primary p-14">
                <h2 className="flex justify-center text-white font-semibold text-4xl italic text-center pb-10">Case Studies</h2>
                <div className="grid grid-cols-4 gap-10 xl:gap-16 xl:p-16">
                    <div className="bg-tertiary text-black p-5 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center my-2">
                            Securian Financial Cloud Transformation
                        </h3>
                        <span className="flex text-center my-4">
                            While a consultant at Slalom, Securian Financial implemented a $10M initiative to move all data center infrastructure to the Public Cloud. This transformation encompassed all aspects of transformation, including technology, financial, training, governance, and security.
                        </span>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center my-2">
                            Deluxe Data Lake Build in AWS
                        </h3>
                        <span className="flex text-center my-4">
                            New product build in AWS utilizing serverless technologies and cutting edge ETL solutions that enabled monetization of mortgage data for marketing purposes. Worked closely with the Product Owner and Enterprise Architecture practice to boost business capabilities.
                        </span>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center my-2">
                            3M Cloud Migration
                        </h3>
                        <span className="flex text-center my-4">
                            Considered one of the largest organizations in the World, the Minnesota Mining and Manufacturing Company in Maplewood made the strategic decision to move multiple data centers into the Cloud.
                        </span>
                        <Link legacyBehavior href="https://www.youtube.com/watch?v=NGixN9rCQy4&t" passHref={true}>
                            <a className="flex underline font-semibold justify-end">Watch the AWS re:Invent Video</a>
                        </Link>
                    </div>
                    <div className="bg-tertiary text-black p-5 rounded-lg">
                        <h3 className="text-2xl font-semibold text-center my-2">
                            PayPal Cloud Business Case
                        </h3>
                        <span className="flex text-center my-4">
                            As part of merger with eBay in 2022, PayPal began evaluating options for payment processing in the cloud. Considered a new technology at the time, PayPal wanted to understand the technical feasibility and financial implications for staying on-prem vs two separate cloud providers.
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}

export default CaseStudies;

