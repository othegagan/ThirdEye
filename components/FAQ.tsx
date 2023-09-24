import React from 'react'

const FAQ = () => {
    const FAQData = [
        {
            title: "How to create an account?",
            description: "Third Eye is a comprehensive educational platform that facilitates assessment management, personalized learning, resource sharing, and administrative tasks for educational institutions.",
        },
        {
            title: "Does Third Eye support remote learning?",
            description: "Absolutely! Third Eye's digital platform allows for seamless remote learning by providing access to assessments, resources, and communication tools from anywhere.",
        },
        {
            title: "How can Third Eye benefit my school or institution?",
            description: "Third Eye simplifies administrative work, fosters personalized learning, boosts communication and collaboration, and guarantees fair resource access, ultimately resulting in better educational results.",
        },
        {
            title: "Can Third Eye help in selecting appropriate resources for students?",
            description: "Yes, Third Eye offers a resource repository that allows educators to select and share appropriate educational resources to support student learning.",
        },
        {
            title: "How does Third Eye support personalized learning?",
            description: "Yes, Third Eye provides data analytics and reporting features that enable educators to track student progress, identify areas of improvement, and make data-driven instructional decisions.",
        },
        {
            title: "Can Third Eye support collaboration between teachers, students, and parents?",
            description: "Yes, Third Eye offers communication and collaboration features that facilitate seamless interaction and engagement among teachers, students, and parents.",
        },
    ];


    return (
        <div >
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className='text-primary font-extrabold  text-[1.25rem]  mb-[1.5rem] leading-snug'>FAQs</p>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Explore the answers to your most common questions about Third Eye's educational platform.</p>
                    </div>

                    <div className=" mx-auto mt-8 gap-5 md:mt-16 grid grid-cols-1 lg:grid-cols-2">
                        {
                            FAQData.map((item) => (
                                <div key={item.title} className="transition-all  duration-200 bg-white border rounded-[0.65rem] border-gray-200 hover:shadow-lg  hover:bg-gray-50  px-4 py-5 sm:p-6 space-y-[1rem] h-min">
                                    <h2 className="flex text-[1.5rem] leading-[1.25]  font-semibold text-black"> {item.title} </h2>
                                    <p>{item.description}</p>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </section>



        </div>
    )
}

export default FAQ