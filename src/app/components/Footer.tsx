
export default function Footer() {
    return (
        <section className="bg-primary py-10">
            <div className="grid md:grid-cols-2 text-white">
                <div className='content-around align-center'>
                    <h2 className="flex justify-left font-semibold text-4xl italic text-center m-10">Matt Schober</h2>
                </div>
                <div className="text-xl m-10 text-right">
                    <br />
                    <div className="lg:text-2xl m:text-lg">
                        <p className="font-bold">Mailing</p>
                        <p>Schober Consulting, LLC</p>
                        <p>2136 Ford Parkway #8069</p>
                        <p>St. Paul, MN&nbsp; 55116</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
