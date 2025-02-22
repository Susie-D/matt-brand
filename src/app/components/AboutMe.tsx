
export default function AboutMe() {
    return (
        <section className="bg-white">
            <div className="grid grid-row-1 grid-cols-2">
                <img src="/sky.svg" alt="view out of an airplane" width="100%" />
                <div className='content-around mr-14 align-center'>
                    <h2 className="flex justify-left text-black font-semibold text-4xl italic text-center mb-10">My Cloud Journey</h2>
                    <h3 className='text-xl font-bold mb-3'>Beginnings</h3>
                    <p className='text-sm'>
                        It didn’t take long for me to realize that technology was the place that I wanted to be! Shortly after graduating from the University of Minnesota - Twin Cities with an engineering degree, I started working for Deloitte Consuling, traveling the country every Monday - Thursday for 4 years! Deloitte accelerated my career, feeling more like 8 years of experience.
                    </p>
                    <h3 className='text-xl font-bold mb-3'>Local Model</h3>
                    <p className='text-sm'>
                        I was tired of travel and I wanted to start a family! In 2018 I got married and we our daughter Adeline was born in early 2019. I chose to stay with the local model and joined Slalom Consulting. I was aligned with their cloud services and would float between technology enablement and delivery services.
                    </p>
                    <h3 className='text-xl font-bold mb-3'>Independent Consultant</h3>
                    <p className='text-sm'>
                        In light of the pandemic it came time to really reflect on the direction I wanted to take. Consulting had always been perfect for me and the thought of being an independent took it to the next level! Now I could be fully unbiased in my recommendations while maintaining the same client standards that I had learned to adhere to! It’s been a great journey and I hope your next!
                    </p>
                </div>
            </div>
        </section>
    )
}
