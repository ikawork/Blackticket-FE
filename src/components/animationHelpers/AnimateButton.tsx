"use client";
import React from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../ui/button";
export const AnimateButton = ({
    children,
    className,
    icon,
    staggerNum,
    onClick = () => {},
}: {
    children: string;
    className?: string;
    icon: React.ReactNode;
    staggerNum: number;
    onClick?: () => void;
}) => {
    const [scope, animate] = useAnimate();
    function generateUniqueId() {
        return uuidv4();
    }

    const onClickAnimate = async () => {
        await animate([
            [".button", { scale: 0.9 }, { duration: 0.1, ease: "easeInOut" }],
            [".button", { scale: 1 }, { duration: 0.1, ease: "easeInOut", at: "0.1" }],
        ]);

        if (onClick) {
            console.log("clicked");
            onClick();
        }
    };
    const onButtonHover = () => {
        animate([
            [
                ".letter",
                { y: "-120%" },
                { duration: 0.2, ease: "easeInOut", delay: stagger(staggerNum) },
            ],
            [".button", { scale: 1.05 }, { duration: 0.2, ease: "easeInOut", at: "<" }],
            [".icon", { y: 0 }, { duration: 0.2, ease: "easeInOut", at: "-0.2" }],
        ]);
    };

    const onButtonLeave = () => {
        animate([
            [".icon", { y: "220%" }, { duration: 0.2, ease: "easeInOut", at: "-0.2" }],
            [".button", { scale: 1 }, { duration: 0.2, ease: "easeInOut", at: "<" }],
            [
                ".letter",
                { y: 0 },
                {
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: stagger(staggerNum),
                    at: "-0.1",
                },
            ],
        ]);
    };

    return (
        <div className=" overflow-hidden " ref={scope}>
            <Button
                onClick={onClickAnimate}
                onMouseOver={onButtonHover}
                onMouseLeave={onButtonLeave}
                className={`bg-default-primary relative button py-2.5 px-6 flex  justify-center items-center  overflow-hidden rounded-[30px] text-md  font-normal hover:bg-default-primary transition-colors duration-300 ease-in-out ${className} `}
            >
                <span className="sr-only">{children}</span>
                <span aria-hidden>
                    {children.split("").map((letter) => (
                        <span
                            className={`letter inline-block ${letter === " " && "w-1"}`}
                            key={generateUniqueId()}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
                <motion.span className="absolute icon text-xl" initial={{ y: "220%" }}>
                    {icon}
                </motion.span>
            </Button>
        </div>
    );
};
