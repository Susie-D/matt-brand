
export default function Location() {
    return (
        <section className="bg-secondary">
            <div className="grid md:grid-cols-2">
                <img src="MSP.svg" alt="phone and accessories" className="w-half lg:h-full sm:h-full sm:w-half object-cover" />
                <div className="flex flex-col items-center justify-center content-center space-y-4">
                    <div className="text-xl sm:m-12 xs:m-12">
                        <p className="text-xl">
                            60 South 6th Street, Suite 2800
                            <br />
                            Minneapolis, MN&nbsp; 55401
                        </p>
                        <br />
                        <p className="font-bold">Hours</p>
                        <p>Monday – Friday <br /> 9am – 5pm</p>
                        <br />
                        <p className="font-bold">Phone</p>
                        <p>(612) 214 - 2833</p>
                    </div>
                </div>
            </div>
        </section >
    );
}
