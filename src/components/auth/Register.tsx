"use client";

import React from "react";
import Modal from "../Modal";

import { IoIosWarning } from "react-icons/io";
import InputWrapper from "../ui/form/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

import GoogleLogIn from "./GoogleLogIn";

import { useRegister } from "./hooks";

const Register = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        errors,
        isSignUpModalOpen,
        closeSignUpModal,
        openSignInModal,
        onSubmitHandler,
    } = useRegister();

    return (
        <Modal btnText="Sign Up" isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
            {errors.agreeToPrivacyPolcy && (
                <div className="border border-red w-full rounded-2xl h-12 py-3 px-9 flex justify-center items-center text-white gap-2">
                    <IoIosWarning className="text-2xl text-red" />
                    <p className="text-sm font-medium">{errors.agreeToPrivacyPolcy.message}</p>
                </div>
            )}
            <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <div className="flex flex-col gap-3 w-full">
                    <InputWrapper
                        type="text"
                        placeholder="Username"
                        register={register("username")}
                        error={errors.username}
                    />

                    <InputWrapper
                        type="email"
                        placeholder="Email"
                        register={register("email")}
                        error={errors.email}
                    />

                    <InputWrapper
                        placeholder="Password"
                        register={register("password")}
                        error={errors.password}
                    />
                    <InputWrapper
                        placeholder="Repeat password"
                        register={register("confirmPassword")}
                        error={errors.confirmPassword}
                    />
                    <div className="self-start flex justify-center items-center gap-1.5">
                        <Checkbox
                            defaultChecked={true}
                            id="agreeToPrivacyPolcy"
                            checked={watch("agreeToPrivacyPolcy") || false}
                            onCheckedChange={(value: boolean) =>
                                setValue("agreeToPrivacyPolcy", value === true)
                            }
                            {...register("agreeToPrivacyPolcy")}
                        />
                        <p className=" underline text-white/90 text-base font-medium">
                            Agree terms and rules{" "}
                        </p>
                    </div>
                </div>

                <Button className="w-full mt-12 mb-6  rounded-2xl h-14 py-4 bg-Secondary text-white text-xl font-mediumtransition-colors  duration-200 ease-in-out">
                    Sign up
                </Button>
            </form>
            <div className="flex justify-center items-center w-full gap-3">
                <span className="border-b bg-[#6D6F7424]  w-full" />
                <p>Or</p>
                <span className="border-b bg-[#6D6F7424] w-full" />
            </div>

            <GoogleLogIn />
            <div className="flex   justify-center items-center gap-1 text-[#FFFFFF] text-base font-medium">
                <p>Already have an account?</p>
                <button
                    onClick={() => {
                        closeSignUpModal();
                        openSignInModal();
                    }}
                >
                    Log in
                </button>
            </div>
        </Modal>
    );
};

export default Register;
