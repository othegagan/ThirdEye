
const Features = () => {


    const educationStrategies = [
        {
            id: 1,
            title: "Equitable Access to Resources",
            description:
                "Share educational resources to ensure that all students have access to quality learning materials.",
        },
        {
            id: 2,
            title: "Student Self-Evaluation",
            description:
                "Empower students to track their progress and identify areas where they need to improve with the Third Eye mobile app.",
        },
        {
            id: 3,
            title: "Streamlined Administrative Tasks",
            description:
                "Manage curricula and assessments on a centralized platform to save time and effort for educators.",
        },
        {
            id: 4,
            title: "Learning Outcomes Focus",
            description:
                "Emphasize learning outcomes and align education with the National Education Policy to deliver a high-quality education.",
        },
        {
            id: 5,
            title: "Personalized Learning",
            description:
                "Tailor assessments and assignments to meet individual student needs to ensure that all students are challenged and supported at the right level.",
        },
        {
            id: 6,
            title: "Collaborative Learning",
            description:
                "Foster seamless collaboration between teachers, students, and parents for an engaged learning community.",
        },
    ];


    return (
        <>

            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-primary font-extrabold uppercase text-[1.25rem] leading-3 mb-[1.5rem]">
                            Features
                        </p>
                        <h2 className="text-3xl font-bold  text-black sm:text-4xl ">
                            We are always working to provide best of the all
                            features in all aspects.
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            Install our top-rated dropshipping app to your
                            e-commerce site and get access to US Suppliers,
                            AliExpress vendors, and the best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {educationStrategies.map((item) => (
                            <div
                                key={item.id}
                                className={`overflow-hidden h-min ${
                                    item.id % 2 === 0
                                        ? "bg-white"
                                        : "bg-primary/10"
                                } rounded-[0.625rem] shadow p-[1.25rem]`}>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center">
                                        {/* <Image width="48" height={48} className="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" /> */}
                                        <div className="h-12 w-12 rounded-md ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-12 h-12">
                                                <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                                            </svg>
                                        </div>
                                        <p className="ml-5 mr-auto text-xl font-semibold text-[#141414]">
                                            {item.title}
                                        </p>
                                    </div>
                                    <p className="text-base leading-relaxed text-[#1E1E1E]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
