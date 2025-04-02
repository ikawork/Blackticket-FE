"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type AnimatedTextProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
};

const defaultAnimation = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const AnimatedText = ({ text, el: Wrapper = "h1", className }: AnimatedTextProps) => {
    function generateUniqueId() {
        return uuidv4();
    }
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
            timeout = setTimeout(async () => {
                await controls.start("hidden");
                controls.start("visible");
            }, 5000);
        };

        if (isInView) {
            show();
        } else {
            controls.start("hidden");
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [isInView, controls]);
    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                transition={{ duration: 300, staggerChildren: 0.05, ease: "easeInOut" }}
                aria-hidden
            >
                {textArray.map((line) => (
                    <span key={generateUniqueId()} className="block">
                        {line.split(" ").map((word, i) => (
                            <span className="inline-block" key={i}>
                                {word.split("").map((char) => (
                                    <motion.span
                                        className="inline-block"
                                        variants={defaultAnimation}
                                        key={generateUniqueId()}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
