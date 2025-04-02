"use client";

import React from "react";
import Modal from "../Modal";

import InputWrapper from "../ui/form/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

import GoogleLogIn from "./GoogleLogIn";

import { LoginModalProps } from "./types";
import { useLogin } from "./hooks";

const LogIn = ({ callFromHeader }: LoginModalProps) => {
    const {
        register,
        handleSubmit,
        errors,
        isSignInModalOpen,
        closeSignInModal,
        openSignUpModal,
        onSubmitHandler,
    } = useLogin();

    return (
        <>
            <Modal
                callFromHeader={callFromHeader}
                btnText="Log In"
                isOpen={isSignInModalOpen}
                onClose={closeSignInModal}
            >
                <form
                    className="w-full flex flex-col items-center"
                    onSubmit={handleSubmit(onSubmitHandler)}
                >
                    <div className="flex flex-col gap-3 w-full">
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
                        <div className="flex  justify-between w-full ">
                            <div className="self-start flex justify-center items-center gap-1.5">
                                <Checkbox defaultChecked={true} />
                                <p className="  text-white/90 text-base font-medium">Remember</p>
                            </div>
                            <p className="text-white/90 text-base ">Forget Password</p>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-12 mb-6  rounded-2xl h-14 py-4 bg-Secondary text-white text-xl font-mediumtransition-colors  duration-200 ease-in-out"
                    >
                        Sign in
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
                            openSignUpModal();
                            closeSignInModal();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default LogIn;
