"use client";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

const DUMMY_DATA = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Concert" },
    { id: 3, name: "Theatre" },
    { id: 4, name: "Cinema" },
    { id: 5, name: "Events" },
];

const CategoryDropDown = () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Select Category");

    const isOpenArrow = open ? "rotate-180 ease-in duration-300" : "rotate-0 ease-in duration-300";
    return (
        <div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="flex justify-between items-center gap-3   text-lg w-60">
                    <span className="opacity-40">{selected ? selected : "Select Category"}</span>
                    <IoIosArrowDown className={`${isOpenArrow} `} />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="px-4 py-2  w-60">
                    <DropdownMenuLabel className="text-white">Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-400" />
                    {DUMMY_DATA.map((item) => (
                        <DropdownMenuItem
                            className="text-sm  text-[#6D6F74] focus:scale-105 transition-all duration-200 ease-in-out"
                            key={item.id}
                            onSelect={() => setSelected(item.name)}
                        >
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default CategoryDropDown;
