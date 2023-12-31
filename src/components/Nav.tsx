"use client"

import React, { useState } from "react";
import Button from "./Button";

const Nav = () => {

    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOGS", link: "/" },
        { name: "CONTACT", link: "/" },
    ];

    let [open, setOpen] = useState(false);

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 font-sans font-inter text-base leading-normal text-left tracking-tighter text-fill-fill bg-copy-background">
                    <span className="text-3xl text-indigo-600 mr-2 pb-1">
                        <img width="25" height="25" src="https://img.icons8.com/ios/50/combo-chart--v1.png" alt="combo-chart--v1" />
                    </span>
                    PAYSPACE
                </div>

                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}
                    {/* {open ? <img width="25" height="25" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" /> : <img width="25" height="25" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" />} */}

                    {open ? <img width="25" height="25" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" /> : <img width="25" height="25" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} font-sans font-inter text-base leading-normal text-left tracking-tighter`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 font-sans font-inter text-xs leading-normal text-left tracking-tight text-fill-fill bg-copy-background">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <Button>Get Started</Button>

                    <Button>Read More</Button>
                </ul>
            </div>
        </div>
    )
}

export default Nav;