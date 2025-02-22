
export default function Testimonials() {
    return (
        <section className="bg-secondary p-14">
            <h2 className="flex justify-center text-white font-semibold text-4xl italic text-center pb-10">What Clients Are Saying...</h2>
            <div className="grid grid-row-1 grid-cols-4 gap-4">
                <div className='content-around'>
                    <p className='italic mb-3'> “Matt was instrumental in our assessment of thousands of applications in our global portfolio, a key integrator between our business objectives and technology capabilities.”</p>
                    <p className='m-0 text-xs'>
                        Ayman Nasser, Cargill
                    </p>
                    <div className="m-0 text-xs font-bold">
                        Global IT Modernization Lead
                    </div>
                </div>
                <img src="/laptop.svg" alt="Public Folder Image" width="100%" />
                <div className='content-around'>
                    <p className='italic mb-3'> “We really appreciated the detailed migration planning, which ecompassed chattiness between servers at an individual level and tagging to appropriately track our FinOps.”</p>
                    <p className='m-0 text-xs'>
                        Aaron Murray, Securian Financial Enterprise
                    </p>
                    <div className="m-0 text-xs font-bold">
                        Cloud Director
                    </div>
                </div>
                <img src="/street.svg" alt="Public Folder Image" width="100%" />
            </div>
        </section >
    )
}
