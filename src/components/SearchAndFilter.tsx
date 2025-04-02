import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "./ui/input";
import CategoryDropDown from "./CategoryDropDown";
import CalendarPicker from "./Calendar";
import { FaSearch } from "react-icons/fa";
import { AnimateButton } from "./animationHelpers/AnimateButton";

const SearchAndFilter = () => {
    const onButtonClick = () => {
        console.log("button clicked");
    };

    return (
        <div className="w-full h-[54px] px-16 flex justify-between items-center gap-4 ">
            <div className="px-4  h-full flex justify-center items-center border-2 border-gray-bg rounded-[30px] w-1/4  bg-[#6D6F7414] ">
                <CiSearch className="text-3xl text-white  " />
                <Input
                    className=" bg-transparent
                      placeholder:text-white placeholder:text-lg   focus-visible:ring-5  border-none placeholder:opacity-40 "
                    placeholder="Search events"
                />
            </div>
            <div className=" h-full flex pl-4 justify-start items-center  border border-[#6D6F7433]  rounded-[30px] w-1/4 bg-[#6D6F7414] ">
                <CategoryDropDown />
            </div>
            <div className="  w-1/4 h-full border border-[#6D6F7433] rounded-[30px] flex justify-start items-center bg-[#6D6F7414]  ">
                <CalendarPicker />
            </div>

            <AnimateButton
                className="h-full rounded-[14px] "
                onClick={onButtonClick}
                staggerNum={0.005}
                icon={<FaSearch />}
            >
                Search tickets
            </AnimateButton>
        </div>
    );
};

export default SearchAndFilter;
