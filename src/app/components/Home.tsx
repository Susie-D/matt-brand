"use server";
import Image from "next/image";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section id="home" className="flex flex-col md:flex-row items-center bg-white h-auto p-10 sm:p-10 md:p-20 gap-8 md:gap-16 overflow-auto">
                <div className="flex justify-center md:ml-auto w-full md:w-5/6 text-center md:text-left">
                    <div className="text-primary xs:mx-14 md:mx-0 sm:mx-40">
                        <h3 className="text-3xl sm:text-4xl my-2">{`Hey, I'm Matt`}</h3>
                        <h4 className="lg:text-2xl md:text-xl sm:text-base xs:text-lg text-left my-6">
                            I am a Project Manager with expertise in technology, leading and driving Cloud Projects from start to finish. I specialize in orchestrating seamless{" "}
                            <strong>cloud migrations, optimizing infrastructure,</strong> and ensuring efficient project delivery by{" "}
                            <strong>aligning business goals with technical solutions.</strong>
                        </h4>
                        <div className="flex justify-self-end">
                            <button className="relative mt-4 flex justify-center items-center py-4 px-6 mx-auto md:mx-0 rounded-xl text-white font-bold text-lg border-1 bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent box-border">
                                <span className="relative z-10 lg:text-2xl md:text-xl">Work with Me</span>
                                <svg className="ml-2 w-5 h-5 self-center transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:mr-auto">
                    <div className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <Image width={1034} height={961} className="w-full h-auto" src="/Matt.svg" alt="Matt's photo" />
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-secondary h-auto w-full flex justify-center py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-40 w-full px-10">
                    {/* First */}
                    <div className="flex flex-col items-center text-center w-full">
                        <Image
                            width={100}
                            height={100}
                            src="/consulting.svg"
                            alt="Icon representing consulting, showing a group of people"
                            className="object-contain"
                        />
                        <h4 className="font-semibold mt-3 text-xl sm:text-2xl leading-tight">Consulting 11+ Years</h4>
                        <p className="text-base sm:text-lg leading-relaxed mt-2">Worked with dozens of corporate clients and gained international exposure.</p>
                    </div>
                    {/* Second */}
                    <div className="flex flex-col items-center text-center w-full">
                        <Image
                            width={100}
                            height={100}
                            src="/buildings.svg"
                            alt="Icon of corporate buildings symbolizing Fortune 500 exposure"
                            className="object-contain"
                        />
                        <h4 className="font-semibold mt-3 text-xl sm:text-2xl leading-tight">Fortune 500 Exposure</h4>
                        <p className="text-base sm:text-lg leading-relaxed mt-2">Thrives in high-stakes environments, ensuring clarity and decisive action amid complexity.</p>
                    </div>
                    {/* Third */}
                    <div className="flex flex-col items-center text-center w-full">
                        <Image
                            width={100}
                            height={100}
                            src="/ribbon.svg"
                            alt="Ribbon icon symbolizing proven track record"
                            className="object-contain"
                        />
                        <h4 className="font-semibold mt-3 text-xl sm:text-2xl leading-tight">Proven Track Record</h4>
                        <p className="text-base sm:text-lg leading-relaxed mt-2">Careers at Deloitte (13)* and Slalom Consulting (17)*</p>
                        <p className="text-xs italic mt-2">*Fortune Top Workplaces</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
