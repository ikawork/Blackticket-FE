import Image from "next/image";
import editIcon from "../../../public/icons/editIcon.svg";
import addIcon from "../../../public/icons/addIcon.svg";

const Dashbord = () => {
    return (
        <div className="w-[835px] h-[980px] flex flex-col border border-[#746d6d] rounded-lg px-16 py-20">
            <h2 className="text-4xl text-white">Personal Info</h2>
            <div className="h-12 w-12 bg-[#E21836] rounded-[50%] flex justify-center items-center  my-8">
                <p>B</p>
            </div>

            <div className="w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Profile</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">test testishvili</p>
                <hr />
            </div>

            <div className="w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Location</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">Tbilisi,Georgia</p>
                <hr />
            </div>

            <div className="w-[632px] mb-[60px]">
                <div className="flex justify-between items-center">
                    <p className="">Gmail</p>
                    <Image src={editIcon} alt="editIcon" width={24} height={24} />
                </div>

                <p className="text-[#B5B5B5] mt-10 mb-10">biletebihub01@gmail.com</p>
                <hr className="text-red" />
            </div>

            <div className="w-[632px] flex justify-between mb-14">
                <p>ID number</p>
                <Image src={addIcon} alt="editIcon" width={26} height={24} />
            </div>

            <div className="w-[632px] flex justify-between">
                <p>Phone</p>
                <Image src={addIcon} alt="editIcon" width={26} height={24} />
            </div>
        </div>
    );
};

export default Dashbord;
