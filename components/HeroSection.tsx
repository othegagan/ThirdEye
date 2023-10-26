import Image from "next/image";
import Balancer from "react-wrap-balancer";

const HeroSection = () => {
    return (
        <div className="bg-white" id="home">
            <section className="bg-[#FCF8F1] bg-opacity-30 pb-10 sm:pb-16 lg:pb-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <p className="text-xl font-bold md:text-3xl text-black ">
                                Welcome to{" "}
                                <span className="text-primary">
                                    ThirdEye..!
                                </span>
                            </p>

                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
                                {" "}
                                <Balancer>
                                    Empowering{" "}
                                    <span className="text-primary">
                                        Education for All.
                                    </span>{" "}
                                </Balancer>
                            </h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-lg">
                                {" "}
                                <Balancer>
                                    ThirdEye streamline tasks, foster
                                    personalized learning, and ensure equal
                                    resource access. Empower educators to create
                                    engaging assessments, curate curricula, and
                                    inspire student-driven learning.{" "}
                                </Balancer>
                            </p>

                            <a
                                href="#pricing"
                                title=""
                                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-full lg:mt-16 hover:bg-primary focus:bg-primary"
                                role="button">
                                Book a demo
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </a>
                        </div>

                        <div>
                            <img className="w-full" src="/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
