import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Input } from "../input";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    type?: "text" | "password" | "email" | "number" | "tel" | "search";

    className?: string;
    placeholder?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

const InputWrapper = ({ register, className, placeholder, error, type }: InputProps) => {
    const [password1Visible, setPassword1Visible] = React.useState<boolean>(false);

    const passwordIcon =
        password1Visible === true ? (
            <AiOutlineEyeInvisible className="w-[22px] h-[22px]" />
        ) : (
            <AiOutlineEye className="w-[22px] h-[22px]" />
        );

    const inputType = type ? type : password1Visible ? "text" : "password";

    return (
        <div className="w-full relative ">
            <Input
                {...register}
                type={inputType}
                className={`bg-dark h-14 text-xl  border-[#6D6F7442] relative rounded-2xl placeholder:text-[#B5B5B5] placeholder:text-[18px] focus-visible:ring-offset-0 focus-visible:ring-slate-500/30 py-4 px-5 ${className}`}
                placeholder={placeholder}
            />
            {!type && (
                <button
                    type="button"
                    onClick={() => setPassword1Visible((prev) => !prev)}
                    className={`absolute right-5 ${error ? "top-[20%]" : "top-1/3"} text-[#B5B5B5] first-letter:flex justify-center items-center`}
                >
                    {passwordIcon}
                </button>
            )}
            {error && <p className="text-red text-sm mt-1.5">{error.message}</p>}
        </div>
    );
};

export default InputWrapper;
