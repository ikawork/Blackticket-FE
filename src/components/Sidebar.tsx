"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import personalIcon from "../../public/icons/personalinfo-icon.svg";
import ticketIcon from "../../public/icons/ticketIcon.svg";
import paymentIcon from "../../public/icons/paymentIcon.svg";
import changePsswordIcon from "../../public/icons/securityIcon.svg";
import contactIcon from "../../public/icons/contacntIcon.svg";
import logoutIcon from "../../public/icons/logoutIcon.svg";

interface SidebarProps {
    onPageClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onPageClick }) => {
    const pathname = usePathname();

    const links = [
        { href: "/dashboard/personalInfo", label: "Personal Info", icon: personalIcon },
        { href: "/dashboard/myTickets", label: "My tickets", icon: ticketIcon },
        { href: "/dashboard/mySales", label: "My sales", icon: ticketIcon },
        { href: "/dashboard/payment", label: "Payment", icon: paymentIcon },
        { href: "/dashboard/changePassword", label: "Change password", icon: changePsswordIcon },
        { href: "/dashboard/contact", label: "Contact", icon: contactIcon },
    ];

    return (
        <div className="w-64 max-sm:ml-5">
            <div className="mb-12 pt-20 ">
                <p className="text-xl text-white">Biletebihub03@gmail.com</p>
                <p className="text-[16px] text-[#CE4343]">Not verified</p>
            </div>
            <ul className="flex flex-col gap-10">
                {links.map((link) => (
                    <li key={link.href} onClick={onPageClick}>
                        <Link
                            href={link.href}
                            className={`flex items-center gap-3 rounded max-sm:text-[18px] ${
                                pathname === link.href
                                    ? "text-white font-semibold"
                                    : "text-gray-400 font-normal"
                            }`}
                        >
                            <Image src={link.icon} alt={link.label} width={24} height={24} />
                            {link.label}
                        </Link>
                    </li>
                ))}
                <Link className="flex items-center gap-3" href={"/"}>
                    <Image src={logoutIcon} alt="logoutIcon" width={24} height={24} />
                    <li className="text-gray-400 font-normal">Log out</li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;
