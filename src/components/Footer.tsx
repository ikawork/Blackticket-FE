import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const QUICK_LINKS = [
    {
        name: "All Events",
        link: "/events",
    },

    {
        name: "Contact Us",
        link: "/contact",
    },
    {
        name: "FAQ",
        link: "/faq",
    },
];

const LEGAL_LINKS = [
    {
        name: "Privacy Policy",
        link: "/privacy",
    },
    {
        name: "Terms of Service",
        link: "/terms",
    },
    {
        name: "Cookie Policy",
        link: "/cookie",
    },
];

const Footer = () => {
    return (
        <div className="w-full border-t border-t-[#6D6F7459] justify-center items-center flex flex-col  pb-6 h-30 pt-[110px] px-[143px] gap-[110px]">
            <div className=" w-full flex justify-between items-start">
                <h1 className="text-xl font-light">Bilethub</h1>
                <div className="flex flex-col gap-3 ">
                    <h2 className="text-xl font-normal">Quick Links</h2>
                    <ul className="flex flex-col gap-4">
                        {QUICK_LINKS.map((link) => (
                            <li
                                key={link.name}
                                className="hover:scale-110 hover:text-white transition-all duration-200 ease-in-out"
                            >
                                <Link className="text-sm font-light" href={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h2 className="text-xl font-normal">Legal</h2>
                    <ul className="flex flex-col gap-4">
                        {LEGAL_LINKS.map((link) => (
                            <li
                                key={link.name}
                                className="hover:scale-110 hover:text-white transition-all duration-200 ease-in-out"
                            >
                                <Link className="text-sm font-light " href={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-lg font-light">Connect With Us</h1>
                    <div className="flex w-full justify-between items-center ">
                        <FaFacebook className="text-[#717680] text-2xl hover:scale-125 cursor-pointer transition-all duration-200 ease-in-out" />
                        <FaLinkedin className="text-[#717680] text-2xl hover:scale-125 cursor-pointer transition-all duration-200 ease-in-out" />
                        <FaGoogle className="text-[#717680] text-2xl hover:scale-125 cursor-pointer transition-all duration-200 ease-in-out" />
                    </div>
                </div>
            </div>
            <div className="text-sm font-normal text-grey">
                © 2025 Bilethub. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
