"use server"
import Image from "next/image";


const Home = () => {
    return (
        <>
            <section id="home" className="flex items-center bg-white h-auto px-20 gap-16 overflow-auto">
                <div className="flex content-center justify-center ml-auto w-5/6">
                    <div className="text-primary">
                        <h3 className="text-4xl my-2">{`Hey, I'm Matt`}</h3>
                        <h4 className="text-base my-6">I am Project Manager with expertise in technology, leading and driving Cloud Projects to from start to finish. I specialize in orchestrating seamless <b>cloud migrations, optimizing infrastructure,</b> and ensuring efficient project delivery by <b>aligning business goals with technical solutions.</b></h4>
                        <button className="flex py-4 justify-self-end hover:text-primary hover:bg-tertiary border-solid border-2 hover:border-white rounded-lg bg-primary text-white border-secondary">
                            <span className="flex text-nowrap font-bold mx-10 lg:text-xs text-sm">{'Work with Me'}
                            </span>
                        </button>
                    </div>
                </div>
                <div className=" flex content-center justify-center mr-auto">
                    <div className="rounded-lg shadow-[rgba(0,0,15,0.1)_10px_5px_4px_0px]">
                        <Image width={1034} height={961} className="max-h-85" layout="responsive" objectFit="contain" src="Matt.svg" alt="matt's photo" />
                    </div>
                </div>
            </section>
            <section className="bg-secondary h-auto w-full flex justify-around text-black py-5">
                <div className="flex flex-wrap md:grid md:grid-cols-3 gap-10 md:gap-30 justify-center max-w-5xl">
                    {/* First */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <Image width={50} height={50} src="./consulting.svg" alt="people icon" />
                        <h4 className="font-bold mt-3">Consulting 11+ Years</h4>
                        <p>Work at dozens of corporate clients and international exposure.</p>
                    </div>
                    {/* Second */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <Image width={50} height={50} src="./buildings.svg" alt="building icon" />
                        <h4 className="font-bold mt-3">Fortune 500 Exposure</h4>
                        <p>Thrives in fast high-stakes environments, ensuring clarity and decisive action amid complexity.</p>
                    </div>
                    {/* Third */}
                    <div className="flex flex-col items-center text-center max-w-xs">
                        <Image width={50} height={50} src="./ribbon.svg" alt="ribbon icon" />
                        <h4 className="font-bold mt-3">Proven Track Record</h4>
                        <p>Careers at Deloitte (13)* and Slalom Consulting (17)*</p>
                        <p className="text-xs italic mt-2">*Fortune Top Workplaces</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;