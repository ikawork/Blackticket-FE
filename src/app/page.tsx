import { BannerSlider } from "@/components/BannerSlider";
import Carousel from "@/components/Carousel";

import Hero from "@/components/Hero";
import { sportrData, theaterData, popularEventData } from "@/images";
import { auth } from "@/auth";

export default async function Home() {
    const session = await auth();

    return (
        <div className="w-full flex flex-col gap-5  px-[90px]">
            <h1>{session?.user?.name}</h1>
            <h1>{session?.user?.email}</h1>
            <Hero />

            <BannerSlider />
            <Carousel title={"Theater"} sliderData={theaterData} />
            <Carousel title={"Sport"} sliderData={sportrData} />
            <Carousel title={"Popular"} sliderData={popularEventData} />
        </div>
    );
}
