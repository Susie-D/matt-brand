"use server"
import Image from "next/image";


const Home = () => {
    return (
        <section id="home" className="flex items-center bg-white h-[400px] px-20 gap-16 overflow-auto">
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
                    <Image width={1034} height={961} className="max-h-85" layout="responsive" objectFit="contain" src="./matt.svg" alt="matt's photo" />
                </div>
            </div>
        </section>
    )
}

export default Home;