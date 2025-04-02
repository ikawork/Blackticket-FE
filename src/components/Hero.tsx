"use client";
import React from "react";
import { AnimatedText } from "./animationHelpers/StaggerText";
import SearchAndFilter from "./SearchAndFilter";

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center pb-2 pt-[110px] ">
            <div className="mx-20 mb-18 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 mb-[84px]">
                    <AnimatedText
                        text=" Find Your Perfect Ticket"
                        el="h1"
                        className="font-extrabold text-5xl"
                    />

                    <AnimatedText
                        text="Discover amazing events happening near you"
                        el="h3"
                        className="font-light text-2xl self-center"
                    />
                </div>
            </div>
            <SearchAndFilter />
        </section>
    );
};

export default Hero;
