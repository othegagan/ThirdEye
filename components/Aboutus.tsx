
const Aboutus = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12">


                    <div className="space-y-8">
                        <p className='text-primary font-extrabold uppercase text-[1.25rem] leading-3 mb-[1.5rem]'>About Us</p>

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Unlock Limitless Learning Potential with Third Eye</h2>
                        <p className=" text-sm leading-relaxed text-zinc-800">ThirdEye is a cutting-edge educational platform that seamlessly integrates assessment management, resource sharing, and personalized learning capabilities. Our platform serves as a central nexus, fostering collaboration among teachers, students, and parents, all while creating an immersive and interactive learning atmosphere.</p>
                        <p className=" text-sm leading-relaxed text-zinc-800">By harnessing the potential of technology, ThirdEye enables educational institutions to provide impactful and inclusive education, perfectly aligned with the principles of the National Education Policy.</p>
                        <button className='text-white bg-primary py-3 px-6 rounded-full flex gap-3 items-center '>
                            Contact <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                            </svg>

                        </button>
                    </div>


                    <div className="relative">
                        <img className=" object-cover" src="/about.png" alt="" />

                    </div>

                </div>
            </div>
        </section>


    )
}

export default Aboutus