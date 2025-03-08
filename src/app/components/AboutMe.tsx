export default function AboutMe() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                    src="/sky.svg"
                    alt="view out of an airplane"
                    className="w-half lg:h-full sm:h-full sm:w-half object-cover"
                />
                <div className='p-12'>
                    <h2 className="flex justify-left text-black font-semibold text-4xl italic text-center mb-10">My Cloud Journey</h2>
                    <h3 className='text-xl font-bold mb-3'>Beginnings</h3>
                    <p className='text-base mb-10'>
                        It didn’t take long for me to realize that technology was where I wanted to focus my career. After graduating from the University of Minnesota - Twin Cities with an engineering degree, I joined Deloitte Consulting, where I traveled across the country every week for 4 years. The experience was invaluable, accelerating my growth and equipping me with skills that felt like 8 years of experience compressed into 4.
                    </p>
                    <h3 className='text-xl font-bold mb-3'>Local Model</h3>
                    <p className='text-base mb-10'>
                        I was tired of travel and I wanted to start a family! In 2018 I got married and we our daughter Adeline was born in early 2019. I chose to stay with the local model and joined Slalom Consulting. I was aligned with their cloud services and would float between technology enablement and delivery services.
                    </p>
                    <h3 className='text-xl font-bold mb-3'>Independent Consultant</h3>
                     <p className='text-base mb-10'>
                        In light of the pandemic it came time to really reflect on the direction I wanted to take. Consulting had always been perfect for me and the thought of being an independent took it to the next level! Now I could be fully unbiased in my recommendations while maintaining the same client standards that I had learned to adhere to! It’s been a great journey and I hope your next!
                    </p>
                </div>
            </div>
        </section>
    )
}
