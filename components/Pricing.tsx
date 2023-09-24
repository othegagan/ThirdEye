
const Pricing = () => {


    const pricingFeatures = [
        {
            "id": 1,
            "desc": "Self Evaluation Mobile App",
        },
        {
            "id": 2,
            "desc": " Curriculum and assessment Management",
        },
        {
            "id": 3,
            "desc": " Web Admin Portal for School ERP",
        },
        {
            "id": 4,
            "desc": "Personalized Learning",
        }
    ]

    return (

        <section className="py-10 bg-zinc-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <p className='text-primary font-extrabold uppercase text-[1.25rem] leading-3 mb-[1.5rem]'>Pricing</p>

                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-zinc-600">Choose the pricing plan that best suits your institution's needs and embark on a journey towards educational excellence with Third Eye.</p>
                </div>

                <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
                    <div className="bg-white border-4 border-transparent h-min shadow-md rounded-[1.25rem]">
                        <div className="p-6 md:py-10 md:px-9">
                            <div className="inline-block px-4 py-2 bg-zinc-100 rounded-full">
                                <h3 className="text-sm font-semibold text-zinc-900">Standard</h3>
                            </div>
                            <p className="mt-5 text-4xl font-bold text-black">$1 <span className="mt-2 text-base text-zinc-600">Per Student/day</span></p>


                            <ul className="flex flex-col mt-8 space-y-4">

                                {pricingFeatures.map((feature) => (
                                    <li key={feature.id} className="inline-flex items-center space-x-2">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="text-base font-medium text-zinc-900"> {feature.desc} </span>
                                    </li>))
                                }

                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-zinc-800 rounded-full hover:bg-zinc-800/90 focus:bg-zinc-600 " role="button"> Book a Demo </a>


                        </div>
                    </div>

                    <div className="bg-white border-4 border-primary rounded-[1.25rem]">
                        <div className="p-6 md:py-10 md:px-9">
                            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                                <h3 className="text-sm font-semibold text-primborder-primary">Enterprise</h3>
                            </div>
                            <p className="mt-5 text-2xl font-bold text-black">Connect with Sales team</p>


                            <ul className="flex flex-col mt-8 space-y-4">

                                {pricingFeatures.map((feature) => (
                                    <li key={feature.id} className="inline-flex items-center space-x-2">
                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span className="text-base font-medium text-zinc-900"> {feature.desc} </span>
                                    </li>))
                                }

                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-full bg-primary  hover:opacity-80 focus:opacity-80" role="button">Contact Sales team </a>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing