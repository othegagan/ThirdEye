import React from 'react'

const MoreAbout = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24" id='more-about'>
            <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12">

                    <div className="relative">
                        <img className=" object-cover" src="/feature.png" alt="" />
                        <img className="absolute -bottom-4 left-12 hidden md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />
                    </div>


                    <div className="">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Unlock Limitless Learning Potential with ThirdEye </h2>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-800"> Third Eye is the ultimate solution for educational institutions seeking to elevate their teaching and learning practices. Our comprehensive platform revolutionized educational administration and management, empowering teachers, students, and parents alike. With Third Eye, administrative tasks are streamlined, enabling educators to focus more on delivering high- quality instruction. Our platform promotes personalized learning by offering tailored assessments and assignments to meet the unique needs of each student. </p>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-800">It also facilitates continuous evaluation, allowing educators to track student progress and provide timely feedback for improved learning outcomes. With a robust resource repository and seamless communication tools, Third Eye fosters collaboration and ensures equitable access to educational resources. Experience the transformative power of Third Eye and embark on a journey of limitless learning potential.</p>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default MoreAbout