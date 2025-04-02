import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import arrowLeft from "../../../../public/icons/arrow-left.svg";

const page = () => {
    return (
        <div className=" w-full md:w-[835px] h-[980px]  md:border border-[#746d6d] rounded-lg px-16 py-20">
            <Link className="md:hidden" href="/dashboard">
                <Image src={arrowLeft} width={20} height={20} alt="" />
            </Link>
            <h2 className="text-4xl text-white">My tickets</h2>
            <div className="mt-44 flex flex-col items-center">
                <p className="text-xl text-white mb-8">You have no tickets</p>
                <Button className="bg-[#E21836] px-12 py-4 text-xl text-white">Add ticket</Button>
            </div>
        </div>
    );
};

export default page;
