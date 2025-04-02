"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const DURATION = 0.25;
const STAGER = 0.025;
export const AnimateLink = ({ children, href }: { children: string; href: string }) => {
    const MotionLink = motion.create(Link);
    function generateUniqueId() {
        return uuidv4();
    }

    return (
        <MotionLink
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-md"
        >
            <div>
                {children.split("").map((l, i) => {
                    return (
                        <motion.span
                            className={`inline-block ${l === " " ? "w-2" : ""}`}
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGER * i,
                            }}
                            key={generateUniqueId()}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </div>
            <div className=" absolute inset-0">
                {children.split("").map((l, i) => {
                    return (
                        <motion.span
                            className={`inline-block ${l === " " ? "w-2" : ""}`}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGER * i,
                            }}
                            key={generateUniqueId()}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </div>
        </MotionLink>
    );
};
