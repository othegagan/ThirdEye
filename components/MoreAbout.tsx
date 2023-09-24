import React from 'react'

const MoreAbout = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12">

                    <div className="relative">
                        <img className=" object-cover" src="/feature.png" alt="" />
                        <img className="absolute -bottom-4 left-12 hidden md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />
                    </div>


                    <div className="">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">By Joining ThirdEye, <br /> One Can Avail a Lot Of Benefits.</h2>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-800">Third Eye represents the pinnacle of educational solutions, providing a transformative experience for educational institutions dedicated to enhancing their teaching and learning methods. Our comprehensive platform redefines educational administration and management, extending empowerment to teachers, students, and parents alike.</p>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-800">With Third Eye, administrative tasks are elegantly streamlined, freeing educators to concentrate on delivering top-notch instruction. Our platform champions personalized learning, offering tailor-made assessments and assignments that cater to the unique requirements of each student. It also facilitates ongoing evaluation, enabling educators to monitor student progress and provide timely, constructive feedback that fuels improved learning outcomes.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MoreAbout