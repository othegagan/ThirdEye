"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import toast from "react-hot-toast";

const Pricing = () => {
    const [open, setOpen] = useState(false);
    const [process, setProcess] = useState(false);

    const [formTitle, setFormTitle] = useState("");

    const pricingFeatures = [
        {
            id: 1,
            desc: "Self Evaluation Mobile App",
        },
        {
            id: 2,
            desc: " Curriculum and assessment Management",
        },
        {
            id: 3,
            desc: " Web Admin Portal htmlFor School ERP",
        },
        {
            id: 4,
            desc: "Personalized Learning",
        },
    ];

    const sendEmail = async (e: any) => {
        e.preventDefault();
        setProcess(true);
        // Create a FormData object
        const formData = new FormData(e.target);

        const object = Object.fromEntries(formData);
        const data = JSON.stringify(object);

        const response = await fetch("api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });

        if (response.status === 200) {
            toast(
                () => (
                    <span className="p-4 text-lg px-6 font-semibold flex gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            className="text-green-500"
                            fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                                fill="currentColor"
                            />
                        </svg>
                        Email sent successfully..!
                    </span>
                ),
                {
                    duration: 5000,
                    position: "bottom-center",
                }
            );
            setOpen(false);
            setProcess(false);
        } else {
            toast(
                () => (
                    <span className="p-4 text-lg px-6 font-semibold flex gap-3 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            className="text-red-500 scale-150">
                            <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z" />
                        </svg>
                        Something went wrong, Please Try again..!
                    </span>
                ),
                {
                    duration: 5000,
                    position: "bottom-center",
                }
            );
            setOpen(false);
            setProcess(false);
        }
    };

    return (
        <>
            <section
                className="py-10 bg-zinc-100 sm:py-16 lg:py-24"
                id="pricing">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-primary font-extrabold uppercase text-[1.25rem] leading-3 mb-[1.5rem]">
                            Pricing
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Pricing & Plans
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-zinc-600">
                            Choose the pricing plan that best suits your
                            institution's needs and embark on a journey towards
                            educational excellence with Third Eye.
                        </p>
                    </div>

                    <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
                        <div className="bg-white border-4 border-transparent h-min shadow-md rounded-[1.25rem]">
                            <div className="p-6 md:py-10 md:px-9">
                                <div className="inline-block px-4 py-2 bg-zinc-100 rounded-full">
                                    <h3 className="text-sm font-semibold text-zinc-900">
                                        Standard
                                    </h3>
                                </div>
                                <p className="mt-5 text-4xl font-bold text-black">
                                    $1{" "}
                                    <span className="mt-2 text-base text-zinc-600">
                                        Per Student/day
                                    </span>
                                </p>

                                <ul className="flex flex-col mt-8 space-y-4">
                                    {pricingFeatures.map((feature) => (
                                        <li
                                            key={feature.id}
                                            className="inline-flex items-center space-x-2">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-base font-medium text-zinc-900">
                                                {" "}
                                                {feature.desc}{" "}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-zinc-800 rounded-full hover:bg-zinc-800/90 focus:bg-zinc-600 "
                                    role="button"
                                    onClick={() => {
                                        setOpen(true);
                                        setFormTitle("Book a demo");
                                    }}>
                                    {" "}
                                    Book a Demo{" "}
                                </button>
                            </div>
                        </div>

                        <div className="bg-white border-4 border-primary rounded-[1.25rem]">
                            <div className="p-6 md:py-10 md:px-9">
                                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                                    <h3 className="text-sm font-semibold text-primborder-primary">
                                        Enterprise
                                    </h3>
                                </div>
                                <p className="mt-5 text-2xl font-bold text-black">
                                    Connect with Sales team
                                </p>

                                <ul className="flex flex-col mt-8 space-y-4">
                                    {pricingFeatures.map((feature) => (
                                        <li
                                            key={feature.id}
                                            className="inline-flex items-center space-x-2">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-base font-medium text-zinc-900">
                                                {" "}
                                                {feature.desc}{" "}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-full bg-primary  hover:opacity-80 focus:opacity-80"
                                    role="button"
                                    onClick={() => {
                                        setOpen(true);
                                        setFormTitle("Contact Sales Team");
                                    }}>
                                    Contact Sales team{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-neutral-800 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 justify-start  w-full sm:max-w-3xl">
                                    <form onSubmit={sendEmail}>
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                            <div className="sm:flex sm:items-start">
                                                <div className="mt-3  sm:ml-4 sm:mt-0 sm:text-left w-full">
                                                    <Dialog.Title
                                                        as="h1"
                                                        className="text-lg sm:text-2xl sm mb-6 font-semibold leading-6 text-gray-900">
                                                        {formTitle}
                                                    </Dialog.Title>

                                                    <div className="my-2 w-full">
                                                        <div className="grid gap-4 lg:gap-6">
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                                <div className="grid gap-2">
                                                                    <label
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                        htmlFor="name">
                                                                        Name{" "}
                                                                        <span className="text-red-500">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                        id="name"
                                                                        name="name"
                                                                        placeholder="Enter your full name"
                                                                        required
                                                                    />
                                                                </div>

                                                                <div className="grid gap-2">
                                                                    <label
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                        htmlFor="name">
                                                                        Phone
                                                                        Number{" "}
                                                                        <span className="text-red-500">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                        id="phoneNumber"
                                                                        name="phoneNumber"
                                                                        placeholder="Enter  phone number"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label
                                                                    htmlFor="hs-work-email-hire-us-2"
                                                                    className="block text-sm text-gray-700 font-medium ">
                                                                    Work Email{" "}
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    id="email"
                                                                    name="email"
                                                                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                    placeholder="Enter your email address"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                                                <div className="grid gap-2">
                                                                    <label
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                        htmlFor="name">
                                                                        Institution
                                                                        Name{" "}
                                                                        <span className="text-red-500">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                        id="institutionName"
                                                                        name="institutionName"
                                                                        placeholder="Enter your institution name"
                                                                    />
                                                                </div>

                                                                <div className="grid gap-2">
                                                                    <label
                                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                                        htmlFor="name">
                                                                        Designation
                                                                    </label>
                                                                    <input
                                                                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                        id="designation"
                                                                        name="designation"
                                                                        placeholder="Enter your designation"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <label className="block text-sm text-gray-700 font-medium ">
                                                                    Message
                                                                    <span className="text-red-500">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <textarea
                                                                    id="message"
                                                                    name="message"
                                                                    className="flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-400  ring-0 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary "
                                                                    required
                                                                    placeholder="Enter your message"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            {!process && (
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                                                    Submit
                                                </button>
                                            )}
                                            {process && (
                                                <button
                                                    disabled
                                                    className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-lg font-semibold text-zinc-200 shadow-sm  sm:ml-3 sm:w-auto cursor-not-allowed items-center">

                                                    <svg
                                                        fill="#ffffff"
                                                        height="64px"
                                                        className="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600"
                                                        width="64px"
                                                        version="1.1"
                                                        id="Layer_1"
                                                        viewBox="0 0 330 330">
                                                        <g
                                                            id="SVGRepo_bgCarrier"
                                                            stroke-width="0"></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            {" "}
                                                            <g id="XMLID_19_">
                                                                {" "}
                                                                <path
                                                                    id="XMLID_20_"
                                                                    d="M307.5,150h-60c-8.284,0-15,6.716-15,15s6.716,15,15,15h60c8.284,0,15-6.716,15-15S315.784,150,307.5,150z"></path>{" "}
                                                                <path
                                                                    id="XMLID_21_"
                                                                    d="M52.5,150h-30c-8.284,0-15,6.716-15,15s6.716,15,15,15h30c8.284,0,15-6.716,15-15S60.784,150,52.5,150z"></path>{" "}
                                                                <path
                                                                    id="XMLID_22_"
                                                                    d="M157.5,240c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-60 C172.5,246.716,165.784,240,157.5,240z"></path>{" "}
                                                                <path
                                                                    id="XMLID_23_"
                                                                    d="M157.5,0c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V15 C172.5,6.716,165.784,0,157.5,0z"></path>{" "}
                                                                <path
                                                                    id="XMLID_24_"
                                                                    d="M231.746,218.033c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l42.427,42.427 c2.929,2.929,6.767,4.393,10.606,4.393s7.678-1.464,10.607-4.393c5.858-5.858,5.858-15.355,0-21.213L231.746,218.033z"></path>{" "}
                                                                <path
                                                                    id="XMLID_25_"
                                                                    d="M62.04,48.328c-5.857-5.857-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.356,0,21.213l42.427,42.426 c2.929,2.929,6.768,4.393,10.606,4.393c3.839,0,7.678-1.464,10.607-4.394c5.857-5.858,5.857-15.355,0-21.213L62.04,48.328z"></path>{" "}
                                                                <path
                                                                    id="XMLID_26_"
                                                                    d="M221.14,116.36c3.838,0,7.678-1.465,10.607-4.393l42.427-42.426c5.858-5.858,5.858-15.355,0-21.213 c-5.859-5.858-15.355-5.857-21.213,0l-42.427,42.426c-5.858,5.858-5.858,15.355,0,21.213 C213.462,114.896,217.3,116.36,221.14,116.36z"></path>{" "}
                                                            </g>{" "}
                                                        </g>
                                                    </svg>
                                                    Sending...
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Pricing;
