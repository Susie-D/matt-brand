import Image from "next/image";

export default function Location() {
    return (
        <section className="bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                <div id="location" className="w-full h-full flex justify-center items-center">
                    <Image src="MSP.svg" alt="Minneapolis location map"
                        width={200}
                        height={200} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center items-center p-12 w-full">
                    <div className="text-center text-xl">
                        <p className="lg:text-3xl m:text-lg">
                            60 South 6th Street, Suite 2800
                            <br />
                            Minneapolis, MN&nbsp; 55401
                        </p>
                        <br />
                        <p className="lg:text-2xl m:text-lg font-bold">Hours</p>
                        <div className="lg:text-2xl m:text-lg">
                            <p>Monday – Friday <br /> 9am – 5pm</p>
                        </div>
                        <br />
                        <div className="lg:text-2xl m:text-lg">
                            <p className="lg:text-2xl m:text-lg font-bold">Phone</p>
                            <p>(612) 214 - 2833</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
