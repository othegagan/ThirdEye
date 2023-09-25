"use client"

import { useState } from "react"

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            "name": "About",
            "links": "#about"
        },
        {
            "name": "Features",
            "links": "#features"
        },
        {
            "name": "Pricing",
            "links": "#pricing"
        },
        {
            "name": "FAQ's",
            "links": "#FAQ"
        }
    ]

    return (
        <header className=" bg-white lg:pb-0">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="/logo.svg" alt="" />
                        </a>
                    </div>

                    <button type="button" onClick={() => { setOpen(!open) }} className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">

                        <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                        </svg>


                        <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        {navLinks.map(link => (
                            <a href={link.links} title="" key={link.name} className="text-base font-medium text-black transition-all duration-200 hover:text-primary focus:text-primary"> {link.name} </a>
                        ))}

                    </div>



                    <a href="https://school360-test.web.app/" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full lg:inline-flex hover:bg-green-700 focus:bg-green-700" role="button"> Sign In </a>
                </nav>

                {open && (<nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md ">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            {navLinks.map(link => (
                                <a href={link.links} key={link.links} className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-primary focus:text-primary"> {link.name} </a>
                            ))}
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <a href="https://school360-test.web.app/" title="" className="items-center justify-center  px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-full lg:inline-flex hover:bg-green-700 focus:bg-green-700" role="button"> Sign In </a>
                    </div>
                </nav>)}

            </div>
        </header>

    )
}

export default NavBar
