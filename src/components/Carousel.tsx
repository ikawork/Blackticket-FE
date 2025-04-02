"use client";

import { useCallback, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";

interface SliderDataItem {
    id: number;
    img: StaticImageData;
    title: string;
    data: string;
}

interface CarouselProps {
    title: string;
    sliderData: SliderDataItem[];
}

const Carousel = ({ title, sliderData }: CarouselProps) => {
    const itemsPerPage = 3;
    const totalItems = sliderData.length || 0;

    const [currentPage, setCurrentPage] = useState<number>(0);

    const handleNext = useCallback(() => {
        setCurrentPage((prevIndex) =>
            prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage,
        );
    }, [itemsPerPage, totalItems]);

    const handlePrev = useCallback(() => {
        setCurrentPage((prevIndex) =>
            prevIndex - itemsPerPage < 0 ? totalItems! - itemsPerPage : prevIndex - itemsPerPage,
        );
    }, [itemsPerPage, totalItems]);

    return (
        <div className="flex items-center w-full justify-center mb-[190px] h-fit">
            <div className=" w-full h-fit overflow-hidden">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    <div className="flex items-center justify-around w-[160px] h-[46px] border border-[#6D6F744D] rounded-3xl">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={handlePrev}
                            className="text-white flex   w-5 h-5"
                        >
                            <IoIosArrowBack />
                        </Button>

                        <span className="text-lg font-medium text-white">
                            {Math.ceil((currentPage + 1) / 3)} of{" "}
                            {Math.ceil(totalItems / itemsPerPage)}
                        </span>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleNext}
                            className="text-white w-5 h-5"
                        >
                            <IoIosArrowForward />
                        </Button>
                    </div>
                </div>

                <div
                    className="flex  justify-between items-center h-fit gap-14 transition-transform duration-300 ease-in-out"
                    style={{
                        transform: `translateX(-${3 * (currentPage / totalItems) * 103}%)`,
                    }}
                >
                    {sliderData.map((item) => (
                        <div key={item.id} className=" flex flex-col gap-5 min-w-[30%] ">
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover rounded-lg aspect-video "
                            />
                            <div className="">
                                <h3 className="flex flex-col ga-2.5 text-lg font-semibold ">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.data}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
