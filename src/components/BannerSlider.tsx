"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BannerImages } from "../images";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = 5 * ONE_SECOND;
const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
    type: "spring",
    stiffness: 400,
    mass: 3,
    damping: 50,
};
export const BannerSlider = () => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [imgIndex, setImgIndex] = useState<number>(0);

    const dragX = useMotionValue(0);
    const dragXProgress = useMotionValue(0);

    useMotionValueEvent(dragX, "change", (latest) => {
        if (typeof latest === "number" && dragging) {
            dragXProgress.set(latest);
        } else {
            dragXProgress.set(0);
        }
    });

    useEffect(() => {
        const intervalRef = setInterval(() => {
            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === BannerImages.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);
        const x = dragXProgress.get();

        return () => clearInterval(intervalRef);
    }, [dragXProgress]);

    const onDragStart = () => {
        setDragging(true);
    };
    const onDragEnd = () => {
        setDragging(false);

        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < BannerImages.length - 1) {
            setImgIndex((prev) => prev + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prev) => prev - 1);
        }
    };

    return (
        <div className=" mt-12 relative  overflow-hidden  w-full mb-[186px]">
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                animate={{
                    translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                style={{ x: dragX }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className="flex items-center cursor-grab active:cursor-grabbing"
            >
                <Images imgIndex={imgIndex} />
            </motion.div>
            <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
    );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
    return (
        <>
            {BannerImages?.map((img, i) => {
                return (
                    <motion.div
                        key={img.id}
                        style={{
                            backgroundImage: `url(${img.img.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        animate={{
                            scale: imgIndex === i ? 1 : 0.9,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover "
                    />
                );
            })}
        </>
    );
};

const Dots = ({
    imgIndex,
    setImgIndex,
}: {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div className="mt-4 absolute z-30 rigth-[50%] top-[95%] flex w-full justify-center gap-2">
            {BannerImages?.map((img, i) => {
                return (
                    <button
                        onClick={() => setImgIndex(img.id)}
                        key={img.id}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            i === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                        }`}
                    />
                );
            })}
        </div>
    );
};
