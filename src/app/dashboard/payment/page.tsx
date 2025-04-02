import { Button } from "@/components/ui/button";

const Paymant = () => {
    return (
        <div className="w-[835px] h-[621px]  border border-[#746d6d] rounded-lg px-16 py-20">
            <h2 className="text-4xl text-white">Personal Info</h2>
            <div className="flex flex-col items-center mt-44">
                <p className="text-xl text-white mb-8">No card added!</p>
                <Button className="bg-[#E21836] px-12 py-4 text-xl text-white">Add card</Button>
            </div>
        </div>
    );
};

export default Paymant;
