"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handlePageClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex gap-16 ml-36 mt-28 mb-28 max-md:ml-0 max-md:mt-0 max-md:mb-0">
            <div className="hidden md:block">
                <Sidebar onPageClick={handlePageClick} />
            </div>

            <main className={`w-full p-4 ${isSidebarOpen && "hidden md:block"}`}>{children}</main>

            {isSidebarOpen && (
                <div className="block md:hidden">
                    <Sidebar onPageClick={handlePageClick} />
                </div>
            )}
        </div>
    );
}
