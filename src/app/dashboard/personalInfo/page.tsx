import Image from "next/image";
import Link from "next/link";

import editIcon from "../../../../public/icons/editIcon.svg";
import addIcon from "../../../../public/icons/addIcon.svg";
import arrowLeft from "../../../../public/icons/arrow-left.svg";

const page = () => {
    return (
        <div className=" w-full md:w-[835px] h-[980px] flex flex-col  md:border border-[#746d6d] rounded-lg px-16 py-20">
            <Link className="md:hidden" href="/dashboard">
                <Image src={arrowLeft} width={20} height={20} alt="" />
            </Link>

            <h2 className="text-3xl md:text-4xl text-white">Personal Info</h2>
            <div className=" h-10 md:h-12 w-10 md:w-12 bg-[#E21836] rounded-[50%] flex justify-center items-center  my-8">
                <p>B</p>
            </div>

            <div className="w-[310px] md:w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Profile</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">test testishvili</p>
                <hr />
            </div>

            <div className="w-[310px]  md:w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Location</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">Tbilisi,Georgia</p>
                <hr />
            </div>

            <div className="w-[310px] md:w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Gmail</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">biletebihub01@gmail.com</p>
                <hr />
            </div>

            <div className="w-[310px] md:w-[632px] flex justify-between mb-14">
                <p>ID number</p>
                <Image src={addIcon} alt="editIcon" width={26} height={24} />
            </div>

            <div className="w-[310px] md:w-[632px] flex justify-between">
                <p>Phone</p>
                <Image src={addIcon} alt="editIcon" width={26} height={24} />
            </div>
        </div>
    );
};

export default page;
