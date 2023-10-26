"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Pricing = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

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

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData(e.target);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        console.log(json);
        e.target.reset();

        setMessage("Thank You for contacting..!");
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
                                        setFormTitle("Contact Sale Team");
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
                                    {message == "" && (
                                        <form onSubmit={handleSubmit}>
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
                                                                        Work
                                                                        Email{" "}
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
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {message != "" && (
                                        <div className="p-4 sm:p-10 text-center overflow-y-auto">
                                            <span className="mb-4 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 ">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                                                </svg>
                                            </span>

                                            <span className="hidden flex-shrink-0  justify-center items-center w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:bg-red-700 dark:border-red-600 dark:text-red-100">
                                                <svg
                                                    className="w-5 h-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                                </svg>
                                            </span>

                                            <h3 className="mb-2 text-xl font-bold text-gray-800 ">
                                                Email has been sent!
                                            </h3>
                                            {/* <p className="text-gray-500">
                                                You can see the progress of your
                                                task in your You will be
                                                notified of its completion.
                                            </p> */}

                                            <div className="mt-6 flex justify-center gap-x-4">
                                                <button
                                                    onClick={() => {
                                                        setOpen(false);
                                                        setMessage("");
                                                    }}
                                                    type="button"
                                                    className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                                    OK
                                                </button>
                                            </div>
                                        </div>
                                    )}
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
